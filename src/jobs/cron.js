import cron from "node-cron";
import { transformUsersDataFormatToReqres } from "../data-transformation/reqres-user.js";
import { JsonplaceholderUsers } from "../services/jsonplaceholder.service.js";
import { ReqresUsers } from '../services/reqres.service.js';
import { User } from "../models/userSchema.js";

function JsonplaceholderToReqresAutomation() {
  cron.schedule("* * * * *", async () => {
    const JsonplaceholderUsersData = JsonplaceholderUsers.listAll();
    JsonplaceholderUsersData.then(async (JsonplaceholderUsers) => {

      for (let JsonplaceholderUser of JsonplaceholderUsers) {
        const filter = { email: JsonplaceholderUser.email };
        const update = { id: JsonplaceholderUser.id, email: JsonplaceholderUser.email };
        const options = { new: true, upsert: true };                 

       let newUser = await User.findOneAndUpdate(filter, update, options); 
        console.log(`${newUser.email} created/updated`);
      }

      transformUsersDataFormatToReqres(JsonplaceholderUsers);
    });
  });
}

export { JsonplaceholderToReqresAutomation };

