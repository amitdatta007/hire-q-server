const mongoose = require('mongoose');
const { roles, educations, experiences, jobTypes } = require('../constants/constants');

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter product title']
        },
        description: {
            type: String,
            required: [true, 'des']
        },
        tags: {
            type: [String],
            validate: (v) => Array.isArray(v) && v.length > 0 && v.length < 4,
            required: true
        },
        role: {
            type: String,
            enum: roles,
            required: true
        },
        salery: {
            max: {
                type: Number,
                required: true,
                min: 0,
            },
            min: {
                type: Number,
                required: true,
                min: 0,
            },
            type: {
                type: String,
                enum: ['hourly', 'daily', 'weekly', 'monthly', 'annually'],
                required: true
            }
        },
        education: {
            type: String,
            enum: educations,
            required: true
        },
        experience: {
            type: String,
            enum: experiences,
            required: true
        },
        jobType: {
            type: String,
            enum: jobTypes,
            required: true
        },
        vacancies: {
            type: Number,
            min: 1,
            required: true
        },
        expireDate: {
            type: String,
            required: true
        },
        location: {
            isRemote: {
                type: Boolean,
                required: true
            },
            country: {
                type: String,
            },
            city: {
                type: String,
            }
        },
        requirements: {
            type: [String],
            validate: (v) => Array.isArray(v) && v.length > 0,
            required: true
        },
        desirable: {
            type: [String],
            validate: (v) => Array.isArray(v) && v.length > 0,
            required: true
        },
        benefits: {
            type: [String],
            validate: (v) => Array.isArray(v) && v.length > 0,
            required: true
        },
    },
    {
        timestamps: true
    }
);

// exports.jobSchema = jobSchema;
module.exports = mongoose.models.jobs || mongoose.model('job', jobSchema);