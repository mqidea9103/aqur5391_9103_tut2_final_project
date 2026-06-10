# README: aqur5391_9103_tut2_final_project
IDEA9103 Final Assignment Project Repository - **UNIKEY: AQUR5391**, Tutorial 2

<br>
<br>

#
## Project Inspiration


For my main approach of recreating the artwork and making it an **emotional balance challenge**, my overall inspiration was just **human life**. Even though __*The Scream*__ was created a long time ago, I think the **emotional distress** depicted in the screaming figure is something people in any age could **relate to**. 

In **today’s world**, I think that a lot of people become **distressed** in a different way to earlier times, because there isn’t as much **distinct separation** of the **different facets of life**. People are expected to **always** be **‘connected’** to family, friends, education, and work. So no matter where you go, or what time of day/night it is, **you end up carrying all of those different parts of your life with you everywhere**, on your personal devices. 

For a lot of people, their **phones** are the **first thing** they look at **when they wake up** in the morning and the **last thing** they look at **at night**. So I wanted to give the **‘emotionally unbalanced’ animations** a sort of **technical glitch** type of appearance or feeling. 

This also leads into the idea of **emotionally balancing the image**. In real life, people often **struggle to find balance** in their lives: personal, relational, professional, etc., and **focusing** all your efforts on **one aspect** of life means that the **other aspects will likely be affected detrimentally** in some way. 

I made the **challenge incorporate this** so that you have to focus on **balancing all 4 values at once**, or you will not be able to complete the challenge. 

Life, at least in Western society, is also **very fast paced**. If you **take a break** from things, you are likely to end up in a position where you’ve **fallen behind** others (in a **professional/educational** sense), or have been **left behind** by others (in a **personal/relational** sense). 

To **incorporate this kind of feeling** in the challenge, I designed it so that the **user must press all 4 keys very _quickly and repeatedly_** in order to be able to reach the emotionally balanced state, **otherwise the image will fall out of balance** and appear **chaotic** again.

I tried to make the **main ‘emotionally unbalanced’ colour** be green, which is a colour often **associated with computers/technology** in popular culture (for example, in films/tv series, hackers are often depicted as writing **code in green text on black screens**). I used **purple** as well because it is a [**complementary colour to green**](https://color.adobe.com/create/color-wheel). I specifically chose to use purple for the water section of the artwork, to give it a sort of 'toxic' look, inspired by the [__'poison' effects in Pokemon video games__](https://gamerant.com/pokemon-everything-about-poison-status-condition/). For the **emotionally balanced state**, I tried to make **blue be the main colour**, as blue is often [**associated with feelings of calm**](https://www.adobe.com/au/creativecloud/design/discover/color-meaning.html).

I also think a lot of people might relate to __*The Scream*__ through the [**screaming face emoji:** 😱](https://emojipedia.org/face-screaming-in-fear#emoji). I therefore tried to **highlight the eyes and mouth** of the screaming figure, when it is at a **high level of emotional unbalance**, to make them appear **similar to that emoji**.

In terms of **certain visual effects**, I drew inspiration from **game and animation works** I enjoy. The **sparkles and glow effects** were inspired by [**Pokemon Scarlet and Violet**](https://scarletviolet.pokemon.com/en-au/trainers-guide/the-terastal-phenomenon/), [**Pokemon Horizons**](https://screenrant.com/pokemon-horizons-scarlet-violet-terastallize-mechanic/), and [**Frozen 2**](https://www.youtube.com/watch?v=Ex0h7s56iuk). The **red eyes of the screaming figure** were inspired by [**Pokemon Legends Arceus**](https://www.gamerguides.com/pokemon-legends-arceus/guide/gameplay/whats-new/what-are-alpha-pokemon).

In a more **technical sense**, my inspiration for using a **masking image** to **separate the different sections** of the artwork (to prepare them for animation) comes from my **experience in digital art**. It is common practice in digital drawing/painting to have **masking layers** for completing tasks such as **separating sections for colouring**. To me it was intuitive to extend this kind of approach to separating the different sections of _The Scream_ for **modular animation**.



<br>
<br>
<br>


#
## TECHNIQUES

### P5 techniques I implemented in this project include:

<br>

- **Object oriented programming**: for **modular, easier to read and understand** code

<br>

- **P5 event functions**: I used **built in methods** to easily make use of **user input**

<br>

- **Transformations**: to make **unique movements** of **specific parts of the artwork** at certain points in the program

<br>

- **Linear interpolation**: to make **movements and changes** within the animation **happen smoothly** rather than disjointedly or abruptly

<br>

- **Sin and cos waves**: to **add motion** to the artwork that **flows** in a **visually natural** way

<br>

- **Randomness**: to create **more interesting animations** that are **not too repetitive**

<br>

- **Perlin noise**: for the same reason as randomness but to do so in a way that is **less messy and more aesthetically appealing**

<br>

- **Value mapping**: as it allows for **more variation within animations**, and can also make them appear **more aesthetically balanced**

<br>


### How does the code work?
When the program **begins**, **two image files are loaded**. One file is the **main file: The Scream artwork**, the other is a **masked version of The Scream**. The canvas is **divided into an array of rectangular image segments**. Every segment uses a sample colour from both of the images. The **colour from the main image** is used as a starting point to **determine that segment’s colour**. The colour from the **masked image** is used to **determine which group that segment belongs to**: for example does it belong to the sky, water, or bridge part of the image? The reason for the **masking sorting** is so that the **different parts of the image can be animated separately**.

Once the program is started, the **user is able to interact with it primarily through 4 keyboard keys**. Pressing a key will **reduce a ‘stress’ value of a specific group** (for example sky stress) which will **increase the user’s progress towards the challenge goal of emotional balance** (which they can monitor on the **progress bars** in the **right side panel**). The stress values are the **basis for how the animation system works**. When stress values change, so do the animations for the 4 groups (sky, bridge, figures, water). **Linear interpolation is one of the main mechanisms I used to implement this, to ensure animation is smooth** and visually consistent.

The program’s **main draw function continuously updates the animations**. Segments are **animated using techniques such as sin/cos waves, Perlin noise, and transformations**, which are all **influenced by the stress values** of the segment groups.

Additionally, the artwork has been **designed to be responsive** so that when the **window is resized**, the **artwork will resize** as well.

<br>


### Key decisions included:
I decided to have **stress values run the animation system**, including controlling: **intensity of movements, colouring, corruption effects, sparkle/star effects, and scaling**.
I chose this approach because it makes the artwork have an **interconnected system**, that **includes the user interaction system** as well. If I did something like just using **randomness or timers** it wouldn’t have the same kind of **emotional logic or urgency**. Having the **emotional effects** be the variables that the user has to **influence through their inputs**, whilst also allowing for users to see the **effects of their inputs in real time**, is what makes the artwork have **emotional strength** and **relatability**. I felt this would **connect** it well to the **original _The Scream_** artwork.

I chose to use **sin, cos, and Perlin noise for motion**: __*water movement, sparkle movement, sky movement, and body movement*__. This was to give the animation **more easily flowing and natural types of movements**. I chose **sin and cos** for areas where I wanted there to by more of a **repetitive quality**. And I chose **Perlin noise** for other parts specifically so the animation would not look **too overly repetitive or rigid**. I chose this approach over more **fixed approaches** to animation because they would have been **too stagnant** for the type of emotional effect I wanted to express. I also felt that if I relied solely on **random()** to create variations within the animations, that this would make the animations appear either **too forced** or **too all over the place**.

I chose to use **linear interpolation to make both movements and animation transitions appear smoother**. I chose this because it was a good way to **ease between the two extremes of the artwork’s state**. By being able to **gradually ease the animations/colourings from the emotionally unbalanced state to the emotionally balanced state** makes it more visually appealing. It also makes the artwork **more interactive** because it gives users more of a chance to have **immediate feedback to their inputs**. Without linear interpolation, the animations just would have been **too harsh, fast, and visually unappealing**.


<br>
<br>
<br>


#
## AI ACKNOWLEDGEMENT

**_AI assistance was used in this project mainly for the purpose of assisting with calculations/mathematical aspects of coding that I found difficult, and thus inordinately time consuming, as I do not possess mathematical proficiency._**

I used **Microsoft Copilot** to help me figure out **appropriate values for movement, timing, scaling, etc.** Additionally, early on in the project, there was an instance I used Microsoft Pilot to help me figure out **appropriate logic to use for a flickering effect** on the stars in the image.  The **specific instances of AI usage are listed below (and commented within the code)**:

### sin() and cos() values
For the following functions: 
**updateBody(), updateBridgeShake(), updateBridgeGlow(), applySkyWiggle(), drawStars(), and applySegmentChaos()**
I used **Microsoft Copilot** to generate **value suggestions** for the **sin()** (and **cos()**, once in applySegmentChaos()) effects I was trying to achieve. I then **adjusted the values to suit the visual look and animation behaviour** I wanted. The result of these values was to **control how the segments of the artwork move** in order to create the **appearance of breathing, shaking, glowing, and swirling**.

### Transformation values
In the function **drawCorruptedBridge()**, I used **Microsoft Copilot** to **suggest appropriate values for transformation**. In specific, I was **unsure of how to get the desired black streaks to appear across the bridge**, and thus used Copilot to **generate starting values** for that, which I then **adjusted to suit the visual style** I aimed to achieve (i.e. **pointed black streaks that appear on the bridge when the bridge emotional balance level is low**).

### Flickering star logic
In the function **setupStars(), and implemented in the function drawStars()**, I used **Microsoft Copilot** to help me figure out a way to **use random() to create a flickering effect** where the brightness of some of the **stars appears to dim and lighten randomly**. The reason I used Copilot for this was that this was that I was **not sure how to implement this**, and **online searches** for applying this kind of effect appeared to provide quite **mathematically complex solutions** which I did not feel confident to implement.

### Angle value using Periln noise
In the function **applySegmentChaos()**, I used **Microsoft Copilot** to **suggest appropriate angle calculation values** needed to produce a **swirling water motion effect** I hoped for. The reason I used Copilot for this is that I had **difficulty in figuring out suitable ways to use the Perlin noise value**: the values I had tried to use were resulting in water segment **movement that was too large or too subtle**. By considering Copilot suggestions I was able to make use of the idea of **multiplying the noise value by the value of TWO_PI * 4** to result in several possible angle directions, creating a more **visually appealing swirling movement**. This effect occurs when the water emotional balance level is low so the **water appears to move in a more chaotic way**.

### Offset and Scaling values
In the functions: **updateFiguresApproach(), drawUIPanel, drawHintPanel, drawInstructionsPopup and drawUIButtons**, I used **Microsoft Copilot** to **adjust my values for size/position related to scaling/rescaling**. These were not typical parts of the artwork, and so I ran into **difficulties in calculating appropriate values** in order for them to behave in a responsive way when the window is resized. Using Copilot, I was able to **work on the values until I achieved the desired responsive scaling effect**.

<br>
<br>
<br>

#
## EXTERNAL REFERENCES
Through this project I **mainly used ideas/techniques covered in class**. The reason for this is that the **class content was all new to me**, so I felt there was enough techniques covered to make use of for this project. I did **not want to overwhelm myself with further unfamiliar content/techniques** to a point of getting stuck, so I did **not attempt to use new or more advanced techniques**.
With that said, I did **look further into topics that were not explored as in depth in class**, so that I would be able to apply them **more proficiently to my project**. I mention these topics below, and added comments within the code where I used these concepts/techniques.

In class, the shapes that were most used were rectangles and ellipses. For the **stars in my project** I wanted to use a **custom shape (polygon)** so I used [**P5 references**](https://p5js.org/reference/p5/beginShape/) and [**examples**](https://p5js.jp/examples/form-regular-polygon) to **learn how to do that**.

I **changed from using get()** to **using pixels**, for which I used [**P5 references**](https://p5js.org/reference/p5/pixels/). I also researched the way to correctly **index pixels array using x y coordinates**, from [**a source found online**](https://idmnyu.github.io/p5.js-image/#index). My reason for using pixels was to **improve speed/efficiency** of the program.

I used the [**sin()**](https://p5js.org/reference/p5/sin/ ) and [**cos()**](https://p5js.org/reference/p5/cos/) **P5 references**, to better understand how to write code in a way to **effectively implement the movement effects of these calculations**.

I also used the [**P5 references for brightness**](https://p5js.org/reference/p5/brightness/) in order to be able to **change the base colours of the different sections of the artwork** in a way they could still be **faithful to the original** (in terms of brightness levels) but have a more **unified look in my recreation** through colour range.

_**I used these references to learn techniques to implement in my own code, to suit my specific design intentions.**_

<br>
<br>
<br>

#
## INTERACTION INSTRUCTIONS

- When the **program starts** the user must use the **mouse to press a “YES, CONTINUE” button** in order for the program to start. This is so that the **user pauses to read the warning about flashing lights** in the program.

- **Next**, the user is presented with a **pop up that explains the instructions/controls**. To dismiss this, the user must **press an “OK” button**, using the mouse.

- The **program then starts** and the **user can use 4 keyboard keys to interact with the artwork**.
    - **“N” or “n” key:**

    will allow the user to **influence the sky portion** of the artwork and have **small side effects** on the **water and bridge sections**

    - **DOWN ARROW key:**

    will allow the user to **influence the water portion** of the artwork and have **small side effects** on the **figure and bridge sections**

    - **LEFT ARROW key:**

    will allow the user to **influence the bridge portion** of the artwork and have **small side effects** on the **sky and figure sections**

    - **SPACE BAR:**

    will allow the user to **influence the figure portion** of the artwork and have **small side effects** on the **water and sky sections**


- **MOUSE CLICK:**

    The **user is able to click two buttons while the program is in its started state:**
    - **Reset:** which will **reset the emotional balance levels** to the starting point of high emotional unbalance, and therefore, the **artwork will also reset** to that point

    - **Hint:** which will **reveal text that explains what action the user must take to ‘win’ the challenge**


The user is able to **use the four keyboard keys to experiment with the visual effects,** but in order to _**complete the objective**_, they must **repeatedly and quickly press all four keys at the same time**, until the emotional balance bars on the side panel are completely filled. At that point **a banner will appear** on the top of the canvas that reads __*“The Scream has found emotional balance”.*__

<br>

#
## NOTE ON CODE COMMENTS
In class, we were encouraged to **write comments that make the code easier for both ourselves and others to understand**. I am someone who **does not find code intuitive to read or understand** and prefers things to be explained plainly. I therefore **wrote comments** that might seem **obvious to others** but have actually been **useful for me to reorient myself when working on the project.**