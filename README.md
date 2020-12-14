# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

PS: The student forked and cloned the application from a (incomplete) repository, then build upon it to practice his skills. 

## Final Product

![Screenshot Desktop View](https://github.com/RicardoJBOF/tweeter/blob/master/docs/Desktop-View.png)
![Screenshot Mobile View](https://github.com/RicardoJBOF/tweeter/blob/master/docs/Mobile-View.png)
![Functionalities](https://github.com/RicardoJBOF/tweeter/blob/master/docs/Functionalities.gif)

## Dependencies

- Express
- Node 5.10.x or above
- jQuery
- AJAX
- MongoDB

## Getting Started

- Install dependencies using the `npm install` command.
- Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
- Go to <http://localhost:8080/> in your browser.

## Functional Requirements

- Primarily a client-side Single Page App (SPA)
- The client-side app communicates with a server via AJAX

### Display Requirements

- Navigation Bar
  - Fixed to the top
  - Has padding on both sides
  - Contains Compose button

- Compose Tweet box
  - Displayed above the list of tweets
  - Contains a form for submitting tweets, which itself contains: textarea for new tweet content and left-aligned button for submitting new tweets
  - Contains a Character Counter, right-aligned, which by default shows 140

- List of Tweets
  - Displays tweets in reverse-chronological order (that is, by creation time descending)

- Individual Tweets
  - Have a header, which contains the user's: avatar, on the left; name, on the left and after the avatar; handle, on the right
  - have a body, which contains the tweet text
  - have a footer, which displays: how long ago the tweet was created, on the left; and "Flag", "Re-tweet" and "Like" icons upon hovering over the tweet, on the right

### Behaviour

- Character Counter
  - When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)
  - The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

- Compose Tweet
  - When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed
  - When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)

### Stretch

- When a user clicks the Compose button in the Navigation Bar: if the Compose Tweet box is currently hidden, then it is shown, and the textarea inside it is auto-focused; if the Compose Tweet box is currently showing, then it is hidden; and in either case, transitions between 'shown' and 'hidden' states should be animated


