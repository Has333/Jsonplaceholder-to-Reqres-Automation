import mongoose from "mongoose";

const reqresUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    }
})

const reqresUser = mongoose.model("reqresUser", reqresUserSchema);
export { reqresUser }