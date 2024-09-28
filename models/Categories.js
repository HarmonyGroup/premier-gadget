import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: 'Categories'
    }
});

export const Categories = mongoose.models.Categories || mongoose.model('Categories', CategorySchema);