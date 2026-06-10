console.log("Hello");
const first=1;
const second=2;
console.log(first);
const str="Shakthi";
console.log(str);
const fruits=["Apple","Banana","Mango"];
console.log(fruits[0]);
fruits[1]="Grapes";
console.log(fruits);
const arr=[1,"Shakthi",false,2.4];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//const four=document.getElementById("ptag");
//four.innerHTML="This is myy fourth class";
function newFunction(){
    console.log("This is a new function");
}

const input=document.getElementById("eventlistener");
const output=document.getElementById("Ptag");
input.addEventListener("input",()=>{
    output.textContent=input.value;
});
const newvar=document.createElement("h1");
newvar.textContent="This is a new paragraph";
document.body.appendChild(newvar);
newvar.remove();