const stakeholders = require("./data/stackeholders");
const courses = require("./data/courses");
const featuredProducts = require("./data/featuredproducts.data");
const pdp = require("./data/Pdp.data");
const plp = require("./data/Plp.data");
const filters = require("./data/Filters.data");
const promoImages = require("./data/promoimages");
module.exports = () => {
  return {
    plp,
    pdp,
    stakeholders,
    courses,
    featuredProducts,
    promoImages,
    filters
  };
};
