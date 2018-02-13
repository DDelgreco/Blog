import express from "express";

let router = express.Router();
router.get("/id", (req, res) => {
    getBlog().then(data => {
      res.send(data);
    });
  });

  export default router;