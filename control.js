
$(document).ready(function(){
	
	$("#fbShare").click(function(){
                          console.log('button');
                          FB.ui(
                            {

                              method: 'share',
                              href: selection,
                              }, function(response){

                                
                              });
                          });

});