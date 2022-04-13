const mongoose = require('mongoose');
const tuitsSchema = require('./tuits-schema');
// import mongoose from 'mongoose';
// import tuitsSchema from './tuits-schema.js'

const tuitsModel = mongoose
    .model('TuitModel', tuitsSchema);

module.exports = tuitsModel;
// export default tuitsModel;