const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookProgressSchema = mongoose.Schema({
    //status can be favorite, want to read
    status: String,
    pagesCompleted: Number,
    done: Boolean,
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }
});

const userSchema = new Schema({
    username: {
        type: String,
        required: "Please enter a username"
    },
    name: {
        type: String,
        trim: true,
        required: "Please enter your name"
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/.+@.+\..+/, "Enter a valid email"]
    },
    readingList: [
        BookProgressSchema
    ]
});

module.exports = mongoose.model("User", userSchema);