import axios from 'axios';

export default class Authenticator {
  static async validateMethod(pin) {
    let response = {};
    response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://www.authenticatorApi.com/Validate.aspx?Pin=${pin}&SecretCode=ReactApp299`
    );

    return response;
  }
}
