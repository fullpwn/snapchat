let searchParams = new URLSearchParams(window.location.search)
searchParams.has('id') 
let userid = searchParams.get('id')
let username = atob(userid)
document.title = "Add " + username
document.getElementById("header_user").innerHTML = "Add @" + username
window.onload=document.getElementById("snapcode").src = "https://app.snapchat.com/web/deeplink/snapcode?username=" + username + "&type=SVG";

function addsnap() {
    location.replace("snapchat://add/" + username)
}
