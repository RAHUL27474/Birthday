import { Router } from "express";
import { getData } from "../Controllers/Get.controllers.js";

const router = Router();
router.route("/submit").post(getData)
export default router;