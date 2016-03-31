//cc - declares firebase references and data placeholders
var ref = new Firebase("https://google-login-read-people.firebaseio.com");
var userList = "user-data"
var userLocalData, userDBKey, userGetKey;
var userLoggedIn = false;

//cc - facebook authentication, push data to localStorage for short term
//reference, and firebase for long term refernce
function checkFB(){

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  function statusChangeCallback(response) {
      console.log('statusChangeCallback');
      console.log(response);
      // The response object is returned with a status field that lets the
      // app know the current login status of the person.
      // Full docs on the response object can be found in the documentation
      // for FB.getLoginStatus().
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into Facebook.';
      }
    }

  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      userLoggedIn = true;
      signInButtonToggle();

      localStorage.setItem("authData", authData);
      var userData = ref.child(userList);
      userGetKey = userData.push(authData);
      userDBKey = userGetKey.key();

      //get user data
      userData.once('value', function(response){
        console.log(response.child(userDBKey).val());
      });
    }
  });
}

//cc - on click actions for login/logout
$(function(){
  $('#logInFB').on('click', function(){
    var hello = "hello";
    console.log(hello);
  });
  $('#logOutFB').on('click', function(){
    var hello = "hello";
    console.log(hello);
  });

$("#loginModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  var fbButton = createFBLoginHTML();
    $('.modal-title').text('login');
    $('.modal-body').append(fbButton);
});

//cc - modal for popping out articles
$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.articleModal) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
});

//cc - if the user is signed in turn the button to a sign out
function signInButtonToggle(){

}

//firebase link bm
//var fireit = new Firebase('https://readpeople.firebaseio.com/');

//grabs user input bm
//var titleinput=$('#title').val().trim();
//var storyinput=$('#content').val().trim();



//creates local tmeporary object for holding user input bm
// var db={
//   title:
//   imgLink
//   videoLink:
//   webLink:
//   story:
//}
// push to firebase bm
//fireit.push(db)
//alert bm
//alert('You have published your story')


// preview story modal on writecontent.html bm
$("#previewModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text($("#title").val());

  if($("#storyPic").val()){
    $('.modal-body').append("<img src='"+ $("#storyPic").val() +"' width=200>")
  }
  if($("#storyVideo").val()){
    $('.modal-body').append($("#storyVideo").val())
  }
  if($("#storyLink").val()){
  $('.modal-body').append("<div><a href='" + $('#storyLink').val()
    + "'>" + $('#storyLink').val() +"</a></div>");
    // "<a href='" + $('#storyLink').val() + "'>Click here for stuff</a>"
  }
  $('.modal-body').append($("#content").val());
});

//add picture link on writecontent.html bm
$('#addpic').on('click', function(){
  var inputBoxContainer= $('#input-box-container');
  var div=$('<div>');
  var inputImage=$('<input id="storyPic">');
  var xButton=$('<button>');
  div.append(inputImage);
  div.append(xButton);
  inputBoxContainer.append(div);
  return false;
});
//addvideo link on writecontent.html
$('#addvid').on('click', function(){
  var inputBoxContainer= $('#input-box-container');
  var div=$('<div>');
  var inputVid=$('<input id="storyVideo">');
  var xButton=$('<button>');
  div.append(inputVid);
  div.append(xButton);
  inputBoxContainer.append(div);
  return false;
});
$('#addlink').on('click', function(){
  var inputBoxContainer= $('#input-box-container');
  var div=$('<div>');
  var inputLink=$('<input id="storyLink">');
  var xButton=$('<button>');
  div.append(inputLink);
  div.append(xButton);
  inputBoxContainer.append(div);
  return false;
});
