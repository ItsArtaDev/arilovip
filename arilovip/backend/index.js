const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Hello from AriloVIP backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
