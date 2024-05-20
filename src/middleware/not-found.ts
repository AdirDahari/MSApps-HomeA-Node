import { RequestHandler } from "express";

// If the url does not match to the router its response not found.
const notFound: RequestHandler = (req, res, next) => {
  console.log("Not Found");

  res.status(404).json({ message: "Not Found" });
};

export { notFound };
