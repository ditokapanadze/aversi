exports.getPrivateData = (req, res, next) => {
  console.log("private");
  res.status(200).json({
    success: true,
    data: "you got access to the private data in this route",
    user: req.user,
  });
};
