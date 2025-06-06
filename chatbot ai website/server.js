const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const starkcoreData = require('./starkcoreData');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/chat', (req, res) => {
  const question = req.body.message.toLowerCase();
  let reply = "Sorry, I don't have information about that.";

  if (question.includes("feature")) {
    reply = "Here are the key features: " + starkcoreData.keyFeatures.join(", ");
  } else if (question.includes("price") || question.includes("cost")) {
    reply = `Pricing:
- Basic: ${starkcoreData.pricing.basic}
- Intermediate: ${starkcoreData.pricing.intermediate}
- Advanced: ${starkcoreData.pricing.advanced}`;
  } else if (question.includes("contact")) {
    reply = `You can contact us at: ${starkcoreData.contact}`;
  } else if (question.includes("what is") || question.includes("starkcore")) {
    reply = starkcoreData.description;
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
