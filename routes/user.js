import express from "express";
import { getMyProfile, register, login, logout } from "../controllers/user.js";

import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

//router.route("userid/:id").get(function1).put(function2).delete(function3)
//the above line is the same as the following 3 lines
//router.get("userid/:id", function1)
//router.get("userid/:id", function2)
//router.get("userid/:id", function3)
export default router;
