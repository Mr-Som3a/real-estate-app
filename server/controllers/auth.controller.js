import { HashingPassword, ComparePassword } from "../util/encryptPassword.js";
import prisma from "../config/prisma.js";
import { genToken } from "../util/tokenProcesses.js";

export const CheckAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Signup = async (req, res) => {
  try {

    const { email, password, username } = req.body;

    const isExist = await prisma.user.findUnique({
      where: { email },
    });
    console.log(isExist)
    if (isExist) {
      res.status(400).json({ message: "already this email exist" });
    }

    const hashedPassword = await HashingPassword(password);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    delete newUser.password;
    const token = genToken(newUser.id);
    let fullToken = "Bearer " + token;
    res
      .cookie("auth-x", fullToken, {
        maxAge: 1000 * 60 * 60 ,
        httpOnly: true,
        sameSite: "strict",
      })
      .status(201)
      .json({ token, newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await ComparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    delete user.password;
    const token = genToken(user.id);
    let fullToken = "Bearer " + token;
    res
      .cookie("auth-x", fullToken, {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        sameSite: "strict",
      })
      .status(200)
      .json({ token, user });
    } catch (error) {
      
    res.status(500).json({ message: error.message });
  } finally {
    await prisma.$disconnect();
  }
};

export const Logout = (req, res) => {
  try {
    res.clearCookie('auth-x', {
      httpOnly: true,
      sameSite: 'strict'
    }).json({message:'done'})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
