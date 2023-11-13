import client from "../../api/client";

class ColorRepository {
  async getPersonalColor(code: any) {
    return client.get(`personal-colors/${code}`);
    // return client.get(`personal-color/1`);
  }
}

export default new ColorRepository();
