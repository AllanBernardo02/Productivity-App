const express = require("express");

const router = express.Router();

const { signup, signin, getUser } = require("../controllers/user.js");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/getUser", getUser);

module.exports = router;
