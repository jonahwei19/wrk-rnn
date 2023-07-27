const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const openaiRes = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', req.body, {
      headers: {
        'Authorization': `Bearer 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`,
        'Content-Type': 'application/json'
      }
    });
    res.json(openaiRes.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
