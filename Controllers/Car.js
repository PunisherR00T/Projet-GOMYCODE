const Car = require('../Models/Car')

exports.Addcar=async(req,res)=>{
    try {
        // if(req.file.path.endsWith('.exe')){
        //     return res.status(400).send('Wrong format')
        // } 
        // console.log(req.body.images)
        // console.log(req.file.path)
        const NewCar = new Car({...req.body,images : req.file.path})
        console.log(NewCar)
        await NewCar.save()
        res.status(200).send({NewCar,Msg :'Votre annonce a été enregistrer'})
    } catch (error) {
        res.status(500).send("Un probléme est survenue lors de l'ajout de votre annonce")
    }
}

exports.Updatecar=async(req,res)=>{
    try {
        const {id} = req.params
        await Car.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send("Votre annonce a été modifié")
    } catch (error) {
        res.status(500).send("Erreur lors de la modification de l'annonce")
    }
}

exports.Deletecar=async(req,res)=>{
    try {
        const {id} = req.params
        await Car.findByIdAndDelete(id)
        res.status(200).send('Votre annonce a bien été supprimer')
    } catch (error) {
        res.status(500).send('Cette annonce ne peut pas être supprimer')
    }
}


exports.Getcars=async(req,res)=>{
    try {
        const Cars = await Car.find()
        res.status(200).send({Cars,Msg:'List of cars'})
    } catch (error) {
        res.status(500).send('Could not get cars')
    }
}

exports.GetUsercar=async(req,res)=>{
    try {
        const {id} = req.params
        const OneCar = await Car.findById(id)
        res.status(200).send({OneCar,Msg : 'Car to find'})
    } catch (error) {
        res.status(500).send('Car not found')
    }
}

