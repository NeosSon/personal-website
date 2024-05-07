const projectOne = document.getElementById("project-1");
const projectTwo = document.getElementById("project-2");
const projectThree = document.getElementById("project-3");
const projectImg = document.getElementById("project-img");
const projectImgTwo = document.getElementById("project-img-two");
const projectImgThree = document.getElementById("project-img-three");

// Initially hide all project images and links
projectImg.style.display = 'none';
projectImgTwo.style.display = 'none';
projectImgThree.style.display = 'none';

// Project One 
projectOne.addEventListener('mouseover', () => {
    projectOne.style.display = 'none';
    projectImg.style.display = 'block';
});

projectImg.addEventListener('mouseout', () => {
    projectOne.style.display = 'block';
    projectImg.style.display = 'none';
});

// Project Two
projectTwo.addEventListener('mouseover', () => {
    projectTwo.style.display = 'none';
    projectImgTwo.style.display = 'block';
});

projectImgTwo.addEventListener("mouseout", () => {
    projectTwo.style.display = 'block';
    projectImgTwo.style.display = 'none';
});

// Project Two
projectThree.addEventListener('mouseover', () => {
    projectThree.style.display = 'none';
    projectImgThree.style.display = 'block';
});

projectImgThree.addEventListener("mouseout", () => {
    projectThree.style.display = 'block';
    projectImgThree.style.display = 'none';
});
