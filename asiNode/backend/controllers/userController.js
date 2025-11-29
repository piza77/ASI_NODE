const User = require("../models/User");

// REGISTRO
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existe = await User.findOne({
      where: { nom_usu: username }
    });

    if (existe) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const nuevo = await User.create({
      nom_usu: username,
      pass_usu: password
    });

    res.status(201).json({ message: "Usuario registrado", usuario: nuevo });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const usuario = await User.findOne({
      where: { nom_usu: username }
    });

    if (!usuario || usuario.pass_usu !== password) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    res.json({ message: "Inicio de sesión correcto", usuario });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error del servidor" });
  }
};