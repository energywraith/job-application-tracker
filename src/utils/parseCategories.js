export default (categories) => {
  if (!categories) return null;

  return categories
    .sort((a, b) => a.index - b.index)
    .map((category) => ({
      ...category,
      data: category.jobs,
    }));
};
