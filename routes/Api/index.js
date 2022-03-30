const express = require('express');
const router = express.Router();

const behaveController = require('../../controller/behaviourApi');

router.get('/', behaveController.behaviourList); // to list out all behaviours
//To add the selected behaviours
router.post('/decision/add', behaveController.createDecision);
router.post('/thinking/add', behaveController.createThinking);
router.post('/influencing/add', behaveController.createInfluencing);
router.post('/managing/add', behaveController.createManaging);
router.post('/driving/add', behaveController.createDriving);
//To edit the selected behavior
router.put('/decision/update/:id', behaveController.updateMD);
router.put('/thinking/update/:id', behaveController.updateTL);
router.put('/influencing/update/:id', behaveController.updateIN);
router.put('/managing/update/:id', behaveController.updateMC);
router.put('/driving/update/:id', behaveController.updateDR);
//to delete the selected behavior
router.delete('/decision/:id', behaveController.removeDecision);
router.delete('thinking/:id', behaveController.removeTL);
router.delete('/influencing/:id', behaveController.removeIN);
router.delete('/managing/:id', behaveController.removeManaging);
router.delete('/driving/:id', behaveController.removeDriving);

module.exports = router;