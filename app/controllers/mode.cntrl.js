const modeModel = require('../model/mode.model');

// Create and Save a new user
exports.create = async (req, res) => {
    if (!req.body.name && !req.body.description && !req.body.status && !req.body.createdAt && !req.body.updatedAt) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const mode = new modeModel({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        createdAt:req.body.status,
        updatedAt:req.body.status
    });
    await mode.save().then(data => {
       
        res.send({
            message:"User created successfully!!",
            mode:data
        });
    }).catch(err => {
        
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const mode = await modeModel.find();
        res.status(200).json(mode);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const mode = await modeModel.findById(req.params.id);
        res.status(200).json(mode);
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
    
    await modeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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
    await modeModel.findByIdAndRemove(req.params.id).then(data => {
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
