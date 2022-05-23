import axios from "axios";
import "dotenv/config";
const API = process.env.SEND_API_URL;

class ReqresUserService {
  create(user) {
    axios.post(API, {
        name: user.name,
        job: user.job
    }).then(
        res => console.log(res.data)
    )
  }
}

const Reqres = new ReqresUserService();
export { Reqres };
