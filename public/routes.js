const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/proveedores",      cors(), controller.readProveedores);   // Read All
router.get    ("/proveedores/:id",  cors(), controller.readProveedor);    // Read
router.delete ("/proveedores/:id",  cors(), controller.deleteProveedor);  // Delete
router.put    ("/proveedores/:id",  cors(), controller.updateProveedor);  // Update
router.post   ("/proveedores",      cors(), controller.createProveedor);  // Create

router.get    ("/mercancias",     cors(), controller.readMercancias);  // Read All
router.get    ("/mercancias/:id", cors(), controller.readMercancia);   // Read
router.delete ("/mercancias/:id", cors(), controller.deleteMercancia); // Delete
router.put    ("/mercancias/:id", cors(), controller.updateMercancia); // Update
router.post   ("/mercancias",     cors(), controller.createMercancia); // Create


module.exports = router;
