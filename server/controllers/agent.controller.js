
import { v2 as cloudinary } from "cloudinary";
import prisma from "../config/prisma.js";

export const getAgents = async (req, res) => {
  try {
    const agents = await prisma.agent.findMany();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAgent = async (req, res) => {
  const id= parseInt(req.params.userId);
  try {
    const agent = await prisma.agent.findUnique({
      where: id,
    });
    res.status(200).json(agent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editProfile = async (req, res) => {
  try {
    
    if (!req.files || !req.files.imgUrl) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = req.files.imgUrl;
    const id = parseInt(req.params.id);

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "uploads",
    });
    console.log("the type", typeof result.secure_url);
    if (!result) {
      return res.status(400).json({ message: "does not upload to cloudinary" });
    }

    const editedAgent = await prisma.agent.update({
      where: { id },
      data: {
        avatar: result.secure_url,
      },
    });
 

    res.status(200).json({ url: result.secure_url, editedAgent });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
