import axios from 'axios';

export default class Authenticator {
  static async validateMethod(pin) {
    let response = {};
    try {
      response = await axios.get(
        `https://www.authenticatorApi.com/Validate.aspx?Pin=${pin}&SecretCode=ReactApp299`,
        { crossDomain: true }
      );
    } catch (e) {
      response = e;
    }

    return response;
  }
}
