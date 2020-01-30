const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    pageLength: { 
        type: Number, 
        required: true 
    },
    publisher: { 
        type: String, 
        required: true 
    },
    publishDate: { 
        type: Number, 
        required: true, 
        validate: [
        function(input) {
            return input.length < 4;
        },
        "Please enter a valid year."
        ] 
    }

  });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;