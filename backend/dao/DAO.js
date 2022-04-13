let maps;

export default class DAO {
  static async injectDB(conn) {
    if (maps) {
      return;
    }
    try {
      maps = await conn.db(process.env.DB_NAME).collection("users");
    } catch (e) {
      console.error(`Unable to establish a collection handle in mapsDAO: ${e}`);
    }
  }

  static async getPassword(email = null, username = null) {
    let query;
    if (email) {
      query = { email: email };
    }
    if (username) {
      query = { username: username };
    }

    let document;
    try {
      document = await maps.findOne(query);
    } catch (e) {
      console.log(e);
      return "";
    }
    return String(document.password);
  }
}
