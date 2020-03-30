let Keyword = require("../models/keyword.model");

exports.getKeywords = async (req, res, next) => {
  try {
    const keywords = await Keyword.find();
    return res.status(200).json({
      success: true,
      count: keywords.length,
      data: keywords
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

exports.addKeyword = async (req, res, next) => {
  try {
    const { keyword, articleNumber } = req.body;
    const addkeyword = await Keyword.create(req.body);
    return res.status(201).json({
      success: true,
      data: addkeyword
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
};
exports.deleteKeyword = async (req, res, next) => {
  try {
    const keywords = await Keyword.findById(req.params.id);

    if (!keywords) {
      return res.status(404).json({
        success: false,
        error: "No Keyword found"
      });
    }

    await keywords.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
