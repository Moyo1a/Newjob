
// function red(){

    
//     // console.log(red)
//     document.getElementById("parent").style.color="red";

// }
// function green(){
//     // console.log(green)
//     document.getElementById("parent").style.color="green";
// }
// let parent = document.querySelector('#parent');
let button = document.querySelector('button');

// button.addEventListener('click',function(event){
// console.log('Button Clicked');
// document.body.style.color = "purple"

// });
document.querySelector('#parent').addEventListener('click', function(event){
// console.log('Accepted')
document.body.style.color= "red";

})
// document.getElementById('parent').onclick = changeColor;
// function changeColor(){
// document.body.style.color = "purple";
// if(changeColor){
//     alert("Succesful")
// }
// }


