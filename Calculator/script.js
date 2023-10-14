function display(value) {
    document.getElementById("ans").value+= value;
}
function del() {
    var ans=document.getElementById("ans");
    var num=ans.value;
    ans.value= num.slice(0,num.length-1);
}
function calculate() {
    var exp = document.getElementById("ans").value;
    var res = eval(exp);
    document.getElementById("ans").value = res;
}
function clearit() {
    document.getElementById("ans").value = "";
}