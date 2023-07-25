const express = require("express");
const router = express.Router();
const validate = require("../middlewares/requestValidator");
const schemas = require("../validations/user");
const sessionController = require("../controllers/session.controller");

/* Session Routes */

// login
router.post("/login", validate(schemas.user, "body"), sessionController.login);

module.exports = router;
