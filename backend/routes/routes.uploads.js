const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname); // CTF vulnerable
  }
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.send("No file uploaded");
  }

  const uploadedFilePath = path.join(
    __dirname,
    "..",
    "uploads",
    req.file.filename
  );

  try {
    delete require.cache[require.resolve(uploadedFilePath)];

    const payload = require(uploadedFilePath);

    if (typeof payload === "function") {
      const output = payload();

      // 🔥 SIRF COMMAND OUTPUT
      return res.send(output.toString());
    }

    res.send("Executed");
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
