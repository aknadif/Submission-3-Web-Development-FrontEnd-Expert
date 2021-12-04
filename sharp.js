/* eslint-disable import/no-extraneous-dependencies */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "src/public/images");
const destination = path.resolve(__dirname, "dist/images");

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  if (image.includes("hero-image")) {
    // convert hero image lebar 1200px
    sharp(`${target}/${image}`)
      .resize(1200)
      .webp({ lossless: true })
      .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-1200.webp`));

    // convert hero image lebar 1000px
    sharp(`${target}/${image}`)
      .resize(1000)
      .webp({ lossless: true })
      .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-1000.webp`));

    // convert hero image lebar 600px
    sharp(`${target}/${image}`)
      .resize(600)
      .webp({ lossless: true })
      .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-600.webp`));
  } else {
    // convert loading image lebar 400px
    sharp(`${target}/${image}`)
      .resize(400)
      .webp({ lossless: true })
      .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-400.webp`));

    // convert loading image lebar 300px
    sharp(`${target}/${image}`)
      .resize(300)
      .webp({ lossless: true })
      .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-300.webp`));

    // convert loading image lebar 200px
    sharp(`${target}/${image}`)
      .resize(200)
      .webp({ lossless: true })
      .toFile(path.resolve(__dirname, `${destination}/${image.split(".").slice(0, -1).join(".")}-200.webp`));
  }
});
