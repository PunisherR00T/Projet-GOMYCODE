const User = require("../Models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")


exports.SignUp=async(req,res)=>{
    try {
        const {email,password} = req.body
        const found = await User.findOne({email})
        if (found){return res.status(400).send({errors:[{msg:'Cet Email existe déja'}]})}
        const newUser = new User(req.body)
        newUser.role = 'User'
        const salt = 10
        const hashedPassword = bcrypt.hashSync(password,salt)
        newUser.password = hashedPassword
        const payload = {id : newUser._id}
        var token = jwt.sign(payload,process.env.key,{ expiresIn: '1h' })

        newUser.save()
        res.status(200).send({msg:'Votre compte a bien été enregistrer',newUser,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Veuillez remplir les champs requis'}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const{email,password}=req.body
        const found = await User.findOne({email})
        if (!found){return res.status(400).send({errors:[{msg:"Cet email n'existe pas "}]})}
        const match = await bcrypt.compare(password, found.password);
        if (!match){return res.status(400).send({errors:[{msg:"Le mot de passe est incorrect"}]})}
        const payload = {id : found._id}
        var token = jwt.sign(payload,process.env.key, { expiresIn: '1h' });
        res.status(200).send({msg:'Vous etes connecter',token,found})
    } catch (error) {
        res.status(500).send({errors:[{msg: 'Veuillez vérifier vos identifiants'}]})
    }
}

exports.GetUsers=async(req,res)=>{
    try {
        const Users = await User.find()
        res.status(200).send({Users,Msg:'List of users'})
    } catch (error) {
        res.status(500).send('Could not get users')
    }
}

exports.GetOneUser=async(req,res)=>{
    try {
        const {id} = req.params
        const OneUser = await User.findById(id)
        res.status(200).send({OneUser,Msg : 'User to find'})
    } catch (error) {
        res.status(500).send('User not found')
    }
}

exports.DeleteUser=async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.status(200).send('User have been deleted')
    } catch (error) {
        res.status(500).send('Could not delete user')
    }
}

exports.UpdateUser=async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send('User have been updated')
    } catch (error) {
        res.status(500).send('Could not Update user')
    }
}


