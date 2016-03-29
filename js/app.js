var ref = new Firebase("https://google-login-read-people.firebaseio.com");
var userDataLocation = "user-data"
var userData, userDBKey;
function checkFB(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      localStorage.setItem("authData", authData);
      var userData = ref.child(userDataLocation);
      userData.push(authData);
      userDBKey = userData.key();
      userData = JSON.parse(localStorage.getItem("authData"))
    }
  });
}
console.log(userData);

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
$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.articleModal) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
