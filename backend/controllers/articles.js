let Url = require("../models/url.model");
let concatFeed = [];
let Parser = require("rss-parser");
let parser = new Parser();
exports.getUrl = async (req, res, next) => {
  try {
    const url = await Url.find();
    url.map(item => {
      (async () => {
        let feed = await parser.parseURL(item.url);

        feed.items.map(item => {
          concatFeed = concatFeed.concat({
            title: item.title,
            link: item.link,
            desc: item.description || item.contentSnippet
          });
        });
      })();
    });
    return setTimeout(() => {
      res.status(200).json({
        success: true,
        count: concatFeed.length,
        data: concatFeed
      }),
        (concatFeed = []);
    }, 300);
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};

exports.addUrl = async (req, res, next) => {
  try {
    const { url } = req.body;
    const addurl = await Url.create(req.body);
    return res.status(201).json({
      success: true,
      data: addurl
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
