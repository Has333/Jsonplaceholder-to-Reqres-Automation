import cron from "node-cron";
import { transformUsersDataFormatToReqres } from "../data-transformation/reqres-user.js";
import { JsonplaceholderUsers } from "../services/jsonplaceholder.service.js";

function JsonplaceholderToReqresAutomation() {
  cron.schedule("* * * * *", async () => {
    const JsonplaceholderUsersData = JsonplaceholderUsers.listAll();

    JsonplaceholderUsersData.then((data) => {
      transformUsersDataFormatToReqres(data);
    });
  });
}

export { JsonplaceholderToReqresAutomation };
