const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    docType: {
        type: String,
    },
    title: {
        type: String,
        optional: true,
    },
    startDate: {
        type: String,
        optional: true,
    },
    endDate: {
        type: String,
        optional: true,
    },
    objective: {
        type: String,
        optional: true,
    },
    manager: {
        type: String,
        optional: true,
    },
    budget: {
        type: String,
        optional: true,
    },
    scope: {
        type: String,
        optional: true,
    },
    intro: {
        type: String,
        optional: true,
    },
    purpose: {
        type: String,
        optional: true,
    },
    intendedAudience: {
        type: String,
        optional: true,
    },
    description: {
        type: String,
        optional: true,
    },
    srs: {
        type: String,
        optional: true,
    },
    useCases: {
        type: String,
        optional: true,
    },
    image:[{
        imageTitle: String,
        imagePath: String
    }],

});

const Document = mongoose.model("document", DocumentSchema);
module.exports = { Document };
