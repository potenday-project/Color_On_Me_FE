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
  async postId() {
    return client.post("users/uuid");
  }
  async patchPersonalColor(id: any) {
    return client.patch("users/personal-color", {
      personalColorId: Number(id),
    });
  }
}

export default new UserRepository();
