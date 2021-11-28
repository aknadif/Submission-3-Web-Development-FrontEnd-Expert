import API_ENDPOINT from "../globals/api-endpoint";

class DbSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default DbSource;
