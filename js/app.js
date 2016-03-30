
//firebase link bm
//var fireit = new Firebase('https://readpeople.firebaseio.com/'); 

//grabs user input bm  
var titleinput=$('#title').val().trim(); 
var storyinput=$('#content').val().trim();



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


function createFBLoginHTML(){
  var fbButton = $('<fb: login-button scope="public_profile,email" onlogin="checkLoginState()"</fb:login-button><div id="status"></div>')
  return fbButton;
}
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