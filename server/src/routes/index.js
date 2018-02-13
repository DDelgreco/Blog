import { Router } from "express";
import blogRouter from "./blogs";
import singleBlogRouter from "./singleblog";

let router = Router();

router.use("/blogs", blogRouter);
router.use("/blogs/:id", singleBlogRouter);


export default router;
