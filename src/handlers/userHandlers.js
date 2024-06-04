const {hashPassword}= require('..//utils/hashedPassword');
const { createUser, sendEmailController } = require('../controllers/userController');

const { loginController } = require('../controllers/loginController');

const createUserHandler = async (req, res) => {
    const { name, sex, email, cellphone, address } = req.body;
    let {password} =  req.body;
    try {
        password = await hashPassword(password);
        //verificar que el email no se encuentre registrado
        let dataUser = await loginController(email);
        if (dataUser) {
            return res.status(200).json({ message: 'Usuario registrado "Inicia sesion..."', dataUser });
          }

        await createUser(name, sex, email, password, cellphone, address);
        dataUser = {name, sex, email, cellphone, address};
        res.status(200).json({ message: 'Usuario Registrado "Inicia sesion..."', dataUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
}



const sendEmail = async (req, res) => {
    const { email } = req.body;
    try {
        const response = await sendEmailController(email);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }    
}
 

module.exports = { createUserHandler, sendEmail }