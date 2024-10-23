import express from "express";
import Article from "../models/Article.js";
import Category from "../models/Category.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categoryName = req.query.category;
    let articles;

    if (categoryName) {
      const category = await Category.findOne({ name: categoryName });

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      articles = await Article.find({ category: category._id }).populate(
        "category",
        "name"
      );
    } else {
      articles = await Article.find().populate("category", "name");
    }

    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
