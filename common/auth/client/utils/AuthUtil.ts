import axios from 'axios';

/**
 * Interface for the user authentication base.
 */
export default class AuthUtil {
  public static async GetUser<T extends IUserAuthBase>(): Promise<T> {
    return await axios.get('/Account/GetUser');
  }
}