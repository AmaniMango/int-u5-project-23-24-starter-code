
let input = document.querySelector(".q");
let Button = document.querySelector("button");
let results = document.querySelector(".results");
let boredContainer = document.querySelector("#imageContainer");

let boredUrls = ["sushi1.jpg", "pizzaa.jpg", "ice.jpg", "ramen.jpg"];
let happyUrls = ["beef.jpg", "cupcakeee.jpg", "donuttt.jpg", "Spaghtettiii.jpg"];
let anxiousUrls = ["elotes.jpg", "steak.jpg", "taco.jpg", "chil.jpg"];
let sadUrls = ["pancake.jpg", "Waffle.jpg", "eggs.jpg", "cro.jpg"];

Button.addEventListener("click", function() {
   let answer1 = input.value;
   
    if (answer1 === "bored"){
        console.log("BORED");
        results.innerHTML = `<div class = "food1">
        <h1>Food to eat when you are bored</h1>`;

        boredUrls.forEach(function(url){
            let image = document.createElement("img");
            image.src = url;
            imageContainer.appendChild(image);
        });
    }
    
    else if (answer1 === "happy"){
        console.log("HAPPY");
        results.innerHTML = `<div class = "food2">
        <h1>Food to eat when you are happy</h1>`;

        happyUrls.forEach(function(url){
            let image = document.createElement("img");
            image.src = url;
            imageContainer.appendChild(image);

        });
    }
    
    else if (answer1 === "anxious"){
        console.log("ANXIOUS");
        results.innerHTML = `<div class = "food3">
        <h1>Food to eat when you are anxious</h1>`;

        anxiousUrls.forEach(function(url){
            let image = document.createElement("img");
            image.src = url;
            imageContainer.appendChild(image);

        });
    }
    
    else if (answer1 === "sad"){
        console.log("SAD");
        results.innerHTML = `<div class = "food4">
        <h1>Food to eat when you are sad</h1>`;

        sadUrls.forEach(function(url){
            let image = document.createElement("img");
            image.src = url;
            imageContainer.appendChild(image);

        });
    }

});



