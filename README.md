Aakar Showcase
==============

Ever wondered how a set of Gujarati Unicode characters will look like when rendered with [Aakar font](http://kartikm.github.io/fonts-aakar/) ? Do you want to see it before [downloading](https://github.com/kartikm/fonts-aakar/releases) the font ? Here you go. This [demo app](http://fonts-aakar-showcase.herokuapp.com/%E0%AA%86%E0%AA%95%E0%AA%BE%E0%AA%B0/160/yellow/orange) will not only show the rendered text but allow you to change the text's size, text's color and background. It also allows you to change the text. Just click on text and start editing it.


Simple API
----------
* ```http://fonts-aakar-showcase.herokuapp.com/<yourtext>``` - Accepts the text to be displayed. [Try](http://fonts-aakar-showcase.herokuapp.com/<yourtext>/)

* ```http://fonts-aakar-showcase.herokuapp.com/<yourtext>/100``` - Accepts the text to be displayed along with font-size set to 100px. [Try](http://fonts-aakar-showcase.herokuapp.com/<yourtext>/100)

* ```http://fonts-aakar-showcase.herokuapp.com/<yourtext>/100/yellow``` - Accepts the text to be displayed along with font-size set to 100px and text's color set to yellow. [Try](http://fonts-aakar-showcase.herokuapp.com/<yourtext>/100/yellow)

* ```http://fonts-aakar-showcase.herokuapp.com/<yourtext>/100/yellow/orange``` - Accepts the text to be displayed along with font-size set to 100px, text's color set to yellow and page background set to orange. [Try](http://fonts-aakar-showcase.herokuapp.com/<yourtext>/100/yellow/orange)


Fun Hacks with API
------------------

### Platform for message passing
This simple API can be fun to use as platform to pass message. Send people simple message. E.g. [this](http://fonts-aakar-showcase.herokuapp.com/%E0%AA%B8%E0%AA%B0%E0%AA%B8!/160/) or [this](http://fonts-aakar-showcase.herokuapp.com/You%20are%20my%20hero!/100/white/grey).

You just need to change the URL string accordingly. If you think that message string in URL might act as spoiler, you can use some URL shortner service !

### Test the font rendering
[Try](http://fonts-aakar-showcase.herokuapp.com/%E0%AA%93%E0%AA%AA%E0%AA%A8%20%E0%AA%B8%E0%AB%8B%E0%AA%B0%E0%AB%8D%E0%AA%B8/300/) or even [bigger size](http://fonts-aakar-showcase.herokuapp.com/%E0%AA%93%E0%AA%AA%E0%AA%A8%20%E0%AA%B8%E0%AB%8B%E0%AA%B0%E0%AB%8D%E0%AA%B8/600/) ( where you may have to scrolldown to see the text). With such size **font are exposed wide open**. Analyse the font glyphs closely. You will see where they are overlapping. Where are 'cracks'. Where the curve is not perfect or is not curve at all but polygon. You can always find such rendering issues and [report it](https://github.com/kartikm/fonts-aakar/issues).

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/samyakbhuta/fonts-aakar-showcase/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

