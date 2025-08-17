const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const {v4: uuidv4} = require("uuid")
const merge = require('./testpdf'); // Assuming testpdf.js exports the merge function

app.use((req, res, next) => {
  if (req.method === "GET" && req.path !== "/") {
    return res.redirect("/");
  }
  next(); // allow normal flow
});//redirects any path to the home page

app.get('/',async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'templates', 'index.html'));
});
app.post('/upload', upload.array('pdfs'), async (req, res) => {
  // Handle file upload and merging logic here
//   res.send('Files uploaded successfully');
//   console.log('File upload received', req.files);
  //Thus we uploaded the files to the server
if(!req.files || req.files.length === 0) {
  return res.status(400).send('No files uploaded');
}
const uniqueId = uuidv4();
const outputFilePath = path.join(__dirname, 'mergedFiles', `merged-${uniqueId}.pdf`);
await merge(uniqueId,req.files);
// Send the merged PDF file as a response
res.sendFile(outputFilePath);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
