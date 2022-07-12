import axios from 'axios';
import "dotenv/config";

class JsonplaceholderUserService {
    async listAll(){
     const JsonplaceholderDataResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
     const JsonplaceholderUsers = JsonplaceholderDataResponse.data;

     return JsonplaceholderUsers
    }
}

const JsonplaceholderUsers = new JsonplaceholderUserService();
export { JsonplaceholderUsers }

