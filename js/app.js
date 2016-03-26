if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}

$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});
