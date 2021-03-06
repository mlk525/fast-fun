# Week 4: (Prototype Game Controller)

[![ButtonHero Demo](https://github.com/mlk525/fast-fun/blob/main/week-3/BH%20Demo%20Screencap.jpg)](https://github.com/mlk525/fast-fun/blob/main/week-3/)
Click the screencap to see documentation for the Unity game prototype these controllers are meant for.

## Description
Right off the bat I knew I wanted to experiment with a guitar shaped controller, basically emulating the original Guitar Hero console that my game is based on. I used cardboard for a crude guitar neck and headstock, and for my first prototype, strips cut from a PBR can for frets to play notes.

<p align="center">
  <img width="400" src="https://github.com/mlk525/fast-fun/blob/main/week-4/proto1_2.jpg">
</p>

I chose the can because the curved aluminum seemed conductive enough to serve as a circuit switch and bouncy enough to ensure that the "frets" would snap back to their original positions after being pressed.

<p align="center">
  <img width="600" src="https://github.com/mlk525/fast-fun/blob/main/week-4/proto1_1.jpg">
</p>

Unfortunately, the can didn't prove to be a good conductor, and I was forced to improvise with an aluminum takeout container.

<p align="center">
  <img width="400" src="https://github.com/mlk525/fast-fun/blob/main/week-4/proto2_3.jpg">
</p>

<p align="center">
  <img width="400" src="https://github.com/mlk525/fast-fun/blob/main/week-4/proto2_2.jpg">
</p>

I mounted the breadboard on the back of the cardboard cutout, and attached the aluminum frets and the rest of the circuitry, all with a hot glue gun. The [code](https://github.com/mlk525/fast-fun/blob/main/week-4/ButtonHero_controller.ino) for the Arduino to act as a keyboard was based on the Example code for Keyboard and Mouse Control. Each fret of the controller is associated with the letters coded into the Unity game (Q, W, E, and R).

<p align="center">
  <img width="400" src="https://github.com/mlk525/fast-fun/blob/main/week-4/proto2_1.jpg">
</p>

## Challenges/Discoveries
* As I mentioned above, the PBR can was not a good conductor, owing to the protective coating covering the insides and outsides of the aluminum can. This issue was fixed by startiving over with an entirely aluminum container.
* I tested the control without adding any debounce code, but discovered that due to the nature of the game, a keyboard debounce was not required for the controller.
* I initially had trouble connecting the Arduino as a USB HID device, but following the advice in the slides as well as in [this](https://github.com/arduino/ArduinoCore-samd/releases/tag/1.8.2) thread helped me resolve the issue.
