# Week 11: Multi-Device Game & Network Map

## Concept
I envision a first-person survival adventure game, tentatively titled 'Curiosity', where players take on the role of an astronaut stranded in a research station on Mars. Their only means of communication is a control terminal connecting them to mission control on Earth. With virtual reality control the astronaut is able to explore the planet (specifically the Gale crater) through the eye of the Curiosity rover, replenishing dwindling supplies and uncovering clues about what stranded them at the base. And with no news of a rescue mission and the rover being stalked by a shadowy figure, the astronaut's time is running out.

A point-and-click game while looking around the base, the game transforms into a first-person VR gaming experience when the player takes control of Curiosity. With an accelerometer attached to the VR viewer, the rover turns when you turn; move your hand forward, and it moves with you. Simple hand gestures involving a glove with conductive fabric will allow the player to interact with the rover's environment.

## Technology Required
Ideally, this would be a PC-mobile combined game, but for player convenience mobile-only might be a better choice. The phone would also need to be VR compatible for the Curiosity-control segments of the game. A base level smartphone would be something like the [Samsung Galaxy A series](https://www.bestbuy.com/site/tracfone-tracfone-samsung-galaxy-a12-32gb-prepaid-black/6477120.p?skuId=6477120), averaging around $150. A low-budget VR viewer like the Google Cardboard ([about $11](https://www.walmart.com/ip/Google-Cardboard-VR-Headsets-3D-Box-Virtual-Reality-Glasses-with-Big-Clear-3D-Optical-Lens/839299708) and a 3-axis accelerometer ([also $11](https://store-usa.arduino.cc/products/grove-3-axis-digital-accelerometer-16g)) are also musts, not to mention the actual Arduino ([$20 range](https://store-usa.arduino.cc/products/arduino-nano-33-iot?selectedStore=us)). In order to facilitate OSC communication (the primary means of communication for this project), we'll need a portable WiFi router ([$30-40](https://www.amazon.com/GL-iNet-GL-AR300M16-Ext-Pre-Installed-Performance-Programmable/dp/B07794JRC5/)). Other miscellaneous materials required would include a glove, conductive fabric, and wires.

## Network Map
The main information being communicated is the player's angle of rotation, their speed (forward or backward), and any commands given to the Curiosity rover. All of these will be communicated through OSC from the Arduino to the game running on the mobile phone (through separate OSC messages maybe?). If a PC is involved, the main game would be hosted on it with the phone only in use for the rover excursions.

<p align="center">
  <img width="600" src="/network-map.jpg">
</p>
