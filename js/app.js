$("#loginModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
    $('.modal-title').text('login');
  var createGoogleAuth = $('<div class="g-signin2" data-onsuccess="onSignIn"></div>')
    $('.modal-body').append(createGoogleAuth);
});

$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
