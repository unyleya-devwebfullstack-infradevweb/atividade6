module.exports = {
    errorHandlerMiddleware(err, req, res, next) {
      logger.error(err.stack);
      res.status(500).send(err.message);
    },
  };
  