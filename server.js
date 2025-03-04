const express = require('express');
const users = require('./schema'); 

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email cannot be empty' });
  }
  if (!password) {
    return res.status(400).json({ error: 'Password cannot be empty' });
  }

  const user = users.find(user => user.email === email && user.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
