
#Connect Four

For my first project I implemented the game Connect Four using javascript, html, css and jQuery.

I created a board in html and used classes to identify columns and all spaces and specific ids to identify rows. By using .col > #row selector I was able to get access to the DOM at certain coordinates on my board.

I changed the colors of the spaces with these selectors to represent moves made by each player.

I created methods to access the color of a particular coordinate on the board and compare it to the color of a different coordinate on the board.

The most challenging part of the project came when I needed to test for four in a row. I decided to check for win states by taking the last move and checking in every direction(except for up!!), if there was a match I would move my starting point to the matching point and repeat the process of checking in every direction for four in a row.

Given more time I would like to consolidate my code a little better. I was able to break down mosts of the steps of the problem into specific methods but there is still some repetition.

Also , there are always ways you can tweak the css to improve the style.
