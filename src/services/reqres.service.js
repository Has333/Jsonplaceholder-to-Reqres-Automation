import axios from 'axios';
import "dotenv/config";
const API = process.env.SEND_API_URL;

class ReqresUserService {
    async create(users){
    const ReqresDataResponse = await axios.post(API);
    const ReqresUsers = ReqresDataResponse.data;

    return ReqresUsers
    }
}

const ReqresUsers = new ReqresUserService();
export { ReqresUsers }