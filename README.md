char-counter
============

Char counter is a jquery simple plugin, where you chosse your textarea/text-input with a character limit in it. Then, you create a span near your text input and it will be the warning for the user when it reaches the character limit.

## How to use
     $("#the-field-with-char-limit").charCounter({seletorWarn: "#the-span-for-warn-char-limit"});
Within the object you may pass as argument the optional parameters:
* `maximum`: int value, the maximum allowed in your `#the-field-with-char-limit`. Default is 140.
* `warnText`: string value to display in your `#the-span-for-warn-char-limit`. Default is a empty string.
For more, see the example.html file.


|                              Possible future implementations:|
|--------------------------------------------------------------|
|          use another criterion for the color of the text span|
