const { Document } = require("../Models/document.model");

const resolvers = {
    Query: {
        getAllDocuments: async () => {
            return await Document.find();
        },
        getDocument: async (_, {id}) => {
            return await Document.findById(id);
        }
    },
    Mutation: {
        createDocument: async (_, {document}) => {
            const newDocument = new Document();
            newDocument.docType = document.docType;
            newDocument.title = document.title;
            newDocument.startDate = document.startDate;
            newDocument.endDate = document.endDate;
            newDocument.objective = document.objective;
            newDocument.manager = document.manager;
            newDocument.budget = document.budget;
            newDocument.scope = document.scope;
            if (document.intro) newDocument.intro = document.intro;
            if (document.purpose) newDocument.purpose = document.purpose;
            if (document.intendedAudience) newDocument.intendedAudience = document.intendedAudience;
            if (document.description) newDocument.description = document.description;
            if (document.srs) newDocument.srs = document.srs;
            if (document.useCases) newDocument.useCases = document.useCases;
            if (document.image) newDocument.image = document.image;
            return await newDocument.save();
        }, 
        updateDocument: async (_, {id, document}) => {
            const update = {};
            if (document.title) update.title = document.title;
            if (document.startDate) update.startDate = document.startDate;
            if (document.endDate) update.endDate = document.endDate;
            if (document.objective) update.objective = document.objective;
            if (document.manager) update.manager = document.manager;
            if (document.budget) update.budget = document.budget;
            if (document.scope) update.scope = document.scope;
            if (document.intro) update.intro = document.intro;
            if (document.purpose) update.purpose = document.purpose;
            if (document.intendedAudience) update.intendedAudience = document.intendedAudience;
            if (document.description) update.description = document.description;
            if (document.srs) update.srs = document.srs;
            if (document.useCases) update.useCases = document.useCases;
            if (document.image) update.image = document.image;

            return await Document.findByIdAndUpdate(id, update, {new: true});
        },
        deleteDocument: async (_, {id}) => {
            await Document.findByIdAndDelete(id);
            return "Document deleted";
        }
    }
};

module.exports = {resolvers};
