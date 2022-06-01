import { transformUserDataFormatToReqres } from "../data-transformation/reqres-user.js";
import { JsonplaceholderUsers } from "../services/jsonplaceholder.service.js";
import { userDatabaseModel } from "../helpers/dbUserConfig.helper.js";
import { ReportsHelper } from "../helpers/ErrorReports.helper.js";
import { Reqres } from "../services/reqres.service.js";
import { sleep } from "../helpers/Sleep.helper.js";
import { User } from "../models/userSchema.js";
import cron from "node-cron";

function JsonplaceholderToReqresAutomation() {
  cron.schedule("* * 21 * * *", async () => {
    try {
      const JsonplaceholderUsersData = JsonplaceholderUsers.listAll();
      JsonplaceholderUsersData.then(async (JsonplaceholderUsers) => {
        for (let JsonplaceholderUser of JsonplaceholderUsers) {
          let userModelData = userDatabaseModel(JsonplaceholderUser);
          await User.findOneAndUpdate(
            userModelData.filter,
            userModelData.update,
            userModelData.options
          );
        }
        for (let JsonplaceholderUser of JsonplaceholderUsers) {
          await sleep(5000);
          let ReqresUser = transformUserDataFormatToReqres(JsonplaceholderUser);
          Reqres.create(ReqresUser);
        }
      });
    } catch (errorData) {
      ReportsHelper.create(errorData);
      console.log('\u001b[1;31mError: \u001b[0mreport generated')
    }
  });
}

export { JsonplaceholderToReqresAutomation };
