const mongoose = require('mongoose')

const Userschema = new mongoose.Schema ({
    firstname : {type:String,required:true},
    lastname : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    phone : {type:Number,required:true},
    role : {type:String,required:true},
    favoris :{type:Array}
})


module.exports = mongoose.model('Utilisateur',Userschema)