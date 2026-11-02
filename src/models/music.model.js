import mongoose, { mongo } from "mongoose";

const musicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    artist: {

    },
    uri: {
        type: String,
        required: true
    }
});

const musicModel = mongoose.model("music", musicSchema);
export default musicModel;