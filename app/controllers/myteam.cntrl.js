const myteamModel = require('../model/myteam.model');

// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.f_name && !req.body.l_name && !req.body.email && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const myteam = new myteamModel({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        password: req.body.password,
        mobile_no: req.body.mobile_no
    });
    await myteam.save().then(data => {
       
        res.send({
            message:"User created successfully!!",
            myteam:data
        });
    }).catch(err => {
        
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const myteam= await myteamModel.find().sort({ _id:-1});
        res.status(200).json(myteam);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const myteam = await myteamModel.findById(req.params.id);
        res.status(200).json(myteam);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await myteamModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await myteamModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `User not found.`
          });
        } else {
          res.send({
            message: "User deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};
