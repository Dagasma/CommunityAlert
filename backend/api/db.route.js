import express from "express"
import DbController from "./db.controller.js"

const router = express.Router()
router.route("/").get(DbController.apiGetPassword)

export default router