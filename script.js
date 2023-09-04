var istatus= document.querySelector("h1")

var addbutton= document.querySelector("#add")
// var removebuton =document.querySelector("#remove")


var check =0

addbutton.addEventListener("click",function(){

    if(check == 0){
        istatus.innerHTML="Friend"
        istatus.style.color="green"
        addbutton.innerHTML="Remove Friend"
        check=1
    }else{
        istatus.innerHTML="Add in your profile"
        istatus.style.color="red"
        addbutton.innerHTML="Add Friend"
        check=0
    }
    
})

// removebuton.addEventListener("click",function(){
//     istatus.innerHTML="Add in your profile"
//     istatus.style.color="red"
// })