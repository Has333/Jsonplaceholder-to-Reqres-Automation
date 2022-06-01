import axios from "axios";
import "dotenv/config";
const API = process.env.SEND_API_URL;

class ReqresUserService {
  create(user) {
    axios.post(API, {
        name: user.name,
        job: user.job
    }).then(
        res => console.log(`\u001b[1;34m${res.data.name}`+"\u001b[0m created")
    )
  }
}

const Reqres = new ReqresUserService();
export { Reqres };
