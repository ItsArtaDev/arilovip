const express = require('express');
const mongoose = require('mongoose');
const startRadiusServer = require('./radius-server');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/users', require('./routes/users'));
app.use('/api/servers', require('./routes/servers'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/reseller', require('./routes/reseller'));
app.use('/api/user', require('./routes/user'));
app.use('/api/discount-codes', require('./routes/discountCodes'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/logs', require('./routes/logs'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/telegram', require('./routes/telegram'));

app.get('/', (req, res) => {
  res.send('Hello from AriloVIP backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
  startRadiusServer();
});
