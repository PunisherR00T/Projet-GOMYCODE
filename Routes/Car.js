const express = require("express")

const { Addcar, Getcars, Deletecar, Updatecar, GetUsercar }= require("../Controllers/Car")
const { Upload } = require("../Midlewares/Upload")


const CarRouter = express.Router()

CarRouter.post('/Addcar',Upload.single('images'),Addcar)

CarRouter.get('/GetCars',Getcars)

CarRouter.delete('/DeleteCar/:id',Deletecar)

CarRouter.put('/UpdateCar/:id',Updatecar)

CarRouter.get('/GetUserCar/:id',GetUsercar)

module.exports = CarRouter