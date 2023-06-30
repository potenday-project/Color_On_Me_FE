import client from "../../api/client";

class ColorRepository {
  async getPersonalColor(code: any) {
    return client.get(`personal-color/:${code}`);
  }
}

export default new ColorRepository();
