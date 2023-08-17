export const getImagePath = (folder, key) => {
  const imagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}.png`;
  return imagePath;
};
