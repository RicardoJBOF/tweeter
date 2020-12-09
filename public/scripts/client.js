/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//FUNCTION TO START THE CODE AFTER THE DOCUMENT IS READY
$(document).ready( function() {



const renderTweets = function(tweets) {

  //LOOP MESSAGES
  //REVER IS A PROPERTY TO LOOP MESSAGE FROM NEW TO OLD ONES 
  for(let tweet of tweets) {
    let value = createTweetElement(tweet);
    //POST MESSAGES
    $('#tweet-list').prepend(value);
  };
}

//ESCAPE FUNCTION TO AVOID THAT SOMEONE CHANGE THE PROGRAM WITH TTEXT MESSAGES
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//MY HTLM STRUCTURE
const createTweetElement = function(tweetData) {
  let $tweet = $(`
  <article class="tweet-container"> 
    <header id= "results">  
      <div class="up-container">

        <div class="container-name"> 
          <div>
            <img src="${tweetData.user.avatars}" alt="avatar">
          </div> 
          <div class="space-inside-teewet">
            ${tweetData.user.name}
          </div>
        </div>


        <div class="container-hashtag">${tweetData.user.handle}</div>
        
      </div>
      <div class="middle-container">${escape(tweetData.content.text)}</div>
      <div class="bottom-container">
        <div class="days-ago">10 days ago</div>
        <div class="symbols-bottom">
        <div class="symbol-inter">&#9873</div>
        <div class="symbol-inter">&#8633</div>
        <div class="symbol-inter">&#9829</div>
      </div>
    </div> 
    </header>
  </article>
  `);
  return $tweet;
}

const loadTweets = function() {
  //AJAX GET REQUEST
  $.ajax({
    type: "GET",
    url: '/tweets',
    dataType: 'JSON'
  }).then(response => {
    renderTweets(response) //CALL RENDER TWEETS
  });
};

//REFRESH PAGE
loadTweets();

//HIDE ERROR MESSAGES
$(".msg-error-empty").hide();
$(".msg-error-limit").hide();

///AJAX REQUEST
$('#sub-tweet').on('submit', function(event) {
  
  //PREVENT DEFAULT BEHAVIOUR OF RELOADING PAGE
  event.preventDefault(); 
  //PREVENT EMPTY MESSAGES
  if ($('.tweet-text').val().length === 0) {
    //$(".msg-error-empty").slideUp();
    $(".msg-error-empty").show();

  //PREVENT EMPTY LENGTH HIGHER THAN 140 
  } else if ($('.tweet-text').val().length > 140 ) {
    $(".msg-error-limit").show();
  } else if ($('.tweet-text').val().length <= 140 && $('.tweet-text').val().length > 0) {
  
  //POST REQUEST
  const myText = $('#sub-tweet');
  $.ajax({
    type: "POST",
    url: '/tweets',
    //SERIALIZE TO DECODE THE MASSAGE, JQUERY/AJAX PROPERTY
    data: myText.serialize(),
  }).then( () => {
    loadTweets(); //FUCTION TO LOAD TWEETS, IT USES A GET REQUEST
    $(".msg-error-empty").hide();
    $(".msg-error-limit").hide();
    $(".tweet-text").val('').empty();
    $(".counter").val('').empty().append('140');
  })
  }
})
});


