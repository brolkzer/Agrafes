const router = require("express").Router();
const papeterieController = require("../controllers/papeterieController");

router.get("/", papeterieController.getProducts);

module.exports = router;
