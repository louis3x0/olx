const routes = require("express").Router();
const auth = require("./middlewares/auth");
const { register } = require("./controllers/UtilizatorController");
const {
  validateToken,
  login,
} = require("./controllers/AutentificareController");
const {
  adaugaProdus,
  stergereProdus,
  update,
} = require("./controllers/ProduseController");
const { indexByProduct } = require("./controllers/DetaliiController");
const {
  index,
  indexByUserId,
  indexByCategory,
} = require("./controllers/PaginationController");

// Auth
routes.post("/inregistrare", register);
routes.post("/logare", login);
routes.get("/validare-token", validateToken);

// Produse routes
routes.post("/produs/nou", auth, adaugaProdus);
routes.delete("/produse/:_id", auth, stergereProdus);
routes.post("/produse/:_id", auth, update);

// Detalii routes
routes.get("/product/:id", indexByProduct);

// Pagination routes
routes.get("/produse", index);
routes.get("/produse/categorii", indexByCategory);
routes.get("/produse/utilizator", auth, indexByUserId);

module.exports = routes;
