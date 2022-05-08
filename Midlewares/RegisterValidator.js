const { validationResult, body } = require("express-validator");

exports.registervalidation=[
    body('firstname',"Votre Prénom doit contenir au moins 3 charactéres").isLength({min : 3}),
    body('lastname',"Votre Nom doit contenir au moins 3 charactéres").isLength({min : 3}),
    body('email',"Veuillez saisir une adresse mail valide").isEmail(),
    body('password','Votre mot de passe doit contenir au moins 5 charactéres').isLength({min : 6}),
    body('phone','Veuillez saisir un numéro de télephone valide').isLength({min : 8,max: 8}).isDecimal()
]

exports.loginvalidation=[
    body('email',"Veuillez saisir une adresse mail valide").isEmail(),
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}