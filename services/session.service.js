const { successResponse } = require("../utils/apiResponse");
const { generateJwtToken } = require('../utils/authorization');

/* ProductService */

loginUser = async (req, res, next) => {
  try {
    const token = await generateJwtToken(req.body)
    return successResponse(res, { token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  loginUser,
};
