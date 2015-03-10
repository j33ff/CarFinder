
  window.fbAsyncInit = function() {
      FB.init({
        appId      : '777151225682067',
        xfbml      : true,
        version    : 'v2.2'
      });
      $("#login").click(function(){
          FB.login(function(response) {

            $("#login").hide();
             


              

          });


  
      });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

