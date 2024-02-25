const router = require('express').Router();
const loginRoutes = require('../routes/index');

router.use('/',loginRoutes)
router.use('/healthcheck',(req,res)=>{
    res.status(200).send("server is Up and running")
});

module.exports = router;