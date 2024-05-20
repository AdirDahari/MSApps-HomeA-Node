import { Router } from "express";
import { search, searchById } from "../service/search";
import { MyError } from "../error/my-error";

const router = Router();

// GET request by category | page
router.get("/", async (req, res, next) => {
  try {
    const reqData = req.url;
    if (!reqData) throw new MyError("req url is empty", 400);

    const result = await search(reqData);
    if (!result) throw new MyError("No results", 400);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

// GET request by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw new MyError("id not found", 400);

    const result = await searchById(id);
    if (!result) throw new MyError("No results", 400);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

export { router };
