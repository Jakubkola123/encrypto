const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'testuser' && password === 'testpassword') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
