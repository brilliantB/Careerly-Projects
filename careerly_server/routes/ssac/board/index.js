var express = require("express");
const boardController = require("../../../controllers/ssac/boardController");
const authModule = require("../../../modules/authModule");
var router = express.Router();

/* GET home page. */
// 인증 필요
router.post("/", authModule.loggedIn, boardController.createBoard);

router.get("/", boardController.readAllBoard);
router.get("/:id", boardController.readDetailBoard);

//인증 필요
router.put("/:id",authModule.loggedIn, boardController.updateBoard);

//인증 필요
router.delete("/:id",authModule.loggedIn, boardController.deleteBoard);

module.exports = router;
