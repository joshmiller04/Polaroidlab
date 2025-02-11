
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("Imgs"); // ✅ Copy images to _site

  return {
    dir: {
      includes: "_includes",
      input: ".",
      output: "_site"
    }
  };
};