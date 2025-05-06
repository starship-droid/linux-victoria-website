const redirectsPlugin = require('eleventy-plugin-redirects');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPlugin(redirectsPlugin, {
        template: 'netlify', // netlify, vercel or clientSide
    })
};