# Week 7: (Next Iteration of Controller) Air Guitar Hero

[![ButtonHero Demo](https://github.com/mlk525/fast-fun/blob/main/week-3/BH%20Demo%20Screencap.jpg)](https://github.com/mlk525/fast-fun/blob/main/week-3/)
Click the screencap to see documentation for the Unity game prototype these controllers are meant for.

## Description
As I discussed during the prototype questions session, I wanted my next controller iteration to be a wearable controller to simulate the act of playing "air guitar".

<p align="center">
  <img width="600" src="https://iheartlocalmusic.com/wp-content/uploads/2019/06/eDSC06587.jpg">
</p>

Maybe not quite as enthusiastically as that guy.

I started with a winter glove I already had and the twisted wires I salvaged from Prof. Dominic's collection. I hand-stitched the wires to the glove (making sure not to sew the glove shut by filling it with stationery), with one wire for each finger (each "button") and a wire connecting to the palm for the ground connection.

<p align="center">
  <img width="600" src="https://github.com/mlk525/fast-fun/blob/main/week-9/wire_attach.jpg">
</p>

The ideal contacts would flex with the fabric of the glove, so using the materials generously provided by Prof. Dominic, I loosely stitched a large piece of conductive fabric to the glove's palm, and smaller squares to the tops of each finger. I decided where to sew these contacts after "play testing" the game with just a glove. I marked the areas where my fingers touched my palm, and after doing the same with a couple of friends, marked out an average area of contact for each finger and the palm. The placements aren't perfect, but by testing each "finger-down" connection with a multimeter, I was reasonably satisfied to move forward.

<p align="center">
  <img width="600" src="https://github.com/mlk525/fast-fun/blob/main/week-9/fabric_attach.jpg">
</p>

The completed glove, though definitely very prototype-y in aesthetic, had exactly the kind of play-feel I was aiming for. I only conducted brief play testing, but it became evident that frequent guitar and air guitar players adapted to the controller much faster than people with little to no experience with the real life instrument. The connections aren't exactly rock solid, but for a quick prototype constructed with no manufacturing machines (or sewing machines) of any kind, it held up much better than I expected it to.

<p align="center">
  <p float="left">
    <img src="https://github.com/mlk525/fast-fun/blob/main/week-9/fronthand.jpg" width="500" />
    <img src="https://github.com/mlk525/fast-fun/blob/main/week-9/backhand.jpg" width="500" /> 
  </p>
</p>

I'm hoping to make the next iteration of this controller wireless, but my main priority is adding a strumming mechanic. I've decided on attempting to use the accelerometer sensor of the LSM6DS3 module on the board to detect strumming, but as for how each glove (the design will require two gloves) will be wired to each other, I'm yet to see what works best. Direct wiring is not necessarily a bad option, demonstrated by existing controllers for popular consoles that use wired, two-handed controllers. Since these designs will be prototypes, I'm also not sure how I will securely attach a breadboard to the back of a glove. Another option is continuing to use only one glove, but requiring a different motion for the accelerometer to register strumming.

## Challenges/Discoveries
* I was unable to use the conductive thread, because the eye of the sewing needle I have on hand is not big enough to thread it; The conductive thread is also hard to stitch through the conductive fabric.
* The wire attached to the ground patch on the palm keeps coming lose, even after the application of duct tape. I'm not sure how to fix this short of hot glue on the fabric, which isn't an ideal solution either.
* The wires connected to the tops of the fingers are a bit too stiff to allow full flexibility; my ideal glove design would involve finger caps connected by flexible plastic (or some soft material) to a fingerless glove, but I'm not sure how to achieve this.
* One type of conductive fabric (the one I used for the palm) is considerably stiffer than the other.
