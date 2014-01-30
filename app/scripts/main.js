userData = [
  {
    avatarusername: 'Bertman45',
    avataremail: 'bertman45@gmail.com',
    avatarlocation: 'Greenville',
    image: 'https://lh6.googleusercontent.com/-jaKUk5hHDfo/AAAAAAAAAAI/AAAAAAAAAAA/Ku-ZY_hmtwE/s48-c-k-no/photo.jpg'
  },
  {
    avatarusername: 'Jeremyson',
    avataremail: 'jcrawford.design@gmail.com',
    avatarlocation: 'Greenville',
    image: 'https://lh6.googleusercontent.com/-jaKUk5hHDfo/AAAAAAAAAAI/AAAAAAAAAAA/Ku-ZY_hmtwE/s48-c-k-no/photo.jpg'
  },
  {
    avatarusername: 'Elizbarr',
    avataremail: 'elizbarr@gmail.com',
    avatarlocation: 'Greenville',
    image: 'https://lh6.googleusercontent.com/-jaKUk5hHDfo/AAAAAAAAAAI/AAAAAAAAAAA/Ku-ZY_hmtwE/s48-c-k-no/photo.jpg'
    // images: [
    //   {
    //     url:''
    //   },
    //   {
    //     url:''
    //   },
    // ]    
  }
]
 
var useravatartemplate = _.template($('.avatar-template').text());

 _.each(userData, function(user,index){
  $('.ceneteravatarcontainer').append(useravatartemplate(user));
 });


$('.avatar').hover(function() {
  $(this).children('.caption').slideDown('slow')
});