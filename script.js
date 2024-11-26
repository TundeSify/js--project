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
        document.body.style.backgroundColor = "#33437B";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Press Start 2P', system-ui";
        document.body.style.fontSize = "10px";
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
        document.body.style.fontFamily = "'Cedarville Cursive', cursive";
        document.body.style.fontSize = "17px";
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
        document.body.style.fontFamily = "'Times New Roman', Times, serif, italic";
        document.body.style.fontSize = "23px";
        updateImage("img/elder.png");
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "sans-serif";
    document.body.style.fontSize = "16px";
    updateImage("img/meme.png");
    currentTheme = "main";
}