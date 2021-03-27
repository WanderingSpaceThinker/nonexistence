---
layout: post
title: "Water part 1 - The boiling point was a lie"
description: "Really, it's just a physics lesson on water."
date:   2021-03-14
categories: Drafts
icon: "fas fa-tint"
images:
 - image_path: /static/posts_img/water.png
 - image_path: /static/posts_img/particles.gif
 - image_path: /static/posts_img/triple.gif
 - image_path: /static/posts_img/evaporation.png
 - image_path: /static/posts_img/hr_diag.png
 - image_path: /static/posts_img/curve.png
---

*This is the first issue of Drafts. This will be a series of shorter(ish), simpler(ish) articles about a single theme or question, hope you enjoy this lighter content.*

**<ins>Introduction</ins>**

Answer quickly, what's the boiling temperature of water? What does it correspond to?

3... 2... 1... Time out!

If you haven't answered anything, that's fine but chances are you answered:
* 100°C/212°F
* the temperature at which liquid water turns into vapor.

Bad news, you answered what are the expected correct answers but they were trick questions:

* It actually depends on the surrounding pressure but it's indeed the value you know at "normal" pressure.
* If you heat water at this temperature it will vaporize, don't get me wrong. If that were the end of it though, it means drying your hair after a shower or your clothes after a downpour, would require to heat them to 100°C... imagine the horror.

Clearly, the definition we've been told in school doesn't account for evaporation and there's more than meet the eye.

Hopefully, by the end you'll have a better understanding of the many common phenomenons that are involved in this.

**<ins>States of matter</ins>**

You probably know that there are 3 states of matter[^1]:
> <ins>solid:</ins> particles are closely packed and strongly bound together so they can hardly move.
* Like a packed elevator where you can barely scratch your nose.

> <ins>liquid:</ins> particles are still close but weakly bound, they can move more easily.
* The same elevator with fewer people so you can move if you squeeze between people.

> <ins>gas:</ins> particles are spread apart and move freely.
* There's only 3 people left in the elevator, you can now move without bumping into them.

The state of a substance depends on its pressure and temperature:
> <ins>temperature:</ins> measure of the average velocity of particles (how agitated they are).
* Hot temperature is similar to a punk mosh pit while cold temperature is more a tea dance... organized by slugs.

> <ins>pressure:</ins> measure of the velocity exchange between particles (how much they bump into each other).
* The same examples work but you can also picture low pressure as a sparse mosh pit of an unpopular band and high pressure as a crowded *clumsy* slug tea dance.

A *phase diagram* is a graph that tells you the state of a substance for a given pressure/temperature. Since this is our subject, here is the phase diagram for water:

![phase]({{ site.baseurl }}{{ page.images[0].image_path }})
<p class="legend">A clutch from Wikipedia</p>

Remarkably, the solid state takes most of the diagram, too bad we're not going to talk much about ice[^2]. Other than that, freezing point and boiling point at regular pressure are the values you expect.

Our focus today is on the curve that separates gas with the other states[^3]. This is the curve that tells us the boiling temperature for a given pressure (or the other way around).

We can see the boiling temperature increases with pressure, that's the secret behind pressure cooker. Since water takes around **1600x** more space as vapor[^4] than as a liquid, this will increase pressure **a lot** in a confined space. With that you can cook stuff [quicker than normal](https://en.wikipedia.org/wiki/Pressure_cooking).

**<ins>The truth behind evaporation</ins>**

Evaporation is water spontaneously turning into vapor at temperatures well below the boiling point. Why is that?

Temperature, pressure and even state of matter are concepts we invented to describe behaviors we see at our scale, where the tiniest droplet of water is still composed of trillions of particles.

But in reality physics happen on a particle to particle basis, let's look at one:

![phase]({{ site.baseurl }}{{ page.images[1].image_path }})
<p class="legend">Looks like a really weird pool game</p>

As the particle bumps with others, it will randomly gain or lose momentum. That's important because the less momentum it has, the easier it will bind with its neighbors and that will determine the *local state of matter*.

There is this misconception that, for example, in an ice cube all water is solid. In reality, particles have a *probability* to be solid, liquid or gas[^5]. At any given time, small parts of the ice cube will melt or vaporize to freeze again the next instant.

Sounds too crazy to be true? Luckily, we can observe something similar when a substance reaches its triple point[^6]:

![phase]({{ site.baseurl }}{{ page.images[2].image_path }})
<p class="legend">Yeah, it looks as crazy at it sounds</p>

Going back to evaporation, in a glass of water, if a particle at the surface get bumped and gain enough momentum, it will break free and escape into the air as vapor.

Reciprocally, if a free water particle is slowed enough by a collision, near the surface, it will bind to others and become part of the liquid.

The probability of this event happening varies with pressure/temperature:
* The higher the pressure, the harder it is for particles to move from liquid to gas (and vice versa).
* The hotter it is, the more total momentum and the higher chance a particle will have enough to "escape" the liquid and become gas.
* Inversely, the colder it is, the higher chance a gas particle can be "knocked down" into being part of the liquid.

We can illustrate this with a metaphor: let's say you're at a concert. The more crowded it is, the harder it will be to move around. If it's hot you might want to get away from people and if it's cold you won't mind getting packed together.

**<ins>Relative humidity</ins>**

All of this is nice but we don't know the rule regulating those two transfers.

You probably experienced that a glass of water will empty by itself, given a week or two. Meanwhile, that 5 years old bottle of water in your car probably has developed an alien ecosystem (and at this point, you're too afraid to throw it away).

The missing piece of the puzzle is humidity:

Humidity is the amount of water vapor present in the air and relative humidity is that value expressed as a percentage of the **maximum amount** of humidity possible. You probably encountered this value on weather reports or on digital thermometers.

Since there is a maximum air humidity, it explains why that car bottle with few air inside is still full. Whereas the empty glass had an entire room to evaporate into.

In addition, the dryer the air (the lower the relative humidity), the faster water will evaporate until it stops at 100% relative humidity.

It's not that it's easier to evaporate into dryer air, just that there is fewer gas particle that can transform to liquid form. When air is saturated with moisture, the evaporation and condensation streams compensate each other perfectly:

![evaporation]({{ site.baseurl }}{{ page.images[3].image_path }})
<p class="legend">Expertly drawn illustration</p>

Imagine this:
* Dry air is like an empty train arriving at a crowded station, many will go in but none out.
* Air saturated with humidity is a full train arriving at a full station, lots of people going in and out with as many people as they started with in the end.

Finally, you may have experienced suffocating hot humid tropical summer (when you're all sweaty) yet you probably never complained about humid winter, even though it's a thing[^7].

One of the reason is, maximum humidity depends on pressure/temperature, specifically it will increase drastically with temperature.

Actually, we can observe this increase on our boiling point curve from earlier. Here, I redrew it so we could better see the "real" proportions between liquid and gas:

![humidity]({{ site.baseurl }}{{ page.images[5].image_path }})
<p class="legend">So many efforts for you to ignore this graph anyway.</p>

The red lines tell us the maximum pressure of water vapor[^8] that can exist at this temperature. This is what defines the maximum humidity (per unit of air).

The purples lines tell us water should be liquid... but we just said that some evaporate into gas! In reality, the lines tell us that it will be both liquid *and* gas. Water will stay in liquid state but only when enough have evaporated to reach maximum humidity.

The boiling temperature is the point where the purple and red lines completely overlap. Meaning the maximum pressure of water vapor equals the total pressure. Meaning water cannot stay in liquid form at all.

I realize that it's a bit much to wrap our heads around so take this last image: it's a bit like a relationship that slowly decays.

When temperature rises, love turns increasingly into hate and the water molecules want more and more to split up. When it reaches the boiling point, the water molecules sign the divorce papers and go on their own separate way...

Wait, no no I swear this is not about me, I just have poor imagination for metaphors.

**<ins>Conclusion</ins>**

Let's sum it up, a phase diagram will tell us in what state matter will be for a couple pressure/temperature, at our scale.

On a particle level, it's way more fuzzy and chaotic, matter don't really exist in a single state, it's more a game of probability and momentum, for each instant.

In the case of liquid water, it means there's a lot of exchanges between the water in a container and the moisture in the air. Those exchanges are regulated by the maximum humidity which also depends on pressure/temperature.

Finally, the boiling point is not the temperature at which liquid turns into gas but rather the temperature at which **all** water can exist in vapor form, without limit[^9].

That's it for our pointless journey of understanding the truth behind the boiling point, which really looks like a pretense to make you learn a ton about water and physics but hey, if you learned a thing or two then it was worth it... probably.

**<ins>Footnotes</ins>**

[^1]: There's actually [many more](https://en.wikipedia.org/wiki/State_of_matter), but that's not the topic.
[^2]: If you're disappointed, here is a fun fact about ice: its structure also depends on pressure/temperature and it has [many different ones](https://upload.wikimedia.org/wikipedia/commons/0/08/Phase_diagram_of_water.svg). The one we're most used to is the [ice Ih](https://en.wikipedia.org/wiki/Ice_Ih).
[^3]: Sadly, it means I'll have to ignore the supercritical part even though it's [SUPER cool](https://www.youtube.com/watch?v=JslxPjrMzqY).
[^4]: By the way, water vapor is very much invisible, the white smoke coming of boiling water is really a fog of tiny droplets.
[^5]: Temperature is what determines those probabilities. The hotter the ice cube, the less *solid* it will be, both literally and figuratively.
[^6]: Original footage from this [video](https://www.youtube.com/watch?v=XEbMHmDhq2I), more info on the triple point [here](https://en.wikipedia.org/wiki/Triple_point).
[^7]: Winter humidity, in badly isolated homes, is the source of chipped paint, rotten wallpaper and all this sort of goodness. Because cold air can hold very little moisture, walls colder than the room will allow moisture to condense into liquid form, causing the havoc you know.
[^8]: Independently of ambient/total pressure.
[^9]: As long as the pressure doesn't increase.