const router = require("express").Router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const usuarioController = new UsuarioController();

router.post("/login", usuarioController.login); //TESTADO
router.post("/registrar", usuarioController.store); //TESTADO
router.put("/", auth.required, usuarioController.update);//TESTADO
router.delete("/", auth.required, usuarioController.remove);//TESTADO

router.get("/recuperar-senha", usuarioController.showRecovery);//TESTADO
router.post("/recuperar-senha", usuarioController.createRecovery);//TESTADO
router.get("/senha-recuperada", usuarioController.showCompleteRecovery);//TESTADO
router.post("/senha-recuperada", usuarioController.completeRecovery);//TESTADO

router.get("/", auth.required, usuarioController.index); //TESTADO
router.get("/:id", auth.required, usuarioController.show);// COM ERRO

module.exports = router;