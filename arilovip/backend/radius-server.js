const radius = require('radius');
const dgram = require('dgram');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const secret = 'radius_secret'; // Should be in config
const server = dgram.createSocket('udp4');

server.on('message', async (msg, rinfo) => {
  const code = radius.decode({ packet: msg, secret: secret });

  if (code.code !== 'Access-Request') {
    console.log('Unknown RADIUS code', code.code);
    return;
  }

  const username = code.attributes['User-Name'];
  const password = code.attributes['User-Password'];

  try {
    const user = await User.findOne({ username });
    if (!user) {
      // User not found
      const response = radius.encode_response({
        packet: code,
        code: 'Access-Reject',
        secret: secret,
      });
      server.send(response, 0, response.length, rinfo.port, rinfo.address);
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Invalid password
      const response = radius.encode_response({
        packet: code,
        code: 'Access-Reject',
        secret: secret,
      });
      server.send(response, 0, response.length, rinfo.port, rinfo.address);
      return;
    }

    // Successful authentication
    const response = radius.encode_response({
      packet: code,
      code: 'Access-Accept',
      secret: secret,
    });
    server.send(response, 0, response.length, rinfo.port, rinfo.address);
  } catch (err) {
    console.error('RADIUS server error:', err);
  }
});

server.on('listening', () => {
  const address = server.address();
  console.log(`RADIUS server listening ${address.address}:${address.port}`);
});

function startRadiusServer() {
  server.bind(1812);
}

module.exports = startRadiusServer;
