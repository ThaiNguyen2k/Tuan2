let contents = document.getElementsByClassName("content");
for(let i = 0; i < contents.length; i++) {
    contents[i].addEventListener("click", function(e){
        clickEvent(e);
    });
}
function cancelBtn() {
    document.getElementById("form").reset();
}

function closeBtn() {
    document.getElementById("top").style.display = "none";
}
function openSett() {
    document.getElementById("top").style.display = "initial";

}

function clickEvent(e) {
    for(let i = 0; i < contents.length; i++){
        contents[i].style.color = "black";
    }
    e.currentTarget.style.color = "green";
}
function reset(){
    document.getElementById("test").style.fontWeight="normal";

}