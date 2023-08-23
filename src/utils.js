export const getImagePaths = (folder, key, aspect) => {
  let pngImagePath;
  let webpImagePath;
  let jpgImagePath;
  if (aspect === undefined) {
    pngImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}.png`;
    webpImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}.webp`;
    jpgImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}.jpg`;
  } else {
    pngImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}-${aspect}.png`;
    webpImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}-${aspect}.webp`;
    jpgImagePath = `${process.env.PUBLIC_URL}/images/${folder}/image-${key}-${aspect}.jpg`;
  }
  return { png: pngImagePath, webp: webpImagePath, jpg: jpgImagePath };
};
