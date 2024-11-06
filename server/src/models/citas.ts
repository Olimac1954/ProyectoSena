import {DataTypes} from 'sequelize';
import db from '../db/conecction';

const Citas = db.define('Cita',{
  cedula: {
    type:DataTypes.NUMBER,
  },
  name: {
    type:DataTypes.STRING
  },
  correo: {
    type:DataTypes.STRING
  },

  asunto: {
    type:DataTypes.STRING
  }, 
 description: {
    type:DataTypes.STRING
  },
  estado: {
    type:DataTypes.STRING
  },
  diagnostico: {
    type:DataTypes.STRING
  },
  fecha: {
    type:DataTypes.DATE
  },
  hora: {
    type:DataTypes.TIME
  }
},{
    tableName: 'citas',
    createdAt:false,
    updatedAt:false
});
export default Citas;