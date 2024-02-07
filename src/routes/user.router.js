import { Router } from "express";
import { betaRegister } from "../controller/betaUser.controllers.js";

const router = Router()

router.route('/register').post(betaRegister)

export default router