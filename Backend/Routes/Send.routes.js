import { Router } from "express";
import { sendData , login } from "../Controllers/Send.controllers.js";


const router = Router();
router.route("/login").post(login)
router.route("/data").get(sendData)
export default router;