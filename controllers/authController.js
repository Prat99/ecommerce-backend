const User = require("../models/userModel");

const authController = {
  signup: (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, result) => {
      if (err)
        return res
          .status(400)
          .json({ desc: "something wrong has happened", err_code: 1 });
      else
        return res
          .status(201)
          .json({ desc: "Successfully created", err_code: 0, user: result });
    });
  },
};

module.exports = authController;
