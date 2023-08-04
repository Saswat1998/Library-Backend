import app from './app';
import { sequelize } from './database/database';

const port = 3000;

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server running!");
    });
});
