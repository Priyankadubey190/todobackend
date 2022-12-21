const mongoose = require('mongoose');

const allpostSchema = mongoose.Schema({
    mypost: {type: String, required: true},
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     },
})

const AllpostModel = mongoose.model("allpost", allpostSchema);

module.exports = {AllpostModel}