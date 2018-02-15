import express from "express";

let router = express.Router();
router.get("/id", (req, res) => {
    getBlog().then(data => {
      res.send(data);
    });
  });
  router.delete("/:id", (req, res) => {
    let id = req.params.id;
    deleteBlog(id);
    res.sendStatus(200);
  });
  export default router;