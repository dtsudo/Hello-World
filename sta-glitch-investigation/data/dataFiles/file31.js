if (!window.files) window.files = {}; 
window.files['lang/en.json'] = ` 
{
	"main-menu" : {
		"new" : "New Game",
		"load" : "Load Game",
		"contrib-levels" : "Contrib Levels",
		"options" : "Options",
		"credits" : "Credits",
		"quit" : "Quit Game"
	},

	"new-game-menu" : {
		"file-exists" : "[FILE EXISTS]"
	},

	"contrib-menu" : {
		"empty" : "[No contrib levels available]"
	},

	"options-menu" : {
		"difficulty" : "Difficulty",
		"language" : "Language",
		"keyboard" : "Keyboard Controls",
		"joystick" : "Gamepad Controls",
		"timers" : "Speedrun Timers",
		"light" : "Lighting: "
	},

	"timers-menu" : {
		"speedrun-timer-level" : "Level Speedrun Timer",
		"speedrun-timer-global" : "Global Speedrun Timer"
	},

	"controls-menu" : {
		"press-key-for" : "Press key for",
		"press-button-for" : "Press button for",
		"up" : "Up",
		"down" : "Down",
		"left" : "Left",
		"right" : "Right",
		"jump" : "Jump",
		"shoot" : "Shoot",
		"run" : "Run",
		"sneak" : "Sneak",
		"pause" : "Pause",
		"item-swap" : "Item Swap",
		"menu-accept" : "Menu Accept",
		"cam-left-peek" : "Peek Left",
		"cam-right-peek" : "Peek Right",
		"cam-down-peek" : "Peek Down",
		"cam-up-peek" : "Peek Up"
	},

	"menu-commons" : {
		"yes" : "Yes",
		"no" : "No",
		"back" : "Back",
		"cancel" : "Cancel",
		"on" : "On",
		"off" : "Off"
	},

	"bool" : {
		"on" : "On",
		"off" : "Off"
	},

	"difficulty-levels" : {
		"easy" : "Easy",
		"normal" : "Normal",
		"hard" : "Hard",
		"super" : "Super Tux"
	},

	"pause-menu" : {
		"continue" : "Continue",
		"character" : "Change Character",
		"restart" : "Restart Level",
		"quit-game" : "Quit Game",
		"quit-level" : "Quit Level",
		"save" : "Save Game"
	},

	"info" : {
		"welcome" :
		"Welcome to SuperTux Advance! This message will go away when you walk away from the block. Press ~ (tilde) if you would like to see developer commentary. Press UP near NPCs to talk to them. Some have more than one thing to say.",
		"tutWall" :
		"Press JUMP against the wall to do a wall jump.",
		"tutSlide" :
		"Press DOWN while running or on a hill to slide.",
		"waterjump" :
		"Hold JUMP when leaving the water to gain height. Mix it with the RUN button to go even higher.",
		"noend" :
		"Levels that you don't need to complete to move on also do not have normal exits. Use the pause menu to leave areas like this.",
		"hills" :
		"Hills are very important! Practice sliding every chance you get.",
		"pipes" :
		"Pipes can be entered just by falling in. You can also hold DOWN to funnel yourself into them.",
		"controls" :
		"Hello Tux!",
		"secrets" :
		"Secret passages are everywhere! Feel against the wall to reveal them, or watch for enemy movements.",
		"coyotetime" :
		"You have a brief moment after leaving the ground when you can still jump. Practice running off the edges and jumping just after your feet leave the ground.",
		"tntex" :
		"TNT blocks explode a short time after coming in contact with one.",
		"chainex" :
		"TNT blocks are also set off by explosions, which can lead to a sort of chain reaction when many TNT blocks are close to one another.",
		"fireex" :
		"Fireballs can set off TNT blocks, get a fire flower and try it out!",
		"owplats" :
		"One-way platforms can be dropped down from by pressing DOWN and JUMP at once. If you drop on accident, you have twice as long as when going over an edge to jump back up.",
		"slidewarn" :
		"Levels like this will force you to slide! (It's going to be replaced with something else in the future.)",
		"konqi" :
		"Konqi can breath fire and stomp the ground, but he isn't as fast as Tux.",
		"momentum" :
		"You won't lose speed if you keep running! Be sure to hold the run button or keep the stick pressed all the way over, and you'll keep whatever speed you gain from sliding. Icy hills will speed you up even if you can't slide.",
		"warned" :
		"You were warned..."
	},

	"devcom" : {
		"welcome" :
		"KELVIN: If you're seeing this, you have activated developer commentary mode. Touch the red scarves to read notes on the game's development.",
		"hiff-0" :
		"KELVIN: One of the many things that made me hiff was making deathcaps walk up this hill. For whatever reason, having them check twice as far ahead made them behave properly...",
		"pipes" :
		"KELVIN: I was going to have the pipes behave the same as the ones in Mario, but I found it annoying in those games having to tap up/down to find which ones were open, so instead, you just fall in.",
		"firetux" :
		"KELVIN: Originally, Fire Tux was going to have a helmet, as in the original SuperTux. A member of the SuperTux Discord server suggested using the design by Rusty Box. I agreed it looked better. The original can still be found on OpenGameArt.org.",
		"coins" :
		"KELVIN: Coins are purely for achievements. I never liked the extra lives mechanic, as it just means making a player wait even longer to try a level again if they get a game over. I didn't want to get rid of coins entirely, though, since that would make the levels too barren.",
		"sliding" :
		"KELVIN: The mechanic of increasing speed from dropping off a ledge came from needing to compensate for slopes not accelerating the player enough. It's tech- nically a glitch that I decided to throw in because it was fun. Many mechanics are actually that.",
		"trees" :
		"KELVIN: Trees don't grow in Antarctica. That's why penguins carve them out of ice.",
		"snakes" :
		"KELVIN: I know it makes about as much sense to have snakes in Antarctica as it does to have hungry plants. ",
		"waterfalls" :
		"KELVIN: This part of the cave looks especially nice to me. I love the spacious background with waterfalls in front of it. I wanted the level to feel like you were meant to explore it, so a scene like this that makes it feel big is meant to convey a sense of exploration.",
		"loops" :
		"KELVIN: Sorry, did you expect this loop to work? Ha! I'm nowhere near good enough to program that... yet.",
		"contrib" :
		"FROSTC: hello! this is the first dev commentary not written by kelvin, as this is the first contrib level.",
		"walldev" :
		"FROSTC: I didn't actually know you could just wall jump to get up here when I first made this area. I later thought of adding something to keep you from doing that, but decided against it",
		"tnt" :
		"FROSTC: I saw that TNT was used in Xtreme hills, so I decided to make a level showing it off. Also, fun fact, this level was competed before subsea",
		"trans" :
		"FROSTC: It took me a good while to get the background transition to work, as this was for the most part the first time I used triggers.",
		"lifenote" :
		"FROSTC: For those who played the older versions, I hope you like the all new, much harder 1-up position! Hahahahahaha!!",
		"signnote" :
		"FROSTC: If you are feeling a little lazy, you can just blast the pipe with a fireball to open it instead of sliding. Maybe a good speedrunning strat??",
		"sense":
		"FROSTC: My 3rd level, just wanted to make a level losely inspired off of Grumbel's Sense of Snow from the classic SuperTux. The funny part is that level isn't even in modern versions of the classic SuperTux!",
		"subsea" :
		"KELVIN: I wasn't sure how I wanted to handle underwater levels at first. I thought of the levels from SMB 1 and 3, but they seemed like something Tux could just shoot right through. Then I remembered DKC's underwater levels, how they were more like mazes where you had to dodge dangerous enemies. I figured that would work well for this game, since Tux is fast under water, and Konqi and Midi retain offensive capabilities in their neutral forms.",
		"subsea-name" :
		"KELVIN: The name, Subsea, comes from the track of the same name in SuperTuxKart. I was thinking it'd be cool to take areas from that game and reimagine them as platform levels instead of kart tracks. Candela City is planned as well, and the final level where you fight Nolok will be Fort Magma. Others from STK may appear as well.",
		"tutorial-zone" :
		"KELVIN: After getting some playtest feedback from Aurora Sol, I decided I should make this tutorial area to more clearly demonstrate basic mechanics. In his playtest, he actually skipped the first pipe, despite it having a sign hinting there's something about it, which led to him skipping the spot to learn swimming, too. Sliding places weren't clearly marked, either, and were also missed. This area won't let you progress until you've learned each mechanic, but can still be skipped if you already know the basics.",
		"speedrunex":
		"FROSTC: I had designed this level with the intention of people speedrunning it, so see how fast you can beat it! ",
		"secretredex":
		"FROSTC: The current version of this secret is very diffrent compared to how it used to be. One diffrence is that it used to have a bend in it. however I couldn't get that to work properly, that being the reason I scrapped it.",
		"fishex":
		"FROSTC: Just like Tux 'N' Trouble, this level was made before some of the earlier levels were added.",
		"mezex":
		"FROSTC: I had to make a few custom tiles to make this maze look good. It was worth it, I think! It's for sure the best part of this level.",
		"outage":
		"FROSTC: this level was completly diffrent in earlier versions. you can find the old version in the extras world",
		"oldxtreme":
		"KELVIN: In previous versions of this level, the prize for getting all the coins was a powerup that isn't formally introduced until a few levels later. I thought it would be fun to earn the chance to break levels, but the design of them actually makes the powerup not as fun to use as I'd hoped. I instead decided to set up a collectible that could unlock new content later on.",
		"fort-0":
		"KELVIN: I wanted to teach players right away that if they wanted rewards, they had to take risks, so I put these coins over a fire chain. There's an even trickier secret in this room that's also risky.",
		"fort-1":
		"KELVIN: The sawblades here were originally the first challenge, but then I realized I was making players not only take one of the harder challenges first, but also leading them in a straight line down. Switching the order of the challenges made the learning curve a bit easier, and also make the map feel more metroidvania-like.",
		"fort-2":
		"KELVIN: I knew some players would come here with the earth shell, which makes the challenge for the gold key much harder, if not impossible. I added a room with a fire flower to make swimming easier without depowering the player. Placing it behind a silver lock, the same lock leading to the next challenge, means they'll have a chance to reach it when they need it.",
		"fort-3":
		"KELVIN: I really wanted a section where players would get chased by something indestructible. Messing around with fire chains, I found I could put four in one place to make them look like a wheel. Attaching them to my new path carriers makes them able to roll around just above the player's top speed makes this scene tense but manageable.",
		"fort-4":
		"KELVIN: I plan to revisit underwater sections in the future with spike mazes like this, but after using a giant fire chain in a secret treasure room, I thought it was too good not to use in one of the key challenges.",
		"fort-5":
		"KELVIN: Welcome to the freezer, the final platforming challenge for Fort Borealis. Given that this is the last level of the ice world, I wanted to give it a good, cold sendoff. Don't worry, ice tiles will be used again, but I wanted to test the player a bit harder with these.",
		"fort-6":
		"KELVIN: Checkpoints used to be just that, checkpoints. They didn't do anything but save your progress in a level. But with a level like this being so long, and health drops being a rare thing given that the game had been designed with short levels in mind up until now, I needed to give players a way to heal after long stretches. Since checkpoints are already a welcome sight to players, I decided to make them even more welcoming.",
		"fort-7":
		"KELVIN: This is it, the first boss of the game. Up until now, it's all been single-hit enemies and stage hazards. He hasn't been implemented yet, but I can't wait to see what I come up with for him.",
		"fort-8":
		"KELVIN: OK, I'll admit, I was just going crazy with this. I wanted to see if multiple ring carriers could be nested, and then I stuck the result onto a path carrier. The result is a storm of coins! One layer of slime later, and here we are. Have fun!",
		"sunken":
		"FROSTC: My original idea for this level was to have a gimmick where there's patches of deep snow that tux can talk or maybe even through. sorta like the powered snow from... the game minetest is based off of? Can I say that name here?..",
		"continue":
		"FROSTC: This was where kelvins part ends, and where mine starts. do keep in mind I also touched up some part of kelvin's section. (you can find the old version in the extras world) ",
		"secret-sunk":
		"FROSTC: If I were you, I would keep an eye out for little dent in the land like this. they often lead to secrets."
	},

	"npc" : {
		"null" : "",
		"rad-0t" :
		"Hey, where's your board? Are you gonna slide on your belly like a square? I bet you couldn't get every coin on this hill like that. If you do, I'll give ya something that'll really help you catch some air!",
		"rad-0k" :
		"Hey, where's your board? You look way too slow for a course like this!",
		"rad-0m" :
		"Are you gonna use that ball of yourse for this course? Good luck.",
		"rad-0d" :
		"Get all the coins on this hill if you want a totally nautical prize!",
		"penny-0t" :
		"Oh, Tux! I'm so happy to see you! Nolok has kidnapped our friends! Last I heard, they were being taken to his forts all around the world. I wish I knew why. Please save them, Tux!",
		"penny-0k" :
		"Konqi! It's so good to see you! I'm sure Plasma Breeze is fine. Please help Tux. I know you two can beat Nolok together!",
		"penny-0m" :
		"So you're Midi. I've heard you're quite a capable fighter. I'm so glad to hear you're helping Tux. I'll be sure to reward you well.",
		"penny-0d" :
		"Pleased to meet you. Are you helping Tux save our friends? I'm so happy to hear that.",
		"rad-t0t" :
		"Yo, Tux! Mayor Penny is looking for ya. By the way, catch me on the slopes sometime. I wanna see if you live up to your rep as a snow racer.",
		"rad-t0k" :
		"Hey, you're Konqi, right? Man, watch the fire around here. Doesn't really mix well with ice, ya feel me?",
		"rad-t0m" :
		"What's a squirrel doing this far south? Ain't it too cold for ya? Get inside before ya freeze your fuzzy little toes off, heheh.",
		"rad-t0d" :
		"Whoa, new face. I dunno about you. If you're looking for Mayor Penny, she's in the big igloo in the middle of town. I like to call it the bigloo. Ha ha!",
		"xue-c" :
		"Thanks for saving me, chu! I'll see you back in Pennyton!",
		"xue-pt-t" :
		"Next time I see that Nolok, I'll give him a face full of exploding cupcakes! That'll teach him for messing with us, chu!",
		"xue-pt-k" :
		"Hey, Konqi! Give Nolok a good torching when you see him! No one messes with us, on or off the kart track, chu!",
		"xue-pt-m" :
		"Whoa, a fellow rodent who also likes explosions! (And pretty cute, chu...) Whah? N-nothing, chu! I, uh, was wondering if you'd like to go cart racing! N-not as a date or anything! (Shut up, Xue, shut up!)",
		"xue-pt-d" :
		"Thanks for your help, chu! Let's really stick it to Nolok so he never messes with us again!",
		"fireguin-0" :
		"Not much use for a firefighter here, huh? Ice can melt, sure, but it takes the fire out with it, and then we just put new ice in.",
		"fireguin-1" :
		"Maybe I'd be better off in a town with wood houses. Hard to find wood out here, so even the trees are made of ice!",
		"fireguin-2" :
		"A lot of the houses here are empty. I'm sure our friends will return once they're safe from Nolok.",
		"fireguin-3" :
		"Blocks of weak, uncompacted ice will melt if you hit them with a fireball. You can also break them by sliding.",
		"fireguin-4" :
		"Look out for thin ice! It'll break if you stand on it too long.",
		"fireguin-5" :
		"If you need to brush up on your skills, head to the obstacle course just outside of town. You'll find it to the right from here.",
		"konqi-c" :
		"Hey, thanks for getting me out of here. I got caught trying to find Plasma Breeze. I hope she's alright. Nolok's probably got her in another fort. I'll join you to help get her back!",
		"rocky-c" :
		"Alright, I'm saved! Man, Nolok is the kind of trash even I wouldn't wanna touch. Good luck against him!",
		"rocky-pt-t" :
		"Hey, Tux! Catch me later. I'll buy ya a fish.",
		"rocky-pt-k" :
		"Nolok's a crocodile, right? Man, I hope your scales are harder than his. I'd hate to be chomped by that guy!",
		"rocky-pt-m" :
		"You remind me of me. Small, fast, good at picking up garbage. You're braver than me, though. Show Nolok no mercy!",
		"rocky-pt-d" :
		"Yeah, this place is pretty cold, but it's a lot safer. The worst of Nolok's minions are on the mainland and other areas, so I'm gonna stay in Pennyton for now.",
		"python-c" :
		"Thankssss for the sssave! I'll ssssee you back in town.",
		"python-pt-t" :
		"Hey there Tuxss. I hope it'ssss sssafe to go back home sssoon. I'm freezing here!",
		"python-pt-k" :
		"Any chance you should usssse that flame of yoursss on me? I'm sssso cold here...",
		"python-pt-m" :
		"I wish you and Xue would ssstop looking at me like that. Even if I got hungry, I wouldn't consssider either of you a sssnack!",
		"python-pt-d" :
		"I sssure hope you're better with the cold than I am. No wonder Nolok hatesss thisss place.",
		"garuda-c" :
		"Alright! Thanks for getting rid of that guy! I can't wait to get out of this place and stretch my wings again.",
		"garuda-pt-t" :
		"I used to feel sorry for penguins not being able to fly, but then I saw the way they move under water. Their swimming is just like flying!",
		"garuda-pt-k" :
		"I hear dragons love gold as much as gryphons do. Lucky for us, there's lots of coins around! I wonder what makes them float, though...",
		"garuda-pt-m" :
		"You use bombs, eh? I bet if I carried you, we could make a great aerial strike team! Except... I'm afraid I'll get shot down again. That's how Nolok caught me the first time.",
		"garuda-pt-d" :
		"Thanks for your help. It feels so good being able to fly again.",
		"breeze-c-k" :
		"Konqi! I knew you'd come for me! I'm so happy to see you! Let's get out of here! I'll be right behind you.",
		"breeze-c-d" :
		"Thanks for getting me out of here. I'll head back to Pennyton. Kick Nolok's flank for me!",
		"breeze-pt-t" :
		"Aww, you're such a cute little penguin! I know a mare who's really good with birds. You'd probably like her.",
		"breeze-pt-k" :
		"I'm always happy to see you, Konqi! Good luck against Nolok. I'll be rooting for you the loudest!",
		"breeze-pt-m" :
		"Your magic is really unusual. I've never seen a nut bomb spell before. And that ball too... oh, that's not magic? Strange.",
		"breeze-pt-d" :
		"It'll take all kinds to defeat Nolok. I'm glad to have you on our side.",
		"gnu-c" :
		"I regret getting captured by Nolok once more. Thank you for releasing me.",
		"gnu-pt-0" :
		"It is good to excel, but better to do so with vim.",
		"gnu-pt-1" :
		"A pacman frog is an apt hunter.",
		"gnu-pt-2" :
		"True freedom is found by blazing a gnu trail.",
		"gnu-pt-3" :
		"Some mysteries are solved by finding prints, others by making them.",
		"gnu-pt-4" :
		"When walking with a fork, thread lightly.",
		"gnu-pt-5" :
		"Don't use a cat if you could do more or less.",
		"gnu-pt-6" :
		"If the info doesn't work for you, man up.",
		"gnu-pt-7" :
		"007 has all the permissions you'd need.",
		"gnu-pt-8" :
		"That young guin, Rad, has such spirit. He lives life to Emacs.",
		"gnu-pt-9" :
		"If you see nothing but zeros, remember, the dev'null's in the details.",
		"gnu-pt-10" :
		"Before you can push on, you must be committed.",
		"gnu-pt-11" :
		"Wisdom compiled from many sources makes a plan executable.",
		"midi-c" :
		"Yo! I was just minding my own business, and these weird mushroom things started swarming me. I'm sick of sitting around in here. How's about I join ya and kick that Nolok guy's tail?",
		"sam-0" :
		"Plenty of adventure gear at fair... wait, you're fighting Nolok? Let me help. Take whatever you need, no charge.",
		"sam-1" :
		"Don't get me wrong, gold's great, but it's just so common. I can't imagine having to carry that much around to use as money!",
		"sam-2" :
		"You think us overworlders love emeralds? Try even letting a hedgehog near them!",
		"sam-3" :
		"Yeah, I dug for and crafted all these items, and now I sell them. So what does my boss do to earn his cut? He owns the company!",
		"sam-4" :
		"Can you believe the guy who does the least work gets the most money? What a world we live in. I say let him pay for your saving-the-world items!",
		"sam-5" :
		"While we're on the subject of money, this game we're in? Totally free, even to edit and sell what you make. So please, consider donating to the people who worked on it!",
		"tuckles-0" :
		"Even in the ice, it's easy to work up a sweat down here.",
		"tuckles-1" :
		"Why fish for fish, when you can mine it from the ice? That's what I'm here for!",
		"tuckles-2" :
		"Lift fish and eat weights!... No, hang on.",
		"tuckles-3" :
		"If you wanna get strong, you gotta get strong. If you wanna get big, you gotta get big. If you wanna get tough, you gotta get tough.",
		"tuckles-4" :
		"The key to the best hugs is big muscles and a soft belly. Fish'll give ya both!",
		"tuckles-5" :
		"All those muffins you eat can't compare to the fish we mine. They're bigger, stronger, and more delicious.",
		"tuckles-6" :
		"Have you seen Duke? He likes to get fish the lazy way: by pretending his rod's broken and bumming fish off others. I'd ignore him if he wasn't able to block roads just by sitting on them."
	},

	"level" : {
		"shop" : "Sam's Trade Post",
		"overworld-0" : "Aurora Isles",
		"overworld-1" : "Antarctica",
		"0-t0" : "Pennyton",
		"0-t1" : "Fish Mines",
		"0-0" : "Learning the Slopes",
		"0-1" : "Crystal Pass",
		"0-2" : "Slip and Slide",
		"0-3" : "Subsea",
		"0-4" : "Tux 'N' Trouble",
		"0-5" : "Frost's Sense of Snow",
		"0-6a" : "Frozen Paradise",
		"0-6b" : "Branching Path",
		"0-7" : "The Ocean Bridge",
		"0-8" : "Artic Wind",
		"0-9" : "Guarded Steps",
		"0-x" : "Xtreme Hills",
		"0-c" : "Fort Borealis",
		"0-s" : "Red Switch Trial"
	},

	"key" : {
		"0" : "_0",
		"1" : "_1",
		"2" : "_2",
		"3" : "_3",
		"4" : "A",
		"5" : "B",
		"6" : "C",
		"7" : "D",
		"8" : "E",
		"9" : "F",
		"10" : "G",
		"11" : "H",
		"12" : "I",
		"13" : "J",
		"14" : "K",
		"15" : "L",
		"16" : "M",
		"17" : "N",
		"18" : "O",
		"19" : "P",
		"20" : "Q",
		"21" : "R",
		"22" : "S",
		"23" : "T",
		"24" : "U",
		"25" : "V",
		"26" : "W",
		"27" : "X",
		"28" : "Y",
		"29" : "Z",
		"30" : "1",
		"31" : "2",
		"32" : "3",
		"33" : "4",
		"34" : "5",
		"35" : "6",
		"36" : "7",
		"37" : "8",
		"38" : "9",
		"39" : "0",
		"40" : "Enter",
		"41" : "Escape",
		"42" : "Backspace",
		"43" : "Tab",
		"44" : "Space",
		"45" : "-",
		"46" : "=",
		"47" : "[",
		"48" : "]",
		"49" : "\\\\",
		"50" : "/",
		"51" : ";",
		"52" : "'",
		"53" : "\`",
		"54" : ",",
		"55" : ".",
		"56" : "/",
		"57" : "CAP",
		"58" : "F1",
		"59" : "F2",
		"60" : "F3",
		"61" : "F4",
		"62" : "F5",
		"63" : "F6",
		"64" : "F7",
		"65" : "F8",
		"66" : "F9",
		"67" : "F10",
		"68" : "F11",
		"69" : "F12",
		"70" : "Print",
		"71" : "Scroll",
		"72" : "Pause",
		"73" : "Insert",
		"74" : "Home",
		"75" : "Pg Up",
		"76" : "Delete",
		"77" : "End",
		"78" : "Pg Down",
		"79" : "Right",
		"80" : "Left",
		"81" : "Down",
		"82" : "Up",
		"83" : "Num",
		"84" : "#/",
		"85" : "#*",
		"86" : "#-",
		"87" : "#+",
		"88" : "#Ent",
		"89" : "#1",
		"90" : "#2",
		"91" : "#3",
		"92" : "#4",
		"93" : "#5",
		"94" : "#6",
		"95" : "#7",
		"96" : "#8",
		"97" : "#9",
		"98" : "#0",
		"99" : "#.",
		"100" : "\\\\",
		"101" : "App",
		"102" : "Pow",
		"103" : "#=",
		"104" : "F13",
		"105" : "F14",
		"106" : "F15",
		"107" : "F16",
		"108" : "F17",
		"109" : "F18",
		"110" : "F19",
		"111" : "F20",
		"112" : "F21",
		"113" : "F22",
		"114" : "F23",
		"115" : "F24",
		"116" : "Exe",
		"117" : "Help",
		"118" : "Menu",
		"119" : "Select",
		"120" : "Stop",
		"121" : "Again",
		"122" : "Undo",
		"123" : "Cut",
		"124" : "Copy",
		"125" : "Paste",
		"126" : "Find",
		"127" : "Mute",
		"128" : "Vol Up",
		"129" : "Vol Down",
		"130" : "#,",
		"131" : "#=400",
		"132" : "",
		"133" : "",
		"134" : "",
		"135" : "",
		"136" : "",
		"137" : "",
		"138" : "",
		"139" : "",
		"140" : "",
		"141" : "",
		"142" : "",
		"143" : "",
		"144" : "",
		"145" : "",
		"146" : "",
		"147" : "",
		"148" : "",
		"149" : "",
		"150" : "",
		"151" : "",
		"152" : "",
		"153" : "",
		"154" : "",
		"155" : "",
		"156" : "",
		"157" : "",
		"158" : "",
		"159" : "",
		"160" : "",
		"161" : "",
		"162" : "",
		"163" : "",
		"164" : "",
		"165" : "",
		"166" : "",
		"167" : "",
		"168" : "",
		"169" : "",
		"170" : "",
		"171" : "",
		"172" : "",
		"173" : "",
		"174" : "",
		"175" : "",
		"176" : "",
		"177" : "",
		"178" : "",
		"179" : "",
		"180" : "",
		"181" : "",
		"182" : "",
		"183" : "",
		"184" : "",
		"185" : "",
		"186" : "",
		"187" : "",
		"188" : "",
		"189" : "",
		"190" : "",
		"191" : "",
		"192" : "",
		"193" : "",
		"194" : "",
		"195" : "",
		"196" : "",
		"197" : "",
		"198" : "",
		"199" : "",
		"200" : "",
		"201" : "",
		"202" : "",
		"203" : "",
		"204" : "",
		"205" : "",
		"206" : "",
		"207" : "",
		"208" : "",
		"209" : "",
		"210" : "",
		"211" : "",
		"212" : "",
		"213" : "",
		"214" : "",
		"215" : "",
		"216" : "",
		"217" : "",
		"218" : "",
		"219" : "",
		"220" : "",
		"221" : "",
		"222" : "",
		"223" : "",
		"224" : "L Ctrl",
		"225" : "L Shift",
		"226" : "L Alt",
		"227" : "L Super",
		"228" : "R Ctrl",
		"229" : "R Shift",
		"230" : "R Alt",
		"231" : "R Super",
		"232" : "Menu",
		"233" : "",
		"234" : "",
		"235" : "",
		"236" : "",
		"237" : "",
		"238" : "",
		"239" : "",
		"240" : "",
		"241" : "",

		"257" : "Mode",
		"258" : "Next Track",
		"259" : "Previous Track",
		"260" : "Stop",
		"261" : "Play/Pause",
		"262" : "Mute",
		"263" : "Media Select",
		"264" : "WWW",
		"265" : "Mail",
		"266" : "Calculator",
		"267" : "Computer",
		"268" : "AC Search",
		"269" : "AC Home",
		"270" : "AC Back",
		"271" : "AC Forward",
		"272" : "AC Stop",
		"273" : "AC Refresh",
		"274" : "AC Bookmarks",
		"275" : "Brightness Up",
		"276" : "Brightness Down",
		"277" : "Display Switch",
		"278" : "Keyboard Light",
		"279" : "Keyboard Brightness Up",
		"280" : "Keyboard Brightness Down",
		"281" : "Eject",
		"282" : "Sleep",
		"283" : "Wake Up",
		"284" : "???"
	}
}
`; 

 window.superTuxAdvanceWebVersion.simulatedFileSystem.addFile('lang/en.json', ''); 