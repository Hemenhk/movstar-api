const Post = require("../models/postModel");
const APIFeatures = require("./../utils/apiFeatures");
const User = require("../models/authModel");

exports.getAllPosts = async (req, res) => {
  try {
    const features = new APIFeatures(Post.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const posts = await features.query;

    res.status(200).json({
      status: "success",
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};

exports.createPost = async (req, res) => {
  try {
    const userId = User.findById(req.user._id);
    const { title, description, location, price, owner, imageCover } =
      req.body;
    const newPost = await Post.create({
      title,
      description,
      author: userId,
      location,
      price,
      owner,
      imageCover,
    });
    res.status(201).json({
      status: "Post was successfully created",
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

// exports.createPost = async (req, res) => {
//   try {
//     const userId = User.findById(res.users._id)
//     req.body.creator = userId
//     const newPost = await Post.create(req.body, );
//     res.status(201).json({
//       status: "Post was successfully created",
//       data: {
//         post: newPost,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "failed",
//       message: err,
//     });
//   }
// };

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: { post },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Invalid data sent",
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Bad request",
    });
  }
};
