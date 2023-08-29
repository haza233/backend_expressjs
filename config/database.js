import { Sequelize } from "sequelize";

const db = new Sequelize ('school','root','',{
    host: "localhost",
    dialect: "mysql"
});

 export default db ;