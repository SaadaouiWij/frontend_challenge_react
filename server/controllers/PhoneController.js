// import the phone model
const Phone = require("../models/Phone");
// import the ORM mongoose to map the backend with database
const mongoose = require("mongoose");

/* -------------------------------------------------------------------------------- */
/* --------------------------|| Method to add new phone || ----------------------- */
/* -------------------------------------------------------------------------------- */
exports.addPhone = async (req, res) => {
  try {
    // getting data from the request
    const { title, description, price, color, image } = req.body;
    console.log(req.body)
    // validate the incoming data
    if (!title || !description || !price || !color || !image)
      return res
        .status(400)
        .send("Verify your data please something is missing !");

    // create the entity
    const newPhone = new Phone({
      title,
      description,
      price,
      color,
      image,
    });
    // saving the new entity in the DB
    await newPhone.save();
    //sending 201 OK request to the client if everything is ok
    return res.status(201).json({
      statue: true,
      newPhone: newPhone,
    });
  } catch (err) {
    console.log(err);
    // sending 400 Bad Request to the client if something went wrong
    return res.status(400).send("Error : " + err + " ,  try again");
  }
};

/* -------------------------------------------------------------------------------- */
/* --------------------------|| Method get all phones  || ------------------------ */
/* -------------------------------------------------------------------------------- */
exports.getAllPhones = async (req, res) => {
  try {
    // getting all the phone existing in the database with sort for the title
    const phones = await Phone.find({})
      .sort({ title: 1 })
      .exec();
    // sending 201 OK request to the client with the array of phones if everything is ok
    res.send({ phones : phones });
  } catch (err) {
    console.log(err);
    // sending 400 Bad Request to the client if something went wrong
    return res.status(400).send("Error : " + err + " ,  try again");
  }
};

/* -------------------------------------------------------------------------------- */
/* --------------------------|| Method get phone by ID|| -------------------------- */
/* -------------------------------------------------------------------------------- */
exports.getPhoneById = async (req, res) => {
  const {idPhone} = req.params;
  try {
    // getting all the phone existing in the database with sort for the title
    const phone = await Phone.findById(idPhone)
      .exec();
    // sending 201 OK request to the client with the  phone's object if everything is ok
    res.send({ phone : phone });
  } catch (err) {
    console.log(err);
    // sending 400 Bad Request to the client if something went wrong
    return res.status(400).send("Error : " + err + " ,  try again");
  }
};
