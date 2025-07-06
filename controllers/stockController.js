const donors = require("../models/donorModel");
const donations = require("../models/donationModel");

exports.getStock = (req, res) => {
  const stock = {};

  donations.forEach(donation => {
    const donor = donors.find(d => d.cpf === donation.cpf);
    if (!donor) return;

    const type = donor.tipoSanguineo;
    if (!stock[type]) {
      stock[type] = 0;
    }
    stock[type] += donation.volume;
  });

  res.status(200).json(stock);
};
