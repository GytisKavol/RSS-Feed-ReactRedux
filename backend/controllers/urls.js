let Url = require("../models/url.model");

exports.getUrls = async (req, res, next) => {
  try {
    const urls = await Url.find();

    return res.status(200).json({
      success: true,
      count: urls.length,
      data: urls
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
exports.deleteUrl = async (req, res, next) => {
  try {
    const urls = await Url.findById(req.params.id);

    if (!urls) {
      return res.status(404).json({
        success: false,
        error: "No url found"
      });
    }

    await urls.remove();

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
