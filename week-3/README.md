# Week 3: (Unity)

[![ButtonHero Demo](https://github.com/mlk525/fast-fun/blob/main/week-3/BH%20Demo%20Screencap.jpg)](https://github.com/mlk525/fast-fun/blob/main/week-3/ButtonHero%20Trial.mp4)

## Description
I've always been a fan of classic arcade games, so I decided to try and recreate one of my favorites, the popular music rhythm video game series [*Guitar Hero*](https://en.wikipedia.org/wiki/Guitar_Hero). The main objective of the game is to score points by accurately hitting keys corresponding to 3-dimensional falling notes of four colors on four strings (much like the original game, pictured below).

<p align="center">
  <img width="600" src="https://ip.trueachievements.com/remote/download.xbox.com/content/images/66acd000-77fe-1000-9115-d802415607f7/1033/screenlg13.jpg">
</p>

The "note" objects generate randomly in time with the beat of the song I selected (but no color generates consecutively), sliding down the angled platform towards their tab where they can be activated if the player presses the corresponding key (Q, W, E, or R) as they collide with the tab (which, as a trigger, has no physical properties). The displayed score goes up by 2 points for every note that the player hits, and goes down by one for every note they miss.

## Challenges/Discoveries
* Getting the notes to slide down correctly was quite difficult. Eventually I created a new Physics Material with Dynamic and Static Friction set to 0, and Friction Combine set to Minimum. This allowed generated notes to slide smoothly down an inclined track.
* Using objects as a trigger required some stackexchange to fully understand, but discovering the functions OnTriggerEnter and OnTriggerExit were invaluable in terms of keeping score, and in making sure the notes disappeared once they crossed the tabs no matter what.
* Initially generating notes randomly in time with the beat (precalculated, because I knew the BPM of the song), I found that there were issues if too many consecutive notes generated from the same color. This also reduced gameplay satisfaction (personally). So I wrote a short function to generate a random note that wasn't the last note generated.
```	int generateRandom() 
	{
		int randomNumber = Random.Range(0,4);
		while (randomNumber == lastRandomNumber) 
		{
			randomNumber = Random.Range(0,4);
		}
		lastRandomNumber = randomNumber;
		return randomNumber;
	}
  ```
