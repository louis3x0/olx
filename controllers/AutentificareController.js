const Utilizator = require("../models/Utilizator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const { email, parola } = req.body;

  if (!email || !parola)
    return res.json({ error: "Completați corect câmpurile" });

  if (!(await bcrypt.compare(parola, user.parola))) {
    return res.json({ error: "Userul nu a fost introdus corect" });
  }

  user.parola = undefined;

  res.json({ user, token: jwt.sign({ _id: user._id }, process.env.SECRET) });
};

module.exports.validateToken = async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.send(false);
  const [scheme, token] = authorization.split("");
  if (!/^Bearer$/i.test(scheme)) return res.send(false);

  try {
    await jwt.verify(token, process.env.SECRET);
    res.send(true);
  } catch (err) {
    res.send(false);
  }
};
