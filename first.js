
var section=document.getElementsByClassName('sec-1');
function sideBar() {
    document.getElementById('side').style.width="20%";
    
    document.getElementById("sec-1").style.width="75%";
    document.getElementById("sec-1").style.marginLeft="25%";
    
}
function closeNav() {
    document.getElementById('side').style.width="0";
    document.getElementById("sec-1").style.width="";
    document.getElementById("sec-1").style.marginLeft="";
}