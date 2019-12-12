function error_handle(err, req, res, next) {
  if (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  } else {
    next();
  }
}

module.exports = error_handle;