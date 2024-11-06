import {DataTypes} from 'sequelize';
import db from '../db/conecction';

const Personal = db.define('Personal',{
  id: {
    type:DataTypes.NUMBER,
    primaryKey:true
  },
  nombre_cli: {
    type:DataTypes.STRING
  },
  apellido_cli: {
    type:DataTypes.STRING
  },

  correo_cli: {
    type:DataTypes.STRING
  }, 
 fecha_nacimiento: {
    type:DataTypes.DATE
  },
  direccion_cli: {
    type:DataTypes.STRING
  },
  cargo: {
    type:DataTypes.STRING
  }
},{
  tableName: 'personal',
    createdAt:false,
    updatedAt:false
});
export default Personal;