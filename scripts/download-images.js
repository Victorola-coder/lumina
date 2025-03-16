const https = require("https");
const fs = require("fs");
const path = require("path");

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), "public", "images");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs for our website
const images = [
  {
    url: "https://images.unsplash.com/photo-1629196914168-3a2652305f9f?q=80&w=1000&auto=format&fit=crop",
    filename: "hero.png",
    description: "Smart glasses for hero section",
  },
  {
    url: "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-1.png",
    description: "Vision Ally feature image",
  },
  {
    url: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-2.png",
    description: "Emotional Ally feature image",
  },
  {
    url: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-3.png",
    description: "Learning Ally feature image",
  },
  {
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-4.png",
    description: "Trusted Human Allies feature image",
  },
  {
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-5.png",
    description: "Sustainable Design feature image",
  },
  {
    url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-6.png",
    description: "Privacy-First Technology feature image",
  },
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    filename: "about.png",
    description: "About section image",
  },
];

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);

    https
      .get(url, (response) => {
        response.pipe(file);

        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });

        file.on("error", (err) => {
          fs.unlink(filePath, () => {}); // Delete the file if there's an error
          console.error(`Error downloading ${filename}:`, err.message);
          reject(err);
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {}); // Delete the file if there's an error
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
  });
}

// Download all images
async function downloadAllImages() {
  console.log("Starting image downloads...");

  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}`);
    }
  }

  console.log("All downloads completed!");
}

downloadAllImages();
