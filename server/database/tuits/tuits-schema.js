const mongoose = require('mongoose');
// import mongoose from 'mongoose';
// const schema = mongoose.Schema({
//     tuit: String,
//     likes: Number,
//     postedBy: {
//         username: String
//     }
// }, {collection: 'tuits'});

const schema = mongoose.Schema({
    topic: String,
    postedBy: {
        username: String
    },
    liked: Boolean,
    verified: Boolean,
    handle: String,
    logoImage: String,
    avatarImage: String,
    time: String,
    title: String,
    tuit: String,
    stats: {
        retuits: Number,
        likes: Number,
        comments: Number,
        dislikes: Number
    }
}, {collection: 'tuits'});

module.exports = schema;
// export default schema;