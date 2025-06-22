//imports
const express = require("express");
const router = require("express").Router();
//controllers
const { getTest } = require(`../controllers/testController`);

//middlewares

//routes
router.get("/test", getTest);

//export
module.exports = router;
