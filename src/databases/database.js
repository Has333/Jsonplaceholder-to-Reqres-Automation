import mongoose from 'mongoose';
import "dotenv/config";

const DB = process.env.DB

function DatabaseConnect () {
    mongoose.connect(`mongodb://localhost/${DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Automation connected to ${DB}`))
      .catch((err) => console.log(err));
};

export { DatabaseConnect }
