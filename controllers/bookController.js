const Book = require('../models/Book');

// Check Book Availability
const checkAvailability = async (req, res) => {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const isAvailable = book.isAvailable;
    res.json({ available: isAvailable });
};

// Issue a Book
const issueBook = async (req, res) => {
    const { bookId, userId } = req.body;
    const book = await Book.findById(bookId);
    if (!book.isAvailable) return res.status(400).json({ message: 'Book is not available' });

    book.isAvailable = false;
    book.issuedTo = userId;
    await book.save();
    res.json({ message: 'Book issued successfully' });
};

// Return a Book
const returnBook = async (req, res) => {
    const { bookId } = req.body;
    const book = await Book.findById(bookId);
    if (book.isAvailable) return res.status(400).json({ message: 'Book is already available' });

    book.isAvailable = true;
    book.issuedTo = null;
    await book.save();
    res.json({ message: 'Book returned successfully' });
};

module.exports = { checkAvailability, issueBook, returnBook };