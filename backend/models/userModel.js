const mongoose=require('mongoose');
const bcrypt =require('bcryptjs')
const userSchema=mongoose.Schema({
    name:{type:"String",required:true},
    email:{type:"String" ,rewuired: true},
    password:{type:"String",required:true},
    pic:{type:"String",default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" },

},
{
    timestamp:true
});
userSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
}

//to do operations before saving to database
userSchema.pre('save',async function (next){
    if(!this.isModified){
        next();
    }
    const salt = await bcrypt.genSalt(10);//to generate stronger sale 
this.password=await bcrypt.hash(this.password,salt);
})
const User=mongoose.model("User",userSchema); 
module.exports=User;