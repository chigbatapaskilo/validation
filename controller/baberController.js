

const baberModel = require("../model/baberModel");
const validator=require ("@hapi/joi")
exports.signUp = async (req, res) => {
  try {
//create a schema for validation

const schema = validator.object({

email:validator.string().email().min(7).required(),


name:validator.string().min(3).required().regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/)

.trim()
.messages({
  'string.pattern.base': 'Name must only contain letters and spaces',
  'string.empty': 'Name cannot be empty',
}),

password:validator.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
.required()
.messages({
  'string.min': 'Password must be at least 10 characters long',
  'string.pattern': 'Password must contain a mix of uppercase, lowercase, special characters and numbers'
}),
hairCut:validator.required().valid("obama","lowcut","skincut")


})
//
const {error} = schema.validate(req.body)
if(error){
    return res.status(400).json(error.details[0].message) 
}
    const { email, password, hairCut, name } = req.body;
    const data = {
      name: name.trimEnd(),
      email,
      password,
      hairCut,
    };
    const user = await baberModel.create(data);
    res.status(201).json({ message: `new user created`,user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getOne = async (req, res) => {
  let id = params.id(id);
  try {
    const user = await baberModel.findById(id);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await baberModel.findOne({ email });
    if (!checkEmail) {
      return res.status(404).json(`Invalid Email`);
    }
    if (checkEmail.password != password) {
      res.status(400).json("invalid password");
    } else {
      res.status(200).json({ message: "login succesful", data: checkEmail });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    const getAll = await barberModel.find();
  } catch (error) {
    res.status(500).json(error.message);
  }
};
