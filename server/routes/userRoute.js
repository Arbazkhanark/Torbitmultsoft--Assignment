const userModel = require("../model/userModel");
const multer = require("multer");
const router = require("express").Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./docs");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
    // cb(null,"")  // Empty string to use original filename
  },
});

// const upload = multer({ storage: storage }).single("files");
const upload = multer({ storage: storage }).array("files");

router.post("/createUser", upload, async (req, res) => {
  const { name, age, hobby, phoneNumber, address } = req.body;
  const file = req.file;
  try {
    console.log("Body", req.body);
    console.log("FIle", req.file);
    const user = new userModel({
      name,
      age,
      hobby,
      files: file ? file.filename : "",
      phoneNumber,
      address,
    });

    await user.save();
    res.status(200).send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

router.get("/allUser", async (req, res) => {
  try {
    const user = await userModel.find();
    if (user.length < 1) {
      return res.status(400).send({ success: false, error: "No user Empty" });
    }
    res.status(200).send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

router.put("/userUpdate/:id", async (req, res) => {
  const { name, age, hobby, files, phoneNumber, address } = req.body;
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

router.delete("/userDelete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).send({ success: false, error: "User Not Found" });
    }
    res.status(200).send({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
