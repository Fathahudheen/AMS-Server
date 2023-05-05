const course_track = require('../model/course.track.model');



exports.create = async (req, res) => {
    if (!req.body.name &&!req.body.desc) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const crset = new course_track({
         name: req.body.name,
         desc: req.body.desc,
    });
    await crset.save().then(data => {
       
        res.send({
            message:"User created successfully!!",
            crset:data
        });
    }).catch(err => {
        
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const crset= await course_track.find().sort({ _id:-1});
        res.status(200).json(crset);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

exports.findOne = async (req, res) => {
    try {
        const crset = await course_track.findById(req.params.id);
        res.status(200).json(crset);
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
    
    await course_track.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
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
    await course_track.findByIdAndRemove(req.params.id).then(data => {
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