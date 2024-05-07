module.exports = (sequelize, Sequelize) => {
  const Presensi = sequelize.define("presensi", {
    id_mhs: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  
  });

  return Presensi;
};
