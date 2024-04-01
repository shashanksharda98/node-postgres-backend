const express = require('express');
const router = express.Router({
    caseSensitive: true,
});



//User Authentication and Authorization APIs
router.use("/user", require('./apis/userApi'));

module.exports = router;