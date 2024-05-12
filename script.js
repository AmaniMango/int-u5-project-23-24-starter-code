
let input = document.querySelector(".q");
let Button = document.querySelector("button");
let results = document.querySelector(".results");
let boredContainer = document.querySelector("#imageContainer");

let boredUrls = ["sushi1.jpg", "pizzaa.jpg", "ice.jpg", "ramen.jpg"];

Button.addEventListener("click", function() {
   let answer1 = input.value;


    if (answer1 === "bored"){
        console.log("BORED");
        results.innerHTML = `<div class = "food1">
        <h1>Sushi</h1>`;

        boredUrls.forEach(function(url){
            let image = document.createElement("img");
            image.src = url;
            imageContainer.appendChild(image);
        });
    }
    
    else if (answer1 === "happy"){
        console.log("HAPPY");
        results.innerHTML = `<div class = "food2">
        <h1>Pizza</h1>
        <img src = "pizzaa.jpg">`;
    }
    
    // else if (answer1 === "anxious"){
    
    // }
    
    // else if (answer1 === "sad"){
    
    // }

});



