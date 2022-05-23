import axios from 'axios';
import "dotenv/config";
const API = process.env.RECEIVE_API_URL

class JsonplaceholderUserService {
    async listAll(){
     const JsonplaceholderDataResponse = await axios.get(API);
     const JsonplaceholderUsers = JsonplaceholderDataResponse.data;

     return JsonplaceholderUsers
    }
}

const JsonplaceholderUsers = new JsonplaceholderUserService();
export { JsonplaceholderUsers }

