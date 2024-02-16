const mongoose = require('mongoose');
const applicationModel = require('../model/applicationModel');
const jobModel = require('../model/jobModel')

const applyJob = async (req, res) => {
    // console.log(req.query.jobId)

    if (req.query.jobId) {
        try {
            const isJobExist = await jobModel.findOne({ _id: req.query.jobId });

            try {
                const application = new applicationModel(req.body);
                application.jobId = isJobExist._id;
                await application.save();
                res.status(201).send(application);

            } catch (err) {
                if (err instanceof mongoose.Error.ValidationError) {
                    const errorMessages = {};
                    // Collect error messages from all validation failures
                    for (const field in err.errors) {
                        //   errorMessages.push(err.errors[field].message);
                        errorMessages[field] = err.errors[field].message;
                    }
                    // Send error response with status code 400 (Bad Request)
                    res.status(400).send({ errors: errorMessages });
                } else {
                    // For other types of errors, send a generic error response
                    console.error(err);
                    res.status(500).send('Internal Server Error');
                }
            }
        } catch (err) {
            console.log('not found')
        }
    } else {
        console.log('query not found')
    }


}

exports.applyJob = applyJob;