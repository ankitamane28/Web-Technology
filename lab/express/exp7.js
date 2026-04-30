const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log('Middleware executed at', new Date());
    next();
});

let users = [
    { id: 1, name: 'Ankita', age: 21 },
    { id: 2, name: 'Pranali', age: 20 },
    { id: 3, name: 'Sanika', age: 20 }
];

// Get all users
app.get('/user', (req, res) => {
    res.json(users);
});

// ✅ FIXED route + variable
app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const foundUser = users.find(u => u.id === userId);

    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});