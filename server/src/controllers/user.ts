import{Request,Response}from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';


export const newUser=async (req:Request,res:Response)=>{
    const{username,password}=req.body;
    

    //validamoss si el usuario ya existe en base de datos
   const user= await User.findOne({where:{username:username}})

   if (user){
      return res.status(400).json({
            msg:'ya existe usuario con este nombre'
        })
   }

   const hashedPassword = await bcrypt.hash(password,10);
   console.log(hashedPassword)
    try {
        //guardamos usuario en base de datos
        await User.create({
            username:username,
            password:hashedPassword
        
        })
        res.json({
            msg:'Usuario creado exitosamente'
        })  
    } catch (error) {
        res.status(400).json({
            msg:'upss ocurrio un error',
            error
        })
        
    }
    
}
export const getUsers= async(req:Request,res:Response)=>{
    const listusers= await User.findAll()
    res.json(listusers)

}

export const getUser=async(req:Request,res:Response)=>{
    const{id}=req.params;
    const user = await User.findByPk(id);
    if(user){
        res.json(user)
    }else{
        res.status(404).json({
            msg: `no existe un user con el id ${id}`
        })
    }

}

export const loginUser= async(req:Request,res:Response)=>{
    
    const { username, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   const user: any = await User.findOne({ where: { username: username } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = jwt.sign({
    username: username
   }, process.env.SECRET_KEY || 'Olimac123');
   
   res.json(token);


}
