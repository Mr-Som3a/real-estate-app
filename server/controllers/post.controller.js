import prisma from "../config/prisma.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  const { userId } = req.params;
  try {
    const userPost = await prisma.post.findUnique({
      where: { authorId: userId },
    });

    res.status(200).json(userPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { text, title, price, address, authorId } = req.body;
    const newPost = await prisma.post.create({
      data: {
        authorId,
        title,
        text,
        images,
        price,
        address,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  try {
    const id  = parseInt(req.params.id)
    const { images } = req.body;
    const editPost = await prisma.post.update({
      where:{id},
      data: {
        images
      },
    });
    res.status(200).json({message:"post updated",editPost});
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};

export const deletePost = async (req, res) => {
  try {
    const id  = parseInt(req.params.id);
    const deletedPost = await prisma.post.delete({
      where: {id:id}
    });

    res.status(200).json({ message: "post deleted succefuly", deletedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
