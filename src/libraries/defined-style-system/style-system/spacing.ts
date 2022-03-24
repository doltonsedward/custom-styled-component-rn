const spacing = {};

[...Array(20).keys()].forEach((id) => {
  spacing[id] = id * 4;
});

export default spacing;
