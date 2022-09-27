const express = require('express');
const app = express();
const port = 8000;

const path = require('path');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

app.use(express.static(PUBLIC_DIRECTORY));
app.set('view engine', 'ejs');

app.get("/", (res, req) => {
  res.sendFile('index.html', { root: PUBLIC_DIRECTORY })
});

app.get("/cars", (req, res) => {
  res.sendFile('cars.html', { root: PUBLIC_DIRECTORY })
});

app.get("/carsTest", (req, res) => {
  res.render('index', {
    name: 'asd'
  })
});

app.listen(port, () => {
  console.log(`Server running on http://0.0.0.0:${port}`)
})
