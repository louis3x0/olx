const Produse = require("../models/Produse");
const Utilizator = require("../models/Utilizator");

module.exports.indexByProduct = async (req, res) => {
  const { _id } = req.params;
  const produse = await Produse.findById(_id);
  if (!produse) return res.status(500).json({ error: "Produsul nu exista" });
  const user = await Utilizator.findById(produse.user);
  user.parola = undefined;

  res.json({ produse, user });
};
