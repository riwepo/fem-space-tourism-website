export const getImagePaths = (folder, key) => {
  const pngImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}.png`;
  const webpImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}.webp`;
  return { png: pngImagePath, webp: webpImagePath };
};
