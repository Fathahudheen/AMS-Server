const licenseeModal = require('../model/licensee.model');
const jwt =require('jsonwebtoken')

exports.findOne = async (req, res) => {
     console.log(req.body)
    try {
        
       // const login = await loginModal.findById(req.params.id);
        const user = await licenseeModal.findOne(
           
            {     
            email: req.body.email,
            password: req.body.password,
           
          });        
          if(user){
          
            const token = jwt.sign(
                {
                    // email:user.email,
                    // password:user.password
                    
                },
                'secret123'
            )
            user.token=token
            return res.json({status:'ok', user})
           
        }else{
            return res.json({status:'error', user: false})
        }
      
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};