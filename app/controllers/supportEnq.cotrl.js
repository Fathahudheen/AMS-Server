const UserModel = require('../model/supportEnq.model')

// create and save a new user

exports.create = async(req, res) =>{
    console.log("add new user");
    if(!req.body.support_type  && !req.body.ticket_no&& !req.body.enq_from&& !req.body.enq_to&& 
        !req.body.descp&& !req.body.email && !req.body.mobile && !req.body.org_id&& !req.body.createdAt&&
        !req.body.createdBy&& !req.body.updatedAt&& !req.body.updatedBy&& !req.body.remarks&& !req.body.status){
        res.status(400).send({
            message: "cotent can not be empty!"
        })
    }

    const supportEnq = new UserModel({
        support_type: req.body.support_type,
        ticket_no:req.body.ticket_no,
        enq_from:req.body.enq_from,
        enq_to:req.body.enq_to,
        descp:req.body.descp,
        email: req.body.email,
        mobile: req.body.mobile,
        org_id:req.body.org_id,
        createdBy:req.body.createdBy,
        createdAt:req.body.createdAt,
        updatedBy:req.body.updatedBy,
        updatedAt:req.body.updatedAt,
        remarks:req.body.remarks,
        status: req.body.status
    });

    await supportEnq.save().then(data => {
        res.send({
            message:"user created successfully!!",
            supportEnq:data
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
        const supportEnq = await UserModel.find().sort({createdAt : 1,_id:-1});
        res.status(200).json(supportEnq);
    }catch(error){
        res.status(404).json({
            message:error.message
        });
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const supportEnq = await UserModel.findById(req.params.id);
        res.status(200).json(supportEnq);
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
    await UserModel.findByIdAndRemove(req.params.id).then(data1 => {
        if (!data1) {
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