import axios from "axios";
import "dotenv/config";

class ReqresUserService {
  create(user) {
    axios.post('https://reqres.in/api/users', {
        name: user.name,
        job: user.job
    }).then(
        res => console.log(`\u001b[1;34m${res.data.name}`+"\u001b[0m created")
    )
  }
}

const Reqres = new ReqresUserService();
export { Reqres };
