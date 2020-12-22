import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    resolution: String,
    message: String,
    creator: String,
    achieved: Boolean,
    goals: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;