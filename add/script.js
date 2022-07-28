let searchParams = new URLSearchParams(window.location.search)
searchParams.has('id') 
let userid = searchParams.get('id')
let username = atob(userid)
document.title = "Add " + username
document.getElementById("header_user").innerHTML = "Add @" + username

function addsnap() {
    location.replace("snapchat://add/" + username)
}
setTimeout(function (){
  
    const image = document.getElementById('snapcode');

image.src = "https://app.snapchat.com/web/deeplink/snapcode?username=" + username + "&type=SVG";
              
  }, 1000)
