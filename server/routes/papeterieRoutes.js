const router = require("express").Router();
const papeterieController = require("../controllers/papeterieController");

router.get("/", papeterieController.getAllCollections);
router.get("/papiers", papeterieController.getPapiers);
router.get("/agendas-calendriers", papeterieController.getAgendasCalendriers);
router.get("/cahiers-blocs-notes", papeterieController.getCahiersBlocsNotes);
router.get("/courriers", papeterieController.getCourriers);

module.exports = router;
