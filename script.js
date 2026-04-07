const input = document.querySelector(".display");
const btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("click",()=>{
        if(btn.innerText==="C"){
            clearDisplay()
        }else if(btn.innerText==="="){
            evalResult();
        }else{
            displayNum(btn.innerText)
        }
    });
}
function clearDisplay(){
    input.value='';
};
function evalResult(){
    let res = eval(input.value)
    input.value=res;
    
};
function displayNum(val){
    input.value += val;
};