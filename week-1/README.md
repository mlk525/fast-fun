# Week 1: (WebMIDI & p5.js)

## Description
Working off of the sample code from class, I decided to use what we learned about sending and receiving WebMIDI messages to turn my keyboard into a simple piano. The output sketch is a simple text box, and typing in it sends corresponding notes through loopMIDI to the output sketch that plays the sound file I assigned to each of the three notes I used.
While the actual MIDI notes sent are C4, C#4, and D4, the sound files that play are of the notes C4, E4, and G4. I chose these three notes because they form a chord, and since typing quickly will result in them playing simultaneously, I wanted to make sure the sound produced was relatively pleasant.
I also coded a randomly colored square to appear with each note received. The square fades away and disappears once the note is released. At the center of the screen, the last received note and its corresponding MIDI number are displayed.

### [Keyboard Output sketch](https://editor.p5js.org/taxicabguy/sketches/yWOwSDOSL)
### [Sound & Color Input sketch](https://editor.p5js.org/taxicabguy/sketches/07YqoUMaO)

## Challenges/Discoveries
* I initially had trouble figuring out how to get a suitable MIDI note number (60-62) from the key press of each letter key, but found an easy solution with the keyCode of each letter key (numbered 65 to 90). Subtracting 65 from the code left me with a number between 0 and 25, and by adding the number mod 3 to 60, I got a suitable number to send.
* Fading the color of the rectangle was harder than I expected. I eventually used the [lerpColor()](https://p5js.org/reference/#/p5/lerpColor) function.
* I spent an embarrassingly long time trying to figure out why my code wasn't working before Dominic pointed out that I didn't have loopMIDI running, and therefore had no MIDI channel for my sketched to communicate through.
