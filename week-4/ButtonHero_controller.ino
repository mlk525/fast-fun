#include "Keyboard.h"

// set pin numbers for the four buttons:
const int green = 2;
const int red = 3;
const int yellow = 4;
const int blue = 5;

void setup() { // initialize the buttons' inputs:
  pinMode(green, INPUT_PULLUP);
  pinMode(red, INPUT_PULLUP);
  pinMode(yellow, INPUT_PULLUP);
  pinMode(blue, INPUT_PULLUP);

  Serial.begin(9600);
  Keyboard.begin();
}

void loop() {
  // use the pushbuttons to control the keyboard:
  if (digitalRead(green) == LOW) {
    Keyboard.write('q');
  }
  if (digitalRead(red) == LOW) {
    Keyboard.write('w');
  }
  if (digitalRead(yellow) == LOW) {
    Keyboard.write('e');
  }
  if (digitalRead(blue) == LOW) {
    Keyboard.write('r');
  }
}
