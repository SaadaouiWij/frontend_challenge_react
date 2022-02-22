const express = require("express");
const router = express.Router();
// import different methode from the controller
const addPhone = require("../controllers/PhoneController").addPhone;
const getAllPhones = require("../controllers/PhoneController").getAllPhones;

router.post("/phone/add", addPhone);
router.get("/phones", getAllPhones);

module.exports = router;
