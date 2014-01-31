// this is the section that sets up the functionality

// this little section is setting up a small database for proof of concept purposes
userData = [
  {
    avatarusername: 'Bertman45',
    avataremail: 'bertman45@gmail.com',
    avatarlocation: 'Greenville',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
  {
    avatarusername: 'Jeremyson',
    avataremail: 'jcrawford.design@gmail.com',
    avatarlocation: 'Greenville',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
  {
    avatarusername: 'Elizbarr',
    avataremail: 'elizbarr@gmail.com',
    avatarlocation: 'Greenville',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'LingBoard',
    avataremail: 'board@gmail.com',
    avatarlocation: 'Ohio',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'EnFuego',
    avataremail: 'icepack@gmail.com',
    avatarlocation: 'Equator',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'Cloud',
    avataremail: 'rainmaker@gmail.com',
    avatarlocation: 'Cloud 9',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'BestUserNameEver',
    avataremail: 'iamthebest@gmail.com',
    avatarlocation: 'Wouldn\'t you like to know',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'ChipsAhoyMcCoy',
    avataremail: 'cookiemonster@gmail.com',
    avatarlocation: 'Jar near You',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'Mine',
    avataremail: 'reallymine@gmail.com',
    avatarlocation: 'My House',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  },
    {
    avatarusername: 'Batman',
    avataremail: 'jokerisntfunny@gmail.com',
    avatarlocation: 'exit 49A',
    profilepic: 'http://lorempixel.com/150/150/',
    galleryimage:'http://lorempixel.com/300/300/',
    caption: 'this is a test img'
  }
]

function User (name,email,location,propic,image,caption) {
if (name) {this.avatarusername = name}
if (email) {this.avataremail = email}
if (location) {this.avatarlocation = location}
if (propic) {this.profilepic = propic}
if (image) {this.galleryimage = image}
if (caption) {this.caption = caption}
}

User.prototype = {
  avatarusername: '',
  avataremail: '',
  avatarlocation: '',
  profilepic: '',
  galleryimage: '',
  caption: '',
}

$('.submit').click(function(){
  console.log('We have a new user. YAY!!!');
    var name      = $('#usern').val();
    var email     = $('#emai').val();
    var location  = $('#loca').val();
    var propic    = $('#prop').val();
    var galimg    = $('#gali').val();
    var cap       = $('cap').val();

  var userperson = new User(name,email,location,propic,galimg,cap);

  userData.push(userperson);

var useravatartemplate = _.template($('.avatar-template').text());

 _.each(userData, function(user,index){
  $('.ceneteravatarcontainer').append(useravatartemplate(user));
 });


var usergallerytemplate = _.template($('.gallery-template').text());

 _.each(userData, function(user,index){
  $('.gallerytainer').append(usergallerytemplate(user));
 });

})
// practice URLs
// http://www.hdwallpapers3g.com/wp-content/uploads/2014/01/Images-1.jpg
// http://blog.gettyimages.com/wp-content/uploads/2012/10/NASCAR-Taladega-Chris-Graythen-Getty-Images-154895556-e1351523998575.jpg

// want to ask mason what I am doing incorrectly for the multiple images / user  
// {
//   avatarusername: 'Jeremyson',
//   avataremail: 'jcrawford.design@gmail.com',
//   avatarlocation: 'Greenville',
//   profilepic: 'http://lorempixel.com/150/150/',
//   images: [
//     {
//       url:'http://lorempixel.com/400/200/',
//       caption: 'this is a test img'
//     }, 
//     {
//       url:'http://lorempixel.com/400/200/',
//       caption: 'this is a test img'
//     }, 
//     {
//       url:'http://lorempixel.com/400/200/',
//       caption: 'this is a test img'
//     }
//   ]
// },


// creating the section that is used to create the user profile icons in the avatar banner
var useravatartemplate = _.template($('.avatar-template').text());

 _.each(userData, function(user,index){
  $('.ceneteravatarcontainer').append(useravatartemplate(user));
 });


var usergallerytemplate = _.template($('.gallery-template').text());

 _.each(userData, function(user,index){
  $('.gallerytainer').append(usergallerytemplate(user));
 });


 // _.each(userData, function(user,index){
 //  $('.gallery').children('.container').append(usergallerytemplate(user));
 // });

// this is the attempt at allowing people to submit a user and add photos

// this is the section that creates the galler from my database



// this is the section that is going to be used for the change states and more of the design work, instead of functionality
// this is the animation jquery for the caption slide over
$('.avatar').hover(function() {
  $(this).children('.caption').slideDown('slow')
});

