
import { v2 as cloudinary } from "cloudinary";
import prisma from "../config/prisma.js";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const id= parseInt(req.params.userId);
  try {
    const user = await prisma.user.findUnique({
      where: id,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editProfile = async (req, res) => {
  try {
    // const {...user}= req.body
    if (!req.files || !req.files.imgUrl) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.files.imgUrl;
    const id = parseInt(req.params.id);
    // Upload to Cloudinary using the temp file path
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "uploads",
    });
    console.log("the type", typeof result.secure_url);
    if (!result) {
      return res.status(400).json({ message: "does not upload to cloudinary" });
    }

    const editedUser = await prisma.user.update({
      where: { id },
      data: {
        imgUrl: result.secure_url,
      },
    });
    console.log(editedUser);
    // Optionally delete the temp file manually (if needed)
    // fs.unlinkSync(file.tempFilePath);

    res.status(200).json({ url: result.secure_url, editedUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
