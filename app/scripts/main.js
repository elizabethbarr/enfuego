// this is the section that sets up the functionality

// this little section is setting up a small database for proof of concept purposes
userData = [
  {
    avatarusername: 'Bertman45',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
  {
    avatarusername: 'Jeremyson',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
  {
    avatarusername: 'Elizbarr',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
    {
    avatarusername: 'LingBoard',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  },
    {
    avatarusername: 'EnFuego',
    profilepic: 'http://lorempixel.com/150/150/',
    images: [
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }, 
        {
          url:'http://lorempixel.com/400/200/',
        }
      ]
  }
]
// fixed this to accept arrays for newl inputed usernames and images
// this is the constructor that is used to create new user objects in our database
function User (name,email,location,propic,image,cap) {
  if (name) {this.avatarusername = name}
  if (email) {this.avataremail = email}
  if (location) {this.avatarlocation = location}
  if (propic) {this.profilepic = propic}
  if (image && cap) {
    this.images = [{
      url: image,
      caption: cap
    }]
  }
}

User.prototype = {
  avatarusername: '' || 'Jimbo',
  avataremail: '' || 'No Email',
  avatarlocation: '' || 'Location',
  profilepic: '' || 'No Avatar',
  images: [
            {
              url: '',
              caption: '',
            }
          ] 
}

// this is used for a submission function that lets use grab the values in inputs, and then push those values into an constructor then push that into our database
$('.submit').click(function(){
  console.log('We have a new user. YAY!!!');
    var name      = $('#usern').val();
    var email     = $('#emai').val();
    var location  = $('#loca').val();
    var propic    = $('#prop').val();
    var galimg    = $('#gali').val();
    var cap       = $('#cap').val();

    var userperson = new User(name,email,location,propic,galimg,cap);
  
    userData.push(userperson);
  
    var useravatartemplate = _.template($('.avatar-template').text());
    var usergallerytemplate  = _.template($('.gallery-template').text());
  
    var lastFiveUsers = _.last(userData, 5);
  
    $('.avatar').remove();

    _.each(lastFiveUsers, function(avatar) {
    $('.ceneteravatarcontainer').append(useravatartemplate(avatar));
    });
    
    $('.galleryimgbox').remove();

    _.each(lastFiveUsers, function(avatar) {
      _.each(avatar.images, function(image, index){
      $('.gallerytainer').append(usergallerytemplate(image));
      });
    });

    $('.avatar').mouseover(function() {
      $(this).children('.caption').show()
    });

    $('.avatar').mouseout(function() {
      $(this).children('.caption').hide()
    });
//   var usergallerytemplate = _.template($('.gallery-template').text());

//    _.each(userData, function(user,index){
//     $('.gallerytainer').append(usergallerytemplate(user));
//    });

});
// practice URLs
// http://www.hdwallpapers3g.com/wp-content/uploads/2014/01/Images-1.jpg
// http://blog.gettyimages.com/wp-content/uploads/2012/10/NASCAR-Taladega-Chris-Graythen-Getty-Images-154895556-e1351523998575.jpg

// creating the section that is used to create the user profile icons in the avatar banner
var useravatartemplate = _.template($('.avatar-template').text());
var usergallerytemplate = _.template($('.gallery-template').text());

 _.each(userData, function(user,index){
  _.each(user.images, function(image, index){
    $('.gallerytainer').append(usergallerytemplate(image));
  });
  $('.ceneteravatarcontainer').append(useravatartemplate(user));
 });


 // _.each(userData, function(user,index){
 //  $('.gallery').children('.container').append(usergallerytemplate(user));
 // });

// this is the attempt at allowing people to submit a user and add photos

// this is the section that creates the galler from my database



// this is the section that is going to be used for the change states and more of the design work, instead of functionality
// this is the animation jquery for the caption slide over
$('.avatar').mouseover(function() {
  $(this).children('.caption').show()
});

$('.avatar').mouseout(function() {
  $(this).children('.caption').hide()
});

