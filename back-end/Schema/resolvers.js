const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
const { Document } = require("../Models/document.model");
const path = require("path");
const fs = require("fs");

function generateRandomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

const resolvers = {
    Upload: GraphQLUpload,
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
            if (document.title) newDocument.title = document.title;
            if (document.startDate) newDocument.startDate = document.startDate;
            if (document.endDate) newDocument.endDate = document.endDate;
            if (document.objective) newDocument.objective = document.objective;
            if (document.manager) newDocument.manager = document.manager;
            if (document.budget) newDocument.budget = document.budget;
            if (document.scope) newDocument.scope = document.scope;
            if (document.intro) newDocument.intro = document.intro;
            if (document.purpose) newDocument.purpose = document.purpose;
            if (document.intendedAudience) newDocument.intendedAudience = document.intendedAudience;
            if (document.description) newDocument.description = document.description;
            if (document.srs) newDocument.srs = document.srs;
            if (document.useCases) newDocument.useCases = document.useCases;
            if (document.image) newDocument.image = document.image;
            await newDocument.save();
            return newDocument;
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
        deleteDocument: async (_, args) => {
            const { id } = args;
            await Document.findByIdAndDelete(id);
            return "Document deleted";
        },
        uploadFile: async (_, args) => {
            const { createReadStream, filename} = await args.file;
      
            const { ext, name } = path.parse(filename);
            const randomName = generateRandomString(12) + ext;
      
            const stream = createReadStream();
            const pathName = path.join(__dirname, "..", `/public/images/${randomName}`);
            await stream.pipe(fs.createWriteStream(pathName));
      
            return {
              url: `http://localhost:4000/images/${randomName}`,
            };
          },
    }
};

module.exports = {resolvers};
