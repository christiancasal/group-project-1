$("#loginModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  var fbButton = createFBLoginHTML();
    $('.modal-title').text('login');
    $('.modal-body').append(fbButton);
});

$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});

function createFBLoginHTML(){
  var fbButton = $('<fb: login-button scope="public_profile,email" onlogin="checkLoginState()"; </fb:login-button><div id="status"></div>')
  return fbButton;
}
