import {DataTypes} from 'sequelize';
import db from '../db/conecction';

const Producto = db.define('Articulo',{
  name: {
    type:DataTypes.STRING
  },
  categoria: {
    type:DataTypes.STRING
  },
  description: {
    type:DataTypes.STRING
  },
  price: {
    type:DataTypes.DOUBLE
  }, 
  stock: {
    type:DataTypes.NUMBER
  },
  url:{
    type:DataTypes.STRING
  }
},{
    createdAt:false,
    updatedAt:false
});
export default Producto;