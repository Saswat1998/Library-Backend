import express, { Request, Response } from "express";
import Book from "../models/book";
import { body, validationResult } from 'express-validator';

const router = express.Router();
const validateResult = [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('publishedYear').isInt({gt: 0}).withMessage('Published Year must be a vlaid positive number')
];

// get all books
router.get("/api/books", async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// get specific book according to id
router.get("/api/books/:id", async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.json(book);
});

// add a book
router.post("/api/books", validateResult, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()});
  } 
  const book = await Book.create(req.body);
  res.json(book);
});

// update a book details by id
router.put("/api/books/:id", async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (book) {
        await book.update(req.body);
        res.json(book);
    }
    else {
        res.status(404).send("Book Not Found!");
    }
    
});

// delete a book by id
router.delete('/api/books/:id', async (req, res) => {
    const result = await Book.destroy({
        where: { id: req.params.id}
    });
    res.json({deleted: result === 1 });
});

export default router;
