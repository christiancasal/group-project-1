//cc - declares firebase references and data placeholders
var ref = new Firebase("https://google-login-read-people.firebaseio.com");
var userList = "user-data"
var userLocalData, userDBKey, userGetKey;
var userLoggedIn = false;

var hello;
//cc - facebook authentication, push data to localStorage for short term
//reference, and firebase for long term refernce
function checkFB(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      userLoggedIn = true;
      $('#logInToggle').text('Sign Out');

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

$('#logInToggle').on('click',function(){
    if($(this)[0].text == "Sign In"){
      checkFB();
    }
    else{
    FB.logout(function(response) {
  // user is now logged out
    console.log(response);
});
}
})
//cc - if the user is signed in turn the button to a sign out
function signOutButtonToggle(){

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
