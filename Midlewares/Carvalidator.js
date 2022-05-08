const { validationResult, body } = require("express-validator");



body('',"Votre Prénom doit contenir au moins 3 charactéres").isString('.png')
















exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}