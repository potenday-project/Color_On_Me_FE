import client from "../../api/client";
import { ParsedUser, User } from "./auth.model";

class AuthRepository {
  async postSignUp(data: any) {
    return client.post("auth/signup", {
      ...data,
    });
  }

  async postEmailDuplicate(data: any) {
    return client.post("auth/email-check", {
      email: data,
    });
  }

  async postLogin(data: any) {
    return client.post("auth/login", {
      ...data,
    });
  }

  async getLogout() {
    return client.get("auth/logout");
  }
}

export default new AuthRepository();
