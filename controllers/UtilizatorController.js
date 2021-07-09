const Utilizator = require("../models/Utilizator");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
  const { porecla, email, telefon = null, parola } = req.body;

  if (!porecla || !email || !parola) {
    return res.json({ error: "Te rugam sa completezi toate campurile" });
  }

  await Utilizator.findOne({ email }).then(async (user) => {
    if (user) {
      return res.json({ error: "Email-ul este deja inregistrat" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(parola, salt);

    await Utilizator.create({
      porecla,
      email,
      telefon,
      parola: hashedPassword,
    })
      .then(() => res.json({ success: "Utilizatorul a fost creat cu succes!" }))
      .catch((err) => console.log(err));
  });
};
