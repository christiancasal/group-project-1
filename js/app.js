//cc - declares firebase references and data placeholders
var ref = new Firebase("https://google-login-read-people.firebaseio.com");
var userList = "user-data"
var userLocalData, userDBKey, userGetKey, userAccessToken,userProfPicURL;
var userLoggedIn = false;


//cc - modal for popping out articles
$("#articleModal").on('show.bs.modal', function(event){
  var button = $(event.articleModal) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text('write your story');
});

$('#logInToggle').on('click',function(){
    if($(this)[0].text == "Sign In"){
      loginFB();
    }
    else if($(this)[0].text == "Sign Out"){
      logoutFB();
    }
});

//cc - facebook authentication, push data to localStorage for short term
//reference, and firebase for long term refernce

function logoutFB(){
  ref.unauth();
  ref.child(userList).child(userDBKey).remove();
  $('#logInToggle').text('Sign In');
}

function loginFB(){
  ref.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);

      userLoggedIn = true;

      var newImg = $('<img>');
      newImg.attr('id', 'userProfPic');
      newImg.attr('src', authData.facebook.profileImageURL);
      $('#logInToggle').text(authData.facebook.displayName);
      $('#logInToggle').css('margin-top',' ');
      $('#logInToggle').prepend(newImg);

      localStorage.setItem("authData", authData);
      var userData = ref.child(userList);
      userGetKey = userData.push(authData);
      userDBKey = userGetKey.key();
      console.log(authData.facebook.profileImageURL);
      //get user data

      // userData.once('value', function(response){
      //   console.log(response.child(userDBKey).val());
      //   userAccessToken = response.child(userDBKey).child('facebook').child('accessToken').val()
      //   userProfPicURL = response.child(userDBKey).child('facebook').child('profileImageURL').val()
      // });
    }
  },
  {
    remember: "sessionOnly",
    scope: "email,user_likes"
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
//bm aloha change test 
aloha(document.querySelector("#content")); 

for (var command in aloha.ui.commands) {
    $('.action-' + command).on(
        'click',
        aloha.ui.command(aloha.ui.commands[command])
    );
}


//  $('#title'))

//firebase link bm
var fireit = new Firebase('https://readpeople.firebaseio.com/');

//click publish story button bm
$("#publishButton").on("click", function(){



//grabs user input bm
var titleinput=$('#title').val().trim(); 
var imginput=$('#addpic').val().trim();
var vidinput=$('#addvid').val().trim();
var linkinput=$('#addlink').val().trim();
var storyinput=$('#content').val().trim();



//creates local temporary object for holding user input bm
 var db={
  title: titleinput,
  imgLink: imginput,
  videoLink: vidinput,
  webLink: linkinput,
  story: storyinput
} 
//console.log database 
console.log(db.title);
console.log(db.imgLink);
console.log(db.videoLink);
console.log(db.webLink);
console.log(db.story);
// push to firebase bm
fireit.push(db);
//alert bm
alert('You have published your story')
}) 

// bm create firebase event for adding todatabase and appending onto index.html page
fireit.on("child_added", function(childSnapshot, prevChildKey){

   console.log(childSnapshot.val()) 

   //Store everything into a variable 
   var titleinput= childSnapshot.val().title; 
   var imginput= childSnapshot.val().imgLink;
   var vidinput= childSnapshot.val().videoLink;
   var linkinput= childSnapshot.val().webLink;
   var storyinput= childSnapshot.val().story; 

   //Story Content 
   console.log(titleinput);
   console.log(imginput);
   console.log(vidinput);
   console.log(linkinput);
   console.log(storyinput);
})

// preview story modal on writecontent.html bm
$("#previewModal").on('show.bs.modal', function(event){
  var button = $(event.logInButton) // Button that triggered the modal
  var recipient = button.data('login');
  $('.modal-title').text($("#title").val());

  if($("#storyPic").val()){
    $('.modal-body').html("<img src='"+ $("#storyPic").val() +"' width=200>")
  }
  if($("#storyVideo").val()){
    $('.modal-body').html($("#storyVideo").val())
  }
  if($("#storyLink").val()){
  $('.modal-body').html("<div><a href='" + $('#storyLink').val()
    + "'>" + $('#storyLink').val() +"</a></div>");
    // "<a href='" + $('#storyLink').val() + "'>Click here for stuff</a>"
  } 
  $('.modal-body').append($("#content").html());
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
