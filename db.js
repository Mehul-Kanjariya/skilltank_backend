const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://mehulkr:mehulkr@cluster0.2ucwgm5.mongodb.net/skilltank?retryWrites=true&w=majority");

module.exports={
    connection
}