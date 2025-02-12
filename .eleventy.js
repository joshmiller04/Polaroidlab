module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  return {
      dir: {
          input: ".",   
          output: "_site"
      }
  };
};
