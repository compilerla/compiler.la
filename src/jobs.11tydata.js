export default {
  eleventyComputed: {
    // Return a simplified version of the collection
    jobs: (data) =>
      data.collections.jobs.map((item) => {
        const { title, type, open_date, close_date } = item.data;
        return { title, type, open_date, close_date, url: item.url };
      }),
  },
};
