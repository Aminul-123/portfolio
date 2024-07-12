// script for javascript
const downloadButton = document.querySelector('.downloadResume');

downloadButton.addEventListener('click', function() {
    const fileUrl = './images/IMG_20240712_113356.jpg';
    const fileName ='Aminuls-resume';

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
})