import { json } from "express";
import DAO from "../dao/DAO.js";

export default class DbController {
  static async apiGetPassword(req, res, next) {
    const username = req.query.username;
    const email = req.query.email;
    const password = await DAO.getPassword(email, username);
    res.json(password);
  }
}
