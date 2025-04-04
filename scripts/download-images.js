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
    url: "https://plus.unsplash.com/premium_photo-1674228288234-8a10453db33e?q=80&w=1000&auto=format&fit=crop",
    filename: "hero.png",
    description: "Smart glasses for hero section - sleek minimal design",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1675797367943-1f569acd7fea?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-1.png",
    description: "Vision feature image - minimal aesthetic, technology focus",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop",
    filename: "feature-2.png",
    description: "AI Technology feature image - AR overlay concept",
  },
  {
    url: "https://media.istockphoto.com/id/1345642232/photo/voice-recognition-concept.jpg?b=1&s=612x612&w=0&k=20&c=A32RXPwtFSuiO2cHpVJwfEpH0CaEKe1HoFKC0wKgLg4=",
    filename: "feature-3.png",
    description: "Voice Interface feature image - minimal tech aesthetic",
  },
  {
    url: "https://media.istockphoto.com/id/1479987936/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?b=1&s=612x612&w=0&k=20&c=GkAOxzxCQlNbZ6j7PnZyO_MnNIGuxNPP-UBBPqnw2T8=",
    filename: "feature-4.png",
    description: "Human Support feature image - elegant professional look",
  },
  {
    url: "https://media.istockphoto.com/id/1297186219/photo/bionic-eye.jpg?b=1&s=612x612&w=0&k=20&c=uWa1akqQV9UYsNX0hWkkz4-9hhJhQWMEF7a4wFmQJrE=",
    filename: "feature-5.png",
    description: "Advanced Technology feature image - minimal tech aesthetic",
  },
  {
    url: "https://media.istockphoto.com/id/1369824766/photo/cyber-security-concept-closed-padlock-on-digital-background-cybersecurity-blue-abstract-hi.jpg?b=1&s=612x612&w=0&k=20&c=MRg5xzBUCYTvFIZfF1kv7uyQL7_vHKhp0kWjS2NEsu0=",
    filename: "feature-6.png",
    description: "Privacy-First Technology feature image - clean aesthetic",
  },
  {
    url: "https://media.istockphoto.com/id/1455739434/photo/ai-technology-and-robot-development-in-laboratory.jpg?b=1&s=612x612&w=0&k=20&c=dBgkqXyeAXd2_wqwBMqQCeRqNFo59tIkFjjwENNjbsQ=",
    filename: "about.png",
    description: "About section image - team working on technology",
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
