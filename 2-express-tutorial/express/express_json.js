const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
}
);

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
}
);