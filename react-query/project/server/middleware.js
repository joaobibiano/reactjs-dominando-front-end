module.exports = (req, res, next) => {
  if (req.method.toLowerCase() === "put") {
    setTimeout(() => {
      next();
    }, 3000);
  } else {
    next();
  }
};
