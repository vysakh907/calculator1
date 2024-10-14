const displayContent=(content)=>{
    box.value+=content
}
const showresult=()=>{
 try {
    box.value=eval(box.value )
 } 
 catch  {
    box.value="error"
    box.placeholder="syntax error..!"
 }   

}
const clearAll=()=>{
    box.value=''
}
const backspace=()=>{
    box.value=box.value.slice(0,-1)
}