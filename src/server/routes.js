var controller = require('../controllers');
var router = require('express').Router();

// router.get('/', controller.page.get);

router.get('/', controller.allInfo.get);
router.post('/', controller.allInfo.post);
module.exports = router;