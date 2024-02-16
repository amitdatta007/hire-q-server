const { Router } = require("express");
const { getJobs, postJob } = require("../controller/jobController")

const router = Router();


router.route('/jobs').get(getJobs);
router.route('/jobs').post(postJob);

module.exports = router;