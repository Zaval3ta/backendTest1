import mongoose, { Schema } from "mongoose";
import { IUser } from "types/userTypes";
import bycrypt from 'bcrypt';

const userSchema: Schema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
  },{
    timestamps: true,
    versionKey: false
  }
)
//Encriptar contraseña
userSchema.pre<IUser>("save",async function(next){
  if(this.isModified("password") || this.isNew){
    const salt = await bycrypt.genSalt(12);
    const hash = await bycrypt.hash(this.password, salt)
    this.password = hash;
  }
  next();
})
//Comparacion de contraseña
userSchema.method("comparePassword", async function(password: string): Promise<boolean>{
  return await bycrypt.compare(password, this.password as string)
})
//Eliminamos la contraseña en el JSON
userSchema.methods.toJSON = function(){
  const userObj = this.toObject();
  delete userObj.password;
  return userObj;
}

export const userModel = mongoose.model<IUser>("user", userSchema);