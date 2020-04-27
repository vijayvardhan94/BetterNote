const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const topicSchema = new Schema({
    topicname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,

});


const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;