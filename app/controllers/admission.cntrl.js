const UserModel = require('../model/admission.model')

// Create and Save a new user
exports.create = async (req, res) => {

    if (!req.body.reg_no && ! !req.body.fname && !!req.body.lname && !req.body.dob && !req.body.gender && !
        req.body.qualification && !req.body.course_opted && !req.body.guardian && !req.body.relationship && !
        req.body.addLine1 && !req.body.addLine2 && !req.body.district && !req.body.state && !req.body.pincode&& !
        req.body.email && !req.body.mobile && !req.body.altphone && !req.body.photo && !req.body.signature && !
        req.body.recpNo && !req.body.amount && !req.body.createdAt && !req.body.createdBy && !req.body.updatedAt && ! 
        req.body.updatedBy && !req.body.remarks && !req.body.status) {
        res.status(400).send({ message: "Content can not be Empty!" });
    }
    
    const std_profile = new UserModel({
        reg_no: req.body.reg_no,
        fname: req.body.fname,
        lname: req.body.lname,
        dob: req.body.dob,
        gender: req.body.gender,
        qualification: req.body.qualification,
        course_opted: req.body.course_opted,
        guardian: req.body.guardian,
        relationship: req.body.relationship,
        addLine1: req.body.addLine1,
        addLine2: req.body.addLine2,
        district: req.body.district,
        state: req.body.state,
        pincode: req.body.pincode,
        email: req.body.email,
        mobile: req.body.mobile,
        altphone: req.body.altphone,
        photo: req.body.photo,
        signature: req.body.signature,
        recpNo: req.body.recpNo,
        amount: req.body.amount,
        createdAt: req.body.createdAt,
        createdBy: req.body.createdBy,
        updatedAt: req.body.updatedAt,
        updatedBy: req.body.updatedBy,
        remarks: req.body.remarks,
        status: req.body.status
    });
    
    await std_profile.save().then(data => {
        res.send({
            message:"std_profile created successfully!!",
            std_profile:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating std_profile"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const std_profile = await UserModel.find().sort({ createdAt : 1,_id:-1});
        res.status(200).json(std_profile);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
    try {
        const std_profile = await UserModel.findById(req.params.id);
        res.status(200).json(std_profile);
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
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
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