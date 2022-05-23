import cron from "node-cron";
import { transformUserDataFormatToReqres } from "../data-transformation/reqres-user.js";
import { JsonplaceholderUsers } from "../services/jsonplaceholder.service.js";
import { Reqres } from '../services/reqres.service.js';
import { User } from "../models/userSchema.js";

function JsonplaceholderToReqresAutomation() {
  cron.schedule("* * * * *", async () => {
    function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms))};

    const JsonplaceholderUsersData = JsonplaceholderUsers.listAll();
    JsonplaceholderUsersData.then(async (JsonplaceholderUsers) => {

      for (let JsonplaceholderUser of JsonplaceholderUsers) {
        const filter = { email: JsonplaceholderUser.email };
        const update = { id: JsonplaceholderUser.id, email: JsonplaceholderUser.email };
        const options = { new: true, upsert: true };                 

       let newUser = await User.findOneAndUpdate(filter, update, options); 
        console.log(`${newUser.email} created/updated on database`);
      }

      for (let JsonplaceholderUser of JsonplaceholderUsers) {
        await sleep(5000);
        let ReqresUser = transformUserDataFormatToReqres(JsonplaceholderUser);
        console.log(ReqresUser)
        Reqres.create(ReqresUser)
      }
    });
  });
}

export { JsonplaceholderToReqresAutomation };

