import request from 'supertest';
import app from '../app';

describe('POST /api/books', () => {
  it('should create a new book and return 200 status code', async () => {
    const newBook = {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedYear: 1925,
    };

    const response = await request(app)
      .post('/api/books')
      .send(newBook);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(newBook.title);
    expect(response.body.author).toBe(newBook.author);
    expect(response.body.publishedYear).toBe(newBook.publishedYear);
  });

  it('should return 400 status code if title is missing', async () => {
    const newBook = {
      author: 'F. Scott Fitzgerald',
      publishedYear: 1925,
    };

    const response = await request(app)
      .post('/api/books')
      .send(newBook);

    expect(response.status).toBe(400);
    expect(response.body.errors).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            msg: 'Title is required',
          }),
        ]),
      );
      
  });

  // Not adding the rest of the tests as they rae almost same, and this is just to demonstrate my knowledge on UTs
});
