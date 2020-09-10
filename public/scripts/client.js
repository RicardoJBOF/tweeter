/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready( function() {



//TESTING PART 1
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]




const renderTweets = function(tweets) {
  $('.container-body').empty(); //after send the tweet, the send box will disappear
  for(let tweet of tweets.reverse()) {
    let value = createTweetElement(tweet);
    $('.container-body').append(value);
  };
}



const createTweetElement = function(tweetData) {
  let $tweet = $(`
  <article class="tweet-container"> 
    <header id= "results">  
      <div class="up-container">
        <div class="container-name"> ${tweetData.user.name} </div>
        <div class="container-hashtag">${tweetData.user.handle}</div>
      </div>
      <div class="middle-container">${tweetData.content.text}</div>
      <div class="bottom-container">
        <div class="days-ago">10 days ago</div>
        <div class="symbols-bottom">
        <div class="symbol1">&#174;</div>
        <div class="symbol2">&#174;</div>
        <div class="symbol3">&#174;</div>
      </div>
    </div> 
    </header>
  </article>
  `);
  return $tweet;
}

const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: '/tweets',
  }).then( (response) => {
    renderTweets(response)

  });

  // console.log('#sub-tweet');

};





///GET AJAX REQUEST


$('#sub-tweet').on('submit', function(event) {


  console.log($('.tweet-text').val().length);
  if ($('.tweet-text').val().length === 0) {

  alert("Please, type a message!"); 

  } else if ($('.tweet-text').val().length > 140 ) {

  alert('The maximum allowed length is 140 letters!'); 

  } else if ($('.tweet-text').val().length < 140 ) {

  event.preventDefault();
  const myText = $('#sub-tweet');
  $.ajax({
    type: "POST",
    url: '/tweets',
    data: myText.serialize(),
  }).then( () => {
    loadTweets();
  })
  
  }

})





});


