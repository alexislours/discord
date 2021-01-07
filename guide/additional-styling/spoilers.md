---
layout: default
title: Spoilers
nav_order: 9
parent: Additional Styling
permalink: spoilers/
---

# Spoilers
{: .caution }
This feature is unique to DFM and doesn't exist for other markdown processors. Using it may or may not result in creating a markdown table.

Encapsulating your text with two vertical bars (`||`) around text will make it a spoiler. The text inside a spoiler will be hidden until a user clicks on it.

Example:

\|\|Spoiler Text\|\|

Result:  
Before clicking:  
![Spoilers before clicking](/discord/assets/spoiler-pre-click.png)

After clicking:  
![Spoilers after clicking](/discord/assets/spoiler-after-click.png)

{: .note}
Spoilers will also remove the preview from links, you can learn how to get a similar result [here](/discord/remove-embeds).

You can also apply spoilers on images and videos by adding `SPOILER_` before the name of the file. This is currently the only way to do so on mobile.

{: .note}
You can get the text or image to be hidden again by clicking on another channel and going back to the one containing the spoiler.