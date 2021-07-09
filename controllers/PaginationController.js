const Produse = require("../models/Produse");
const Utilizator = require("../models/Utilizator");

const makeArrayFromNumber = (number) => {
  const array = [];

  for (let i = 1; i <= number; i++) {
    array.push(i);
  }

  return array;
};

module.exports.index = async (req, res) => {
  const page = req.query.page || 1;
  const totalDocs = await Produse.find().countDocuments();
  const pagination = makeArrayFromNumber(Math.ceil(totalDocs / 12));
  const products = await Produse.find()
    .limit(12)
    .skip((page - 1) * 12);
  res.json({ products, pagination });
};

module.exports.indexByCategory = async (req, res) => {
  const { page = 1, categorii = "înregistrări și piese" } = req.query;
  const totalDocs = await Produse.find({ categorii }).countDocuments();
  const pagination = makeArrayFromNumber(Math.ceil(totalDocs / 12));
  const products = await Produse.find({ categorii })
    .limit(12)
    .skip((page - 1) * 12);

  res.json({ products, pagination });
};

module.exports.indexByUserId = async (req, res) => {
  const { _id, page = 1 } = req.query;
  const user = await User.findById(_id);
  if (!user)
    return res.status(500).json({ error: "Utilizatorul nu a fost gasit" });
  const totalDocs = await Produse.find({ user: user._id }).countDocuments;
  const pagination = makeArrayFromNumber(Math.ceil(totalDocs / 5));
  const produse = await Produse.find({ user: user._id })
    .limit(5)
    .skip((page - 1) * 5);

  res.json({ produse, total: totalDocs, pagination });
};
