# A-Frame Campfire Scene
This is a virtual reality experience of being at a nighttime campfire using A-Frame! I've always liked the idea of camping, but never go because of all the bugs, but now you can enjoy the perfect summer night in virtual reality	:smile:

## Overview
I wanted to create something that was immersive using simple controls and functions. This is a very important concept to grasp when designing for virtual reality. From the sound to the visual elements, many details need to be considered to create a believable virtual world. A campfire was a good way of creating an experience that familiar to reality, while resembling a fun hangout with others.

<img width="400" alt="Home" src="https://user-images.githubusercontent.com/47696964/152691273-a317b993-e42d-4dee-880a-39db6cb324d1.PNG"> <img width="400" alt="sho1 1" src="https://user-images.githubusercontent.com/47696964/152691286-f0185d3a-ab82-42f5-b8a9-b20fc4f13876.PNG">
<img width="400" alt="shot2" src="https://user-images.githubusercontent.com/47696964/152691290-4229ffaf-3b9f-4882-a0f4-697ad2088b5e.PNG"> <img width="400" alt="shot3" src="https://user-images.githubusercontent.com/47696964/152691292-fa49d277-88f1-4d4d-a381-c7ea1ceb9260.PNG">

The controls required for each type of device can be found below:

| Version | Controls |
| --- | --- |
| `Desktop` | **Move**: WASD on keyboard<br/>**Grab**: Hover over log, hold LMB to grab<br>**Drop**: Release LMB<br>**Instantiate/Destory**: Hover over button, click with LMB |
| `Mobile` | **Move**: Hold finger on screen<br/>**Grab**: Hold finger on log<br>**Drop**: Release finger from screen<br>**Instantiate/Destory**: Tap on button with finger<br>*Note*: The direction where you pick the log will be the same as your movement |
| `Oculus` | **Move**: Physically move body in desired direction (alternative: use left hand joystick)<br/>**Grab**: Hover over log, hold A to grab<br>**Drop**: Release A<br>**Instantiate/Destory**: Hover over button, click with A |

### Instructions for use:

1. Download this project.
2. Open project folder in Visual Studio Code
3. Open a new terminal
4. Initialize via npm
```html
  npm init
```
5. Install via npm
```html
  npm install
```
6. Connect to app.js
```html
  node .\app.js
```
7. Type URL in browser
```html
  localhost:8080
```

## Challenges
One of the largest challenges I faced when completing this project was making it work on multiple devices. I learned that the scaling in the Oculus headset was much different than what was seen on desktop and it took a lot of tedious changes to make the headset version feel realistic. I considered having only one webpage that would be compatible across all types of devices (desktop, mobile, & headset), but because of the proportion issue, I ended up doing a workaround where I made a new webpage specifically designed for Oculus headset users. I almost like this idea better now because the homepage clearly indicates who can use it based on what platform they have rather than having the user infer what they can and can’t do. 

## Successes
During this project, when there were many instances where I faced an issue, I was almost always able to find a solution. For a long time, I was stuck on not being able to turn the campfire on and off with one button. After a couple of sleepless nights and lots of research, I was able to make it work! I used a combination of the in-class code and the fire algorithm by [Dirk Krause](https://medium.com/@dirkk/campfire-vr-fa654d15e92a) to help me out. This has taught me a lot on how I can manipulate code to make it work for my purpose based on what is already out there. It’s just a matter of understanding how it works, even if it takes running one line at a time to see what it does. It really helps to make your own program more efficient and functional.
