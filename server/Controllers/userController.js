import UserModel from "../Models/userModel.js";
import PostModel from "../Models/postModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

//get all users
export const getAllUsers = async (req, res) => {
  try {
    const pageSize = 12
    const page = req.query.page ? parseInt(req.query.page) : 0;
    let users = await UserModel.find({}).limit(pageSize).skip(pageSize * page)
    // let users = await UserModel.find()
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc
      return otherDetails
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

// get a User
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, currentUserAdminStatus, password } = req.body;

  if (id === _id || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      )
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { _id, currentUserAdminStatus } = req.body;

  if (_id === id || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};

// Follow a User
export const followUser = async (req, res) => {
  const id = req.params.id;

  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("User is Already followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// UnFollow a User
export const UnFollowUser = async (req, res) => {
  const id = req.params.id;

  const { _id } = req.body;

  if (_id === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(_id);

      if (followUser.followers.includes(_id)) {
        await followUser.updateOne({ $pull: { followers: _id } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User Unfollowed!");
      } else {
        res.status(403).json("User is not followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// Get following users
export const getFollowingUsers = async (req, res) => {
  const id = req.params.id
  try {
    const user = await UserModel.findById(id)
    const getFollowingUsers = await Promise.all(
      user.following.map((item)=>{
        return UserModel.findById(item)
      })
    )
    let followingList = [];
    getFollowingUsers.map((person)=>{
      const { password, isAdmin, followers, following, ...others} = person._doc
      followingList.push(others)
    })
    res.status(200).json(followingList)
  } catch (error) {
    res.status(500).json(error);
  }
}

// Get followers details
export const getFollowersDetails = async (req, res) => {
  const id = req.params.id
  try {
    const user = await UserModel.findById(id)
    const getFollowersDetails = await Promise.all(
      user.followers.map((item)=>{
        return UserModel.findById(item)
      })
    )
    let followersList = [];
    getFollowersDetails.map((person)=>{
      const { password, isAdmin, followers, following,...others} = person._doc
      followersList.push(others)
    })
    res.status(200).json(followersList)
  }
  catch (error) {
    res.status(500).json(error);
  }
}