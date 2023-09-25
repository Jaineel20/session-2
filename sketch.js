
var bgimg
var playbutton,mutebutton,settingsbutton,soundbutton
var gameState = "wait"


function preload(){
bgimg=loadImage("splash.gif")

}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton = createImg("play.png")
playbutton.position(width/2-200,height-150)
playbutton.size(200,100)

soundbutton = createImg("sound.png")
soundbutton.position(playbutton.x+200,height-150)
soundbutton.size(130,100)
// soundbutton.hide()

mutebutton = createImg("mute.png")
mutebutton.position(playbutton.x+200,height-150)
mutebutton.size(130,100)
mutebutton.hide()

// settingsbutton = createImg("settings.png")
// settingsbutton.position(playbutton.x-200,height-150)
// settingsbutton.size(130,100)

// settingsbutton.hide()



}

function draw(){

    if (gameState === "wait") {
background(bgimg)

}

playbutton.mousePressed(()=>{
    gameState="aboutGame"
    playbutton.hide()
    soundbutton.hide()
    mutebutton.hide()
})

if(gameState=="aboutGame"){
    gamedetails()
}
  
if (gameState =="Level1"){
    background(0)
}

}

function gamedetails(){

    swal({

title:'This is a Maze Game.. So be careful!!',
text: 'Avoid touching the bricks and find your way to Treasure ..',
imageUrl:"settings.png",
imageSize:"250x250",
confirmButtonText: "PLAY",
            confirmButtonColor: "red"

    },
    function (isConfirm) {
        if (isConfirm) {
            gameState = "Level1"
        }
    }
    )
}