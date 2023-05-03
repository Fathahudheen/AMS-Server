const enqModel = require("../model/enqSchema");

// Create and Save a new user
exports.create = async (req, res) => {
  console.log("test");
  if (
    !req.body.enq_source &&
    !req.body.enq_mode &&
    !req.body.enq_for &&
    !req.body.fname &&
    !req.body.lname &&
    !req.body.mobile &&
    !req.body.email &&
    !req.body.loc &&
    !req.body.org_id &&
    !req.body.createdAt &&
    !req.body.createdBy &&
    !req.body.updatedAt &&
    !req.body.By &&
    !req.body.remarks &&
    !req.body.status
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  const enq = new enqModel({
    enq_source: req.body.enq_source,
    enq_mode: req.body.enq_mode,
    enq_for: req.body.enq_for,
    fname: req.body.fname,
    lname: req.body.lname,
    mobile: req.body.mobile,
    email: req.body.email,
    loc: req.body.loc,
    org_id: req.body.org_id,
    createdAt: req.body.createdAt,
    createdBy: req.body.createdBy,
    updatedAt: req.body.updatedAt,
    remarks: req.body.remarks,
    status: req.body.status,
  });

  await enq
    .save()
    .then((data) => {
      res.send({
        message: "Enquiry created successfully!!",
        enq: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating user",
      });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
    const enq = await enqModel.find().sort({ createdAt : 1,_id:-1});
    res.status(200).json(enq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const enq = await enqModel.findById(req.params.id);
    res.status(200).json(enq);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  await enqModel
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({ message: "User updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  await enqModel
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({
          message: "User deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
