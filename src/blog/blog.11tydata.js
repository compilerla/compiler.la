// /blog/:year/:slug/
const permalink = ({ page: { date, fileSlug } }) => `/blog/${date.getFullYear()}/${fileSlug}/`;

export default {
  layout: "blog_post",
  permalink,
  tags: ["posts"],
};
