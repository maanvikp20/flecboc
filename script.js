const paragraphs = ["para1", "para2", "para3"];
const mainstuff = document.getElementById("main").classList;
let currentIndex = 0;

function showParagraph(index) {
    paragraphs.forEach(id => {
    document.getElementById(id).style.display = "none";
    });
    document.getElementById(paragraphs[index]).style.display = "block";
}

function showPrevious() {
    currentIndex = (currentIndex === 0) ? paragraphs.length - 1 : currentIndex - 1;
    showParagraph(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex === paragraphs.length - 1) ? 0 : currentIndex + 1;
    showParagraph(currentIndex);
}

function mainChange(){
    mainstuff.toggle("mainsectionchange");
}