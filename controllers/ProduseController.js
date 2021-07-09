const Produse = require("../models/Produse");
const Utilizator = require("../models/Utilizator");
const fs = require("fs");
const path = require("path");

module.exports.adaugaProdus = async (req, res) => {
  const { titlu, descriere, categorii, pret = 0 } = req.body;
  const { filename } = req.file || {};
  const { _id } = req.headers;
  const user = await Utilizator.findById(_id);

  if (!user) {
    return res.satus(401).json({ error: "User neautorizat" });
  }

  if (!titlu || !descriere || !categorii) {
    return res.json({ error: "Completați corect câmpurile" });
  }

  const produs = await Produse.create({
    user: _id,
    imagine: filename,
    titlu,
    descriere,
    categorii,
    pret,
  });
  res.json(product);
};

module.exports.stergereProdus = async (req, res) => {
  const { _id } = req.params;
  try {
    await Produse.findOneAndDelete({ _id });
    res.json({ success: "Produsul a fost sters cu success" });
  } catch (err) {
    res.json({ error: "A apărut o eroare la ștergerea produsului" });
  }
};

module.exports.update = async (req, res) => {
  const { _id } = req.params;
  const { titlu, descriere, categorii, pret = 0 } = req.body;
  const { filename } = req.file || {};

  let produse = await Produse.findById(_id);

  if (!produse) {
    return res.status(500).json({ error: "Produsul nu a fost gasit" });
  }

  if (!title || !descriere || !categorii) {
    return res.json({ error: "Completați corect câmpurile" });
  }

  if (produse.image && filename) {
    fs.unlink(path.resolve("uploads", `${produse.image}`), (err) => {
      if (err) return res.json(err);
      console.log("Deleted successfully!");
    });
  }
  produse = await produse.updateOne({
    titlu,
    descriere,
    categorii,
    pret,
    img: filename ? filename : produse.image,
  });
  return res.json({ success: "Produsul a fost creat cu success" });
};
