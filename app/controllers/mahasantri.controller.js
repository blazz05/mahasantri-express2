const db = require("../models");
const Mahasantri = db.mahasantris;

exports.index = (req, res) => {
  Mahasantri.findAll()
    .then((data) => {
      res.json({
        message: "Data Mahasantri ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data Mahasantri tidak ditemukan",
      });
    });
};

exports.create = (req, res) => {
  const mahasantri = {
    nama: req.body.nama,
    asal: req.body.asal,
    umur: req.body.umur,
    telepon: req.body.telepon,
  };

  Mahasantri.create(mahasantri)
    .then((data) => {
      res.json({
        message: "Data Mahasantri berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};

// Membuat function untuk menghapus data Mahasantri
exports.destroy = (req, res) => {
  const id = req.params.id;
  Mahasantri.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data Mahasantri berhasil dihapus",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal dihapus",
      });
    });
};

// Membuat function untuk mengupdate data Mahasantri
exports.update = (req, res) => {
  const id = req.params.id;
  Mahasantri.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.json({
        message: "Data Mahasantri berhasil diupdate",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal diupdate",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Mahasantri.findByPk(id)
    .then((data) => {
      res.json({
        message: "Data Mahasantri ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data Mahasantri tidak ditemukan",
      });
    });
};