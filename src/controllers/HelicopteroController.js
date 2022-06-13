const res = require('express/lib/response');
const Helicoptero = require("../models/Helicoptero");
const orederById = {order:[['id','ASC']]}

const Op = require("sequelize").Op;

let message = "";
let type = "";

const getAll = async (req, res) => {
  try {
    const angar = await Helicoptero.findAll(orederById);
    res.render("index", { angar , helicopteroPut: null, helicopteroDel: null });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const register = (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const helicoptero = req.body;
    if (!helicoptero) {
      return res.redirect("/register");
    }

    await Helicoptero.create(helicoptero);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const angar = await Helicoptero.findAll(orederById);
    const helicoptero = await Helicoptero.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        angar,
        helicopteroPut: helicoptero,
        helicopteroDel: null,
      });
    } else {
      res.render('index', {
                angar,
                helicopteroPut: null,
                helicopteroDel: helicoptero,
            });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const helicoptero = req.body;
    await Helicoptero.update(helicoptero, {where: {id: req.params.id}});
    res.redirect('/');
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

const remove = async (req, res) => {
  try {
    await Helicoptero.destroy({where: {id: req.params.id}});
    res.redirect('/');
  } catch (err) {
    res.status(500).send({ error: err.message });
    }

}

module.exports = {
  getAll,
  register,
  create,
  getById,
  update,
  remove,
};
