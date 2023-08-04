import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('books', 'root', 'saswat@1998', {
    host: 'host.docker.internal', // or the actual IP address of your host machine
    dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log("Connection Established successfully");
}).catch((error)=>{
    console.log("Error in connecting to database", error);
});
