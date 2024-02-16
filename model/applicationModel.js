const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
    {
        jobId: {
            type: String,
            required: true,
        },
        applicantId: {
            type: String,
            required: true,
        },
        coverLetter: {
            type: String,
            required: true,
        },
        resume: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// exports.jobSchema = jobSchema;
module.exports = mongoose.models.applications || mongoose.model('application', applicationSchema);