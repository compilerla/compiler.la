import { feedPlugin } from "@11ty/eleventy-plugin-rss";

import blog from "./src/_data/blog.json" with { type: "json" };

const { base, outputPath, subtitle, title } = blog;

const byTitle = (a, b) => a.data.title.localeCompare(b.data.title);

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/styles/");
  eleventyConfig.addWatchTarget("src/styles/");

  // Keeps the same directory structure.
  eleventyConfig
    .addPassthroughCopy("src/_redirects")
    .addPassthroughCopy("src/favicon.ico")
    .addPassthroughCopy("**/*.jpg")
    .addPassthroughCopy("**/*.jpeg")
    .addPassthroughCopy("**/*.png")
    .addPassthroughCopy("**/*.svg");

  eleventyConfig.addPassthroughCopy("src/assets/");

  eleventyConfig.addCollection("jobs", (collectionsApi) => {
    return collectionsApi.getFilteredByGlob("src/jobs/*.md").sort(byTitle);
  });

  // ensure draft blog posts are omitted from the RSS feed
  eleventyConfig.addCollection("publishedPosts", (collectionsApi) => {
    return collectionsApi.getFilteredByTag("posts").filter((post) => !post.data.draft);
  });

  // draft blog posts are rendered locally, but not in production builds
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft) {
      data.title = `${data.title} (draft)`;
    }

    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // RSS feed - example https://github.com/11ty/eleventy-base-blog/
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath,
    collection: { limit: 20, name: "publishedPosts" },
    metadata: { base, language: "en", subtitle, title },
  });
}
