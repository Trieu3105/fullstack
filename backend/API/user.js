const express = require('express');
const db = require('../data/db');

const router = express.Router();

// Lấy tất cả user từ database
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results);
    });
});

module.exports = router;
