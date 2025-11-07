const express = require('express');
const app = express();
const path = require('path');

// for static files
app.use(express.static(path.join(__dirname, '2-express-tutorial/navbar-app/styles.css')));


// app.get
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '2-express-tutorial/index.html'));
}
);
// app.post
// app.put
// app.delete
// app.all
app.all('*', (req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
}
);
// app.use
// app.listen
app.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});