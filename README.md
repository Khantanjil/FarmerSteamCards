# FarmerSteam V0.1
## Idling the games to get the cards

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/tanjil/farmersteam?key=eyJhbGciOiJIUzI1NiJ9.NWU5OWYxMzQ3ZjczZDcyZmQ1NGU4Yjgx.5yP5JcVolgL_vWAyde5tk32fbZhvo5N6mvjqILjqR6Q&type=cf-1)]( https%3A%2F%2Fg.codefresh.io%2Fpipelines%2Ffarmersteam%2Fbuilds%3Ffilter%3Dtrigger%3Abuild~Build%3Bpipeline%3A5e99f1d8ed3797d2effb66e9~farmersteam)


This is a mini project. The program can serve to farm the games to get cards and farm the hours (optional).

  
## Updates (17/4/2020)

  - Added the prompt input on node.js
  - Added the better output
  
### Usages

This was builded with
* [Node.js]([https://nodejs.org/en/](https://nodejs.org/en/)) - JavaScript runtime environment
* [Prompt]([https://www.npmjs.com/package/prompt](https://www.npmjs.com/package/prompt)) - A beautiful command-line prompt for node.js
* [steam-user]([https://github.com/DoctorMcKay/node-steam-user](https://github.com/DoctorMcKay/node-steam-user)) -  Allows interaction with the Steam network via the Steam client protocol
* 
### Installation (Updated)
To install the following project, you can install with theses steps:
```sh
> git clone https://github.com/Khantanjil/FarmerSteamCards.git

Cloning into 'FarmerSteamCards'...
remote: Enumerating objects: 1108, done.
remote: Counting objects: 100% (1108/1108), done.
remote: Compressing objects: 100% (870/870), done.
remote: Total 1108 (delta 190), reused 1102 (delta 187), pack-reused 0
Receiving objects: 100% (1108/1108), 3.18 MiB | 5.13 MiB/s, done.
Resolving deltas: 100% (190/190), done.

> cd FarmerSteamCards
```
## Running the farmer
Requirements:

You need to have nodejs installed, and you should install it to run the application with the following command
And you need to install npm

```sh
sudo apt install nodejs
sudo apt install npm
npm install prompt
```

Start the application with 
```sh
node idler.js
```
If appears any errors please speak with me on this [discussion](https://github.com/Khantanjil/FarmerSteamCards/issues/1)

## How to use this program
First of all you need to install it, and after, run the program with `node idler.js`
After that you need to pass your credentials (will be safe)
![](https://media.discordapp.net/attachments/700777576192409702/700778852506402846/Screenshot_from_2020-04-17_18-53-40.png)

If you want to change the games and the status, you need to edit the idler.js file on theses lines: 
```js
// Set to offline to not disturbe te others
client.setPersona(SteamUser.EPersonaState.Offline);
// You can change to Online if you want
console.log('Setting to offline status.')
client.gamesPlayed([504130]); // Edit here
console.log("Playing the games and idling cards...")
```
To
```js
// Set to offline to not disturbe te others
client.setPersona(SteamUser.EPersonaState.Online);
// You can change to Online if you want
console.log('Setting to online status.')
client.gamesPlayed([730, 10]); // Edit here
console.log("Playing the games and idling cards...")
```

## How can i view the app game id?
You can go to the [Steam Database]([https://steamdb.info/](https://steamdb.info/)). Search the game of what do you want to farm cards and copy paste the APPID.![enter image description here](https://cdn.discordapp.com/attachments/700777576192409702/700781201782472794/Screenshot_from_2020-04-17_19-54-06.png)


If appears any errors please speak with me on this [discussion](https://github.com/Khantanjil/FarmerSteamCards/issues/1)

![thank you!](https://img.shields.io/badge/say-thanks-ff69b4.svg)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://steamcommunity.com/id/tanjil)

License
----
MIT License

Copyright (c) 2020 Tanjil

Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.
