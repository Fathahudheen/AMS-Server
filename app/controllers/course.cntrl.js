
const courseModel = require('../model/course.modal');



exports.create = async (req, res) => {
    if (!req.body.crs_name && !req.body.crs_ctgry && !req.body.duration && !req.body.crs_dscrp) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const crse = new courseModel({
         crs_name: req.body.crs_name,
         crs_ctgry: req.body.crs_ctgry, 
         duration: req.body.duration,
         crs_dscrp: req.body.crs_dscrp,
    });
    await crse.save().then(data => {
       
        res.send({
            message:"User created successfully!!",
            crse:data
        });
    }).catch(err => {
        
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const crse= await courseModel.find();
        res.status(200).json(crse);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const crse = await courseModel.findById(req.params.id);
        res.status(200).json(crse);
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
    
    await courseModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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
    await courseModel.findByIdAndRemove(req.params.id).then(data => {
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
