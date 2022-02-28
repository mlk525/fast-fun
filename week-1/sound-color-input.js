/*

This is a p5js sketch that uses the WebMIDI.js library to receive MIDI messages

In the project folder, to the left of this coding window,
you can look at the index.html file and see the following on line 7:

<script src="https://cdn.jsdelivr.net/npm/webmidi@next/dist/iife/webmidi.iife.js"></script>

This is added to the otherwise normal p5js boilerplate,
and bring in the WebMIDI.js library, allowing our browser and JS program
to send and receive MIDI messages from all types of software and hardware

*/


//background color variable
var bgColor;



var color1;
var color2;

//color of a square
var squareColor;

var discoSquare;

//text to be displayed
var displayText;

//sound to be played
var soundFX; 

function setup() { 
  //400 by 400 pixel canvas
  createCanvas(600, 600);
  frameRate(30);
  noStroke();
  
  //starting background color
  color2 = color(235,235,235);
  color1 = color(235,235,235);
  background(color2);  
  
  //starting text
  displayText="Nothing received";
  
  //loading sound files to play
  //this can be seen inside of the project folder to the left of the code window
  c4 = loadSound('c4.ogg');
  e4 = loadSound('e4.ogg');
  g4 = loadSound('g4.ogg');
  
 
	
  ////
  //Setting up MIDI
  ////
  
  WebMidi
  .enable()
  .then(onEnabled)
  .catch(err => alert(err));
  
  //onEnabled() function will take it from here
} 


//This is the function we're using in our setup()
//Once it is successfully enabled, we can use WebMidi:
//See what inputs and outputs are available,
//add event listeners that determine what we want to do, etc

function onEnabled() {
  console.log("WebMIDI Enabled");
  
  // Inputs
  WebMidi.inputs.forEach(input => console.log("Input: ",input.manufacturer, input.name));
  
  // Outputs
  WebMidi.outputs.forEach(output => console.log("Output: ",output.manufacturer, output.name));

  
  
  //We can access MIDI inputs by name if we want, like so:
  //myInput = WebMidi.getInputByName("MPK mini 3");
  
  //Or just grab the first one available
  let inputAllChannels = WebMidi.inputs[0];
  
  //If we want to specify a MIDI channel, we can
  let inputChannel10 = inputAllChannels.channels[10]; // <-- the MIDI channel (10)
  
  
  
  
  //What happens when we detect a Note On MIDI event:
  
  inputAllChannels.addListener("noteon", e => {
  console.log("Note on:",e.note.identifier, e.message.channel);
    console.log("Velocity:",e.note.rawAttack);
    
    //Show the MIDI note info on the screen
    displayText=e.note.identifier+", MIDI: "+e.note.number;
    
    //generate a random color to fill in the invisible rectangle in draw()
 		var randomR = random(0,255);
  	 	var randomG = random(0,255);
  		var randomB = random(0,255);
  		color1 = color(randomR, randomG, randomB);
    
    	//This will happen any time any note on message is received
    	//Specifying what note has been received:
    
    	if(e.note.number==60){
        console.log("A C4 note has been received"); 
      	//change the volume of the sound, scale of 0.0 to 1.0
      	c4.setVolume(0.35);
        c4.play();
      }
    	//Or you can specify the note
    	else if(e.note.number==61){
        console.log("A C#4 note has been received"); 
      	//change the volume of the sound, scale of 0.0 to 1.0
      	e4.setVolume(0.35);
        e4.play();
      }
        
        else if(e.note.number==62){
        console.log("A D4 note has been received"); 
      	//change the volume of the sound, scale of 0.0 to 1.0
      	g4.setVolume(0.35);
        g4.play();
      }
      
    
})
  
  //What happens when we detect a NoteOff MIDI message?
  
  inputAllChannels.addListener("noteoff", e => {
  console.log("Note off:",e.note.identifier, e.message.channel);
    
    //Revert the background when the note is 'released'
    color1 = color2;
    
})
  
}


function draw() { 
  
  //Drawing a rectangle, with no outline, 
  //Middle of the screen (width and height divided by two)
  //it will be invisible unless a note has been pressed
  
  //if the rectangle has changed color, fade it back to the background color
  if(color1 != color2){
    color1 = lerpColor(color1, color2, 0.2);
  }
  
  fill(color1);
  rect(150,150,300,300);
  
  //Displaying text to indicate the number of the note (60, 61, 62)
  //and the musical "letter" that corresponds to it
  
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(displayText,width/2,height/2);
  
}
