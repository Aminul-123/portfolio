// script for javascript
const downloadButton = document.querySelector('.downloadResume');

downloadButton.addEventListener('click', function() {
    const fileUrl = './images/resume-4.pdf';
    const fileName ='Aminuls-resume';

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    link.click();
})
const contactBtn = document.querySelector('.contact')
contactBtn.addEventListener('click', () => {
    const html = ` <span class=" phone-no">Phone : +91 6000 217 935</span>`
    contactBtn.insertAdjacentHTML('afterbegin', html)
})