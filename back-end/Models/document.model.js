const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    docType: {
        type: String,
        optional: true,
    },
    title: {
        type: String,
        opional: true,
    },
    startDate: {
        type: String,
        opional: true,
    },
    endDate: {
        type: String,
        opional: true,
    },
    objective: {
        type: String,
        opional: true,
    },
    manager: {
        type: String,
        opional: true,
    },
    budget: {
        type: Number,
        opional: true,
    },
    scope: {
        type: String,
        opional: true,
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
    image: {
        type: [String],
        optional: true,
    },

});

const Document = mongoose.model("document", DocumentSchema);
module.exports = { Document };
