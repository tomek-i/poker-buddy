const HTTPStatusError = {};

HTTPStatusError.Info = {};
HTTPStatusError.Success = {};
HTTPStatusError.Redirection = {};
HTTPStatusError.Client = {};
HTTPStatusError.Server = {};

HTTPStatusError.Generic = (message, code, err) => {
  const error = new Error(message);
  error.status = code;
  error.error = err;
  return error;
};

HTTPStatusError.Client.BadRequest = (message, err) =>
  HTTPStatusError.Generic(message, 400, err);
HTTPStatusError.Client.Forbidden = (message, err) =>
  HTTPStatusError.Generic(message, 403, err);
HTTPStatusError.Client.Unauthorized = (message, err) =>
  HTTPStatusError.Generic(message, 401, err);
HTTPStatusError.Client.NotFound = (message, err) =>
  HTTPStatusError.Generic(message, 404, err);

HTTPStatusError.Server.InternalError = (message, err) =>
  HTTPStatusError.Generic(message, 500, err);

module.exports = HTTPStatusError;

/*
class ServerExceptions {
  static Generic(message, code, err) {
    const error = new Error(message);
    error.status = code;
    error.error = err;
    return error;
  }
  static InternalError(message, err) {
    return this.Generic(message, 500, err);
  }
}

*/
