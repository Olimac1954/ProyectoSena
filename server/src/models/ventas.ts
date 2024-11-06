import {DataTypes} from 'sequelize';
import db from '../db/conecction';

const Venta = db.define('Venta',{
  id: {
    type:DataTypes.NUMBER,
    primaryKey: true
  },
  nombreU: {
    type:DataTypes.STRING
  },
  telefono: {
    type:DataTypes.NUMBER
  },
  name: {
    type:DataTypes.STRING
  },

  precio: {
    type:DataTypes.DOUBLE
  }, 
  stock: {
    type:DataTypes.NUMBER
  }
},{
    tableName: 'ventas',
    createdAt:false,
    updatedAt:false
});
export default Venta;