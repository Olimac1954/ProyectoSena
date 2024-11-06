import { Sequelize } from "sequelize";


const sequelize = new Sequelize('camilo_proyecto', 'root', 'Chester1954', {
    host: 'localhost',
    dialect:  'mysql' 
  });

  export default sequelize