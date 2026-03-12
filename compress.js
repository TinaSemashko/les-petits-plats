const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = './public/images';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'));

async function compress() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const tempPath = filePath + '.tmp';
    try {
      await sharp(filePath).resize(1200).jpeg({ quality: 75 }).toFile(tempPath);
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      console.log(`Compressed: ${file}`);
    } catch (e) {
      console.log(`Error: ${file} - ${e.message}`);
    }
  }
}

compress();
