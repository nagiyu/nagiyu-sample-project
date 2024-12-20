import axios from 'axios';

export default class AuthUtil {
  public static async GetUser(): Promise<any> {
    return await axios.get('/api/auth/user');
  }
}