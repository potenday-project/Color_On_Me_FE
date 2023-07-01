import client from "../../api/client";

class UserRepository {
  async postUser(data: any) {
    return client.post("users", {
      personalColor: data,
    });
  }
  async getUser() {
    return client.get("users");
  }
}

export default new UserRepository();
