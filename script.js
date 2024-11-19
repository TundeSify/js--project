var currentTheme = "main";

function updateImage(src) {
    let imgElement = document.querySelector("img");

    if (!imgElement) {
        imgElement = document.createElement("img");
        document.body.appendChild(imgElement);
    }
    
    imgElement.src = src;
}

function Blue(theme) {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#bde0fe";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, sans-serif";
        updateImage("img/man.jpg");
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#ffafcc";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Comic Sans MS', cursive";
        updateImage("img/girl.jpg");
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#a98467";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Times New Roman', Times, serif";
        updateImage("img/elder.png");
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "#8d99ae";
    document.body.style.color = "black";
    document.body.style.fontFamily = "default";
    updateImage("img/meme.png");
    currentTheme = "main";
}