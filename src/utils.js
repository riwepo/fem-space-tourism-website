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

// returns a key down handler function
export const getKeyDownHandler = (
  itemArrayLength,
  activeItemIndex,
  callback
) => {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  return (event) => {
    if (event.keyCode === LEFT_KEY && activeItemIndex > 0) {
      callback(activeItemIndex - 1);
    } else if (
      event.keyCode === RIGHT_KEY &&
      activeItemIndex < itemArrayLength - 1
    ) {
      callback(activeItemIndex + 1);
    }
  };
};

// returns a click handler function
export const getClickHandler = (callback) => {
  return (event) => {
    const index = +event.target.dataset.itemIndex;
    callback(index);
  };
};
