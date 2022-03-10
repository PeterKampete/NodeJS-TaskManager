const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).select("name price");

  return res.status(200).json({ msg: products });
};
const getAllProducts = async (req, res) => {
  const { name, featured, company, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === true ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(filters)
  }

  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join("");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields.split(",").join("");
    result = result.select(fieldsList);
  }

  const products = await result;
  res.status(200).json({ msg: products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
