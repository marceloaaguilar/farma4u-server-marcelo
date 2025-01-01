const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'public');

fs.readdir(imagesDirectory, (err, files) => {

  if (err) {
    console.error(err);
    return;
  }

  files.forEach(file => {
    if (file.includes(' ')) {
      const newFileName = file.replace(/\s+/g, '-');
      const oldPath = path.join(imagesDirectory, file);
      const newPath = path.join(imagesDirectory, newFileName);
      
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      })
      
    }
  })

})