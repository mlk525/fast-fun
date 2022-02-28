/*

This is a p5js sketch that uses the WebMIDI.js library to send MIDI messages

In the project folder, to the left of this coding window,
you can look at the index.html file and see the following on line 7:

<script src="https://cdn.jsdelivr.net/npm/webmidi@next/dist/iife/webmidi.iife.js"></script>

This is added to the otherwise normal p5js boilerplate,
and bring in the WebMIDI.js library, allowing our browser and JS program
to send and receive MIDI messages from all types of software and hardware

*/

let myOutput; //the variable in charge of out MIDI output
let myNote;

function setup() {
  createCanvas(0,0); 
  ////
  //Adding MIDI functionality
  ////
  
  WebMidi
  .enable()
  .then(onEnabled)
  .catch(err => alert(err));
  
  //The function "onEnabled()" will run
  //Unless WebMidi didn't startup properly
  //In which case it will show us an error
}


function onEnabled() {
  //WebMIDI Example Output Setup:
  
  console.log("WebMIDI Enabled");
  
  // Inputs
  WebMidi.inputs.forEach(input => console.log("Input: ",input.manufacturer, input.name));
  
  // Outputs
  WebMidi.outputs.forEach(output => console.log("Output: ",output.manufacturer, output.name));
  
  //Looking at the first output available to us
  console.log(WebMidi.outputs[0]);

  //assign that output as the one we will use later
  myOutput = WebMidi.outputs[0];
  
}

function draw() {
}

function keyPressed() {
  let keyIndex = -1;
  if (keyCode >= 65 && keyCode <= 90) {
    keyIndex = keyCode - 65;
  }
  if (keyIndex === -1) {
    // If it's not a letter key
  } else {
    console.log("Pressed a letter key");
    
    //
    myNote = 60 + (keyIndex%3);
    
    //play note
    myOutput.playNote(myNote, 1, {duration: 2000, rawAttack: 100});
  }
}

