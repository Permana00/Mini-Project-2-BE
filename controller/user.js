const { User, MyList, Reviewed } = require("../helper/relation");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltround = 10;

module.exports = {
  register: async (req, res) => {
    const password = req.body.password;
    const hashPassword = await hash(password, saltround);
    try {
      const data = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: hashPassword,
      });
      const payload = {
        id: data.id,
        name: data.name,
      };
      const token = jwt.sign(payload, "token");
      res
        .status(202)
        .json({ message: "Register succes", data: data, token: token });
    } catch (error) {
      console.log(error);
      res.status(422).json({ message: error.sqlMessage });
    }
  },

  login: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      if (!email && !password) {
        res.status(400).json({ message: "email & password required" });
        return;
      }

      const data = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!data) {
        res.status(404).json({ message: "Account not found" });
      }
      if (!password) {
        res.status(400).json({ message: "password required" });
      }
      const isVeryvied = await compare(password, data.password);
      if (!isVeryvied) {
        res.status(404).json({ message: "Wrong password" });
      }
      const payload = {
        id: data.id,
        name: data.name,
      };
      const token = jwt.sign(payload, "token");
      res.json({
        message: "Login Succes",
        name: data.name,
        token: token,
      });
    } catch (err) {
      res.json({ msg: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const password = req.body.password;
      const hashPassword = await hash(password, saltround);
      const data = await User.update(
        {
          name: req.body.name,
          email: req.body.email,
          password: hashPassword,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.json({ message: "Data updated!" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },

  uploadAvatar: async (req, res) => {
    try {
      const data = await User.update(
        {
          image: req.file.filename,
        },
        {
          where: { id: req.params.id },
        }
      );
      res.status(202).json({ message: "Succes upload image" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getOneUser: async (req, res) => {
    try {
      const data = await User.findOne({
        where: { id: req.params.id },
        include: [{ model: MyList }, { model: Reviewed }],
      });
      res.status(202).json({ message: "Succes", data: data });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  getAllUser: async (req, res) => {
    try {
      const data = await User.findAll();
      res.status(202).json({ message: "succes", data: data });
    } catch (error) {
      res.status(404).json({ message: "no user found" });
    }
  },
};
