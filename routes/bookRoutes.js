const express = require('express');
const { checkAvailability, issueBook, returnBook } = require('../controllers/bookController');
const router = express.Router();

router.get('/availability/:bookId', checkAvailability);
router.post('/issue', issueBook);
router.post('/return', returnBook);

module.exports = router;