// jeu 

var countElement = document.getElementById('count');
var startButton = document.getElementById('startButton');
var clickButton = document.getElementById('clickButton');
var againButton = document.getElementById('againButton');
var reactionCount = document.getElementById('reactionCount');
var reactionContainer = document.getElementById('reaction-container');
var reactionTime = 0;
var startTime = 0;
var stopTime = 0;
var count = 4;

console.log(window.innerHeight);
//chercher event listerner taille de fenetre 
document.getElementById('game').style.height = (window.innerHeight -20)+'px';

function startReaction(){
    startTime =  new Date();

}

function stopReaction(){
    stopTime = new Date();

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }




function interval(){
    var timeout = setTimeout(interval, 1000)
    count -- 
    countElement.textContent = count;
    if (count == 0){
        clearTimeout(timeout);
        countElement.style.display = 'none';
        clickButton.style.display = 'block';
        startReaction()
        //je prends la taille de la fenetre afin d'éviter que mon bouton sorte de la fenetre
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        //je mets une marge aléatoire sur mon bouton
        var x = getRndInteger(20,(windowWidth-40));
        var y = getRndInteger(20,(windowHeight-40));
        clickButton.style.margin = `${y}px ${x}px`;

    }
}

// var failTimeout = setTimeout(() => {
//         reactionContainer.style.display = 'block';
//         clickButton.style.display = 'none';
//         reactionContainer.textContent = 'Vous êtes trop lents !!!';
//         againButton.style.display = 'block';
//     }, 6000);

startButton.addEventListener('click',function(){
    interval();
    countElement.style.display = 'block';
    startButton.style.display = 'none';
  
})

clickButton.addEventListener('click', function(){
    stopReaction();
    reactionTime = (stopTime - startTime)/1000;
    reactionContainer.textContent = 'Votre temps de réaction est de ' + reactionTime + ' secondes'
    clickButton.style.display = 'none';
    reactionContainer.style.display = 'block';
    againButton.style.display = 'block';
} )

againButton.addEventListener('click', function(){
    count = 4;
    interval();
    countElement.style.display = 'block';
    againButton.style.display = 'none';
    reactionContainer.style.display = 'none';
    
})


