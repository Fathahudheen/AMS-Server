const licenseeModel = require('../model/licensee.model');

// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.f_name && !req.body.l_name && !req.body.email && !req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const licensee = new licenseeModel({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        password: req.body.password,
        mobile_no: req.body.mobile_no
    });
    await licensee.save().then(data => {
       
        res.send({
            message:"User created successfully!!",
            licensee:data
        });
    }).catch(err => {
        
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

exports.findAllLicensee = async (req, res) => {
    try {
        const licensee = await licenseeModel.find({role_opt:'Licensee'}).sort({ _id:-1});
        res.status(200).json(licensee);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findAll = async (req, res) => {
    try {
        const licensee = await licenseeModel.find().sort({ _id:-1});
        res.status(200).json(licensee);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findLicenseeCount = async (req, res) => {
    try {
        const licensee = await licenseeModel.find({role_opt:'Licensee'});
        res.status(200).json(licensee.length);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const licensee = await licenseeModel.findById(req.params.id);
        res.status(200).json(licensee);
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
    
    await licenseeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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
    await licenseeModel.findByIdAndRemove(req.params.id).then(data => {
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
