# Color Changer

A simple JavaScript project that changes the background color of the webpage to a different color every time the `changeColors` function is called.

## Description

This project uses a JavaScript function to cycle through an array of predefined colors and change the background color of the webpage. The colors are changed in a loop, so once the last color is reached, the function starts again from the first color.

## Features

- Changes the background color of the webpage to a different color every time the `changeColors` function is called.
- Uses a predefined array of 18 colors.
- Loops back to the first color once the last color is reached.

## Code Highlights

- The `changeColors` function uses the `document.getElementsByTagName` method to select the `<body>` element and change its `backgroundColor` style property.
- The `index` variable is used to keep track of the current color in the array.
- The `if` statement is used to reset the `index` variable to 0 once the last color is reached.

## Usage

To use this code, simply call the `changeColors` function in your JavaScript code. You can also modify the colors array to add or remove colors.

## Example Use Case

You can use this code to create a simple color-changing effect on a webpage. For example, you could call the `changeColors` function every second using the `setInterval` function to create a continuous color-changing effect.

![Image Alt](https://github.com/hotchilicode/Color-Changer/blob/f5b77b8b9f1a15499d076c852a98614e5067196a/colo.jpg)



