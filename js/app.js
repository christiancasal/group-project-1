var ref = new Firebase("https://google-login-read-people.firebaseio.com");
var userList = "user-data"
var userLocalData, userDBKey, userGetKey;

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

      userData.once('value', function(response){
        console.log(response);
      });
    }
  });
}

$(function(){
  $('#logInFB').on('click', function(){
    var hello = "hello";
    console.log(hello);
  });
  $('#logOutFB').on('click', function(){
    var hello = "hello";
    console.log(hello);
    ref.logout();
  });
});
$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.articleModal) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
