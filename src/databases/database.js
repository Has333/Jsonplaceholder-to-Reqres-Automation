import mongoose from 'mongoose';
import "dotenv/config";

function DatabaseConnect () {
    mongoose.connect(`mongodb://localhost/${process.env.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Automation connected to ${process.env.DB}`))
      .catch((err) => console.log(err));
};

export { DatabaseConnect }
