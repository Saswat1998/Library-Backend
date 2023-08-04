import express from 'express';
import bookRoutes from './routes/bookRoutes';
import { sequelize } from './database/database';

const app = express();
const port = 3000;

app.use(express.json());
app.use(bookRoutes)

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server running!");
    });
});
