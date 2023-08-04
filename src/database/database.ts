import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('books', 'root', 'saswat@1998', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log("Connection Established successfully");
}).catch((error)=>{
    console.log("Error in connecting to database", error);
});
