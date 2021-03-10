// restricts routes if user not logged in
module.exports = (req, res, next) => {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If not logged in, redirect
  return res.redirect("/login");
};
