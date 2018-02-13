import { Router } from "express";
import {
  getBlogs,
  getBlog,
  postBlog,
  deleteBlog,
  updateBlog
} from "../config/db";

let router = Router();

router.get("/", (req, res) => {
  getBlogs().then(data => {
    res.send(data);
  });
});
router.get("/:id", (req, res) => {
  getBlog(req.params.id).then(data => {
    res.send(data);
  });
});
router.post("/", (req, res) => {
  postBlog(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  updateBlog(id, req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  deleteBlog(id);
  res.sendStatus(200);
});

export default router;
