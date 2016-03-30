//cc - declares firebase references and data placeholders
var ref = new Firebase("https://google-login-read-people.firebaseio.com");
var userList = "user-data"
var userLocalData, userDBKey, userGetKey;

//cc - facebook authentication, push data to localStorage for short term
//reference, and firebase for long term refernce
function checkFB(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
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
});

//cc - modal for popping out articles
$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.articleModal) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
