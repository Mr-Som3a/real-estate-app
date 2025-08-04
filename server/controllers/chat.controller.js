import prisma from "../config/prisma.js";

export const getMessages = async (req, res) => {
  const { receiverId } = req.params;
  const { userId } = req.user.id;
  try {
    const messages = await prisma.message.findMany({
      where: {
        senderId: userId,
        receiverId,
      },
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const sendMessage = async (req, res) => {
  const { receiverId } = req.params;
  const { userId } = req.user.id;
  const { text } = req.body;

  try {
    const newMessage = await prisma.message.create({
      data: {
        senderId: userId,
        receiverId,
        text,
      },
    });

    //todo integrate socket.io here
    res.status(200).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
