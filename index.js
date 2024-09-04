const express = require('express');
const path = require('path');
const app = express();
const PORT = 5050;

const johnrayRoute = require('./routes/johnray');
const carpioRoute = require('./routes/carpio');
const supportRoute = require('./routes/support');
const galleryRoute = require('./routes/gallery');

app.use(express.static(path.join(__dirname, 'html')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.use('/johnray', johnrayRoute);
app.use('/carpio', carpioRoute);
app.use('/support', supportRoute);
app.use('/gallery', galleryRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});