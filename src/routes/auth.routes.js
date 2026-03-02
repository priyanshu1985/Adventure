const express = require("express");
const router = express.Router();
const { register, login, refreshToken, getProfile } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
