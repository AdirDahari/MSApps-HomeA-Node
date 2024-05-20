import { ErrorRequestHandler } from "express";
import { MyError } from "../error/my-error";

// Last in the middleware chain, response the error.
const errorHandler: ErrorRequestHandler = (err, req, res) => {
  console.log(err);

  if (err instanceof MyError) {
    return res.status(err.status).json({ massage: err.message });
  }

  return res.status(500).json({ massage: "Internal Server Error", err });
};

export { errorHandler };
