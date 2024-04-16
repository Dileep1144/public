const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the script.js file
app.get('/ITC505/lab-7/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'script.js'));
});

// Serve CSS files with the appropriate MIME type
app.get('/ITC505/lab-7/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505', 'lab-7', 'styles.css'));
});


// Serve the form page
app.get('/lab-7/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'lab-7', 'index.html'));
});

// Serve static files
app.use('/lab-7/index.html',express.static(path.join(__dirname, 'ITC505')));

// Middleware to parse JSON and URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint to serve the landing HTML file
app.get('/ITC505/lab-7/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'ITC505','lab-7', 'index.html'));
});




// Handle form submission
app.post('/ITC505/lab-7/index.html', (req, res) => {
  const { noun, adjective, verb, adverb, pluralNoun } = req.body;

  const madLib = `In a land far away, a ${adjective} ${noun} decided to ${verb} ${adverb} because they wanted to find ${pluralNoun} to save the kingdom.`;

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
