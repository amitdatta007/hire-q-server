const mongoose = require('mongoose');
const jobModel = require('../model/jobModel');


const getJobs = async (req, res) => {
    const jobs = await jobModel.find();
    res.json(jobs)
};

const postJob = async (req, res) => {
    try {
        const job = new jobModel(req.body)
        await job.save();
        res.status(201).send(job);

    } catch (err) {
        if (err instanceof mongoose.Error.ValidationError) {
            const errorMessages = [];
            // Collect error messages from all validation failures
            for (const field in err.errors) {
              errorMessages.push(err.errors[field].message);
            }
            // Send error response with status code 400 (Bad Request)
            res.status(400).send({ errors: errorMessages });
          } else {
            // For other types of errors, send a generic error response
            console.error(err);
            res.status(500).send('Internal Server Error');
          }
    }
}

exports.getJobs = getJobs;
exports.postJob = postJob;