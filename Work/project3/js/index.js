function do1(){
    document.getElementById("p1").style.color="red";
}

function do2(){
    var date = new Date();
    var a = "-";
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day= date.getDate();
    if (month>=1 && month<=9){
        month="0"+month;
    }
    if (day>=1 && day<=9){
     day+="0"+day;
    }
    s=year+a+month+a+day;
    document.getElementById("h1").innerHTML=s;
}

function do3(){
    var a=document.getElementById("p1").parentNode;
    a.className += " " +"fn-active";
}

function do4(){
    var child=document.getElementById("p8");
    child.remove();
} 

function do5(){
    window.open("https://www.taobao.com");
}

function do6(){
    var parent= document.getElementById('ul');
    var element1 = document.createElement("p9");
    element1.innerHTML="p9";
    parent.appendChild(element1);

}

function do7(){
    var width = window.innerWidth;
    document.getElementById('class1').style.width=width;
}

function doall(){
    var obj=document.elementFromPoint(event.clientX,event.clientY);
    var a=obj.innerText;
    a=a.replace("p","");
    alert(a);
}