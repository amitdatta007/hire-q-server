const { Router } = require("express");
const { getJobs, postJob } = require("../controller/jobController")
const { applyJob } = require("../controller/applicationController")

const router = Router();

// job routes
router.route('/jobs').get(getJobs);
router.route('/jobs').post(postJob);

// application routes
router.route('/apply').post(applyJob);

module.exports = router;