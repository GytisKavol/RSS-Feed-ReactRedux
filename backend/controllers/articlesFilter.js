let Url = require("../models/url.model");
let Keyword = require("../models/keyword.model");
let concatFeed = [];
let filterArray = [];
let filterArray2 = [];
let splitWordsTitle = [];
let splitWordsDesc = [];
let Parser = require("rss-parser");
let parser = new Parser();
exports.getUrlFilter = async (req, res, next) => {
  try {
    const url = await Url.find();
    const filter = await Keyword.find();
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
    filter.map(filter => {
      concatFeed.map(item => {
        splitWordsTitle = item.title.split(" ");
        splitWordsDesc = item.desc.split(" ");
        if (
          item.title
            .toUpperCase()
            .includes(
              " " + filter.keyword.toUpperCase() &&
                filter.keyword.toUpperCase() + " "
            ) ||
          item.desc
            .toUpperCase()
            .includes(
              " " + filter.keyword.toUpperCase() &&
                filter.keyword.toUpperCase() + " "
            ) ||
          splitWordsTitle[0]
            .toUpperCase()
            .includes(filter.keyword.toUpperCase()) ||
          splitWordsTitle[splitWordsTitle.length - 1]
            .toUpperCase()
            .includes(filter.keyword.toUpperCase()) ||
          splitWordsDesc[0]
            .toUpperCase()
            .includes(filter.keyword.toUpperCase()) ||
          splitWordsDesc[splitWordsDesc.length - 1]
            .toUpperCase()
            .includes(filter.keyword.toUpperCase())
        ) {
          filterArray = filterArray.concat({
            title: item.title,
            link: item.link,
            desc: item.desc
          });
        }
      });
      filterArray2 = filterArray2.concat({
        filter: filter.keyword,
        articleNumber: filter.articleNumber,
        filterArray
      });
      filterArray = [];
    });
    return (
      res.status(200).json({
        success: true,
        count: filterArray2.length,
        data: filterArray2
      }),
      ((concatFeed = []), (filterArray2 = []))
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
};
