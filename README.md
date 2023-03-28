# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).


### Links

- Live Site URL: [Tip calculator](https://mermory-alloc.github.io/Tip-calculator)

### The challenge
Small and an easy challenge to learn about input verification and DOM manipulation using JS.

The JavaScript code provides the functionality for a tip calculator web application. The application allows users to input the total bill amount, select a tip percentage or enter a custom tip amount, specify the number of people splitting the bill, and calculate the total amount owed per person including tip.

It contains the following functions:
  - ___onlyCheck___: A function that limits the number of characters allowed in an input field to a specified limit
  - ___onlySetValue___: A function that sets the value of a variable to the integer value of the input field, or 0 if the input field is empty
  - ___calculateAll___: A function that calculates the total tip amount per person and total bill amount per person based on the input fields and tip percentage selected
unchecked: A function that removes the "checked" class from all tip percentage buttons, allowing for only one button to be selected at a time
  - ___onlyDicimal___: A function that allows only decimal points and numbers to be entered in an input field
  - ___onlyNumbers___: A function that allows only numbers to be entered in an input field
  - ___activateBtn___: A function that enables the reset button if any input field or tip percentage button is not empty
  - ___disactivateBtn___: A function that disables the reset button if all input fields and tip percentage buttons are empty
  - ___resetAll___: A function that clears all input fields and calculation results and disables the reset button

It also includes the following event listeners:
  - change event listener on the number of people input field to validate that the input is greater than 0 and apply a red label and border if the input is 0
  - contextmenu event listener on the number of people input field and custom tip input field to prevent the default context menu from appearing
  - paste event listener on the custom tip input field to prevent pasting of text in the field
  - input event listener on the custom tip input field to check the length of the input and update the tip percentage buttons and calculation results
  - change event listener on the custom tip input field to update the tip percentage buttons and calculation results
  - change event listener on the tip percentage buttons to update the custom tip input field and calculation results
  - click event listener on the reset button to clear all input fields and calculation results and disable the reset button
  - keydown event listener on the bill input field to allow only numbers and decimal points to be entered
  - keydown event listener on the number of people input field to allow only numbers to be entered
