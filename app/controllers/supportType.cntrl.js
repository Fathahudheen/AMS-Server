const UserModel = require('../model/supportType.model')

// create and save a new user

exports.create = async(req, res) =>{
    console.log("add new support type");
    if(!req.body.name  &&!req.body.descp&&!req.body.org_id&& !req.body.createdAt&&
        !req.body.createdBy&& !req.body.updatedAt&& !req.body.updatedBy&& !req.body.status){
        res.status(400).send({
            message: "cotent can not be empty!"
        })
    }

    const supportType = new UserModel({
        name: req.body.name,
        descp:req.body.descp,
        org_id:req.body.org_id,
        createdBy:req.body.createdBy,
        createdAt:req.body.createdAt,
        updatedBy:req.body.updatedBy,
        updatedAt:req.body.updatedAt,
        status: req.body.status
    });
    await supportType.save().then(data => {
        res.send({
            message:"user created successfully!!",
            supportType:data
        });
    }).catch(err =>{
        res.status(500).send({
            message:err.message || "some error occurred while creating user"
        });
    });
};

//retrieve all students from the databases.

exports.findAll = async (req, res) => {
    try{
        const supportType = await UserModel.find();
        res.status(200).json(supportType);
    }catch(error){
        res.status(404).json({
            message:error.message
        });
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const supportType = await UserModel.findById(req.params.id);
        res.status(200).json(supportType);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `user not found.`
            });
        }else{
            res.send({ message: "user updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `user not found.`
          });
        } else {
          res.send({
            message: "user deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};