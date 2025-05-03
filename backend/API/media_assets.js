const express = require("express");
const router = express.Router();
const db = require("../data/db"); // Kết nối với pool Promise (mysql2/promise)

router.get("/media", async (req, res) => {
  try {
    // Truy vấn lấy dữ liệu slideshow và intro sử dụng Promise
    const [slideshowAssets] = await db.query(
      "SELECT * FROM media_assets WHERE type = 'slideshow'"
    );
    const [introAssets] = await db.query(
      "SELECT * FROM media_assets WHERE type = 'intro'"
    );

    // Format dữ liệu slideshow
    const formattedSlideshow = slideshowAssets.map((asset) => ({
      id: asset.id,
      name: asset.name,
      type: asset.type,
      images: JSON.parse(asset.images || "[]"),
      url: asset.url,
      created_at: asset.created_at,
      updated_at: asset.updated_at,
    }));

    // Format dữ liệu intro
    const formattedIntro = introAssets.map((asset) => ({
      id: asset.id,
      name: asset.name,
      type: asset.type,
      images: JSON.parse(asset.images || "[]"),
      description: asset.description,
      created_at: asset.created_at,
      updated_at: asset.updated_at,
    }));

    // Trả về dữ liệu
    res.status(200).json({
      success: true,
      slideshow: formattedSlideshow,
      intro: formattedIntro,
    });
  } catch (error) {
    console.error("Error fetching media assets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
