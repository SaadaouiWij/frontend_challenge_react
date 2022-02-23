const express = require("express");
const router = express.Router();
// import different methode from the controller
const addPhone = require("../controllers/PhoneController").addPhone;
const getAllPhones = require("../controllers/PhoneController").getAllPhones;
const getPhoneById = require("../controllers/PhoneController").getPhoneById;

router.post("/phone/add", addPhone);
router.get("/phones", getAllPhones);
router.get("/phone/:idPhone", getPhoneById);

module.exports = router;
