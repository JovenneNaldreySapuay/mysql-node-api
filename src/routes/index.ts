import { Router } from "express";
import PostController from '../controllers/postController';

const router: Router = Router();
router.post("/api/blogs", PostController.save);
router.get("/api/blogs", PostController.all);
router.get("/api/blogs/:id", PostController.edit);
router.put("/api/blogs/:id", PostController.update);
router.delete("/api/blogs/:id", PostController.destroy);

module.exports = router;
