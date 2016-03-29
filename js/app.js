var ref = new Firebase("https://google-login-read-people.firebaseio.com");

function checkFB(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
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
  });
});
$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.articleModal) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
