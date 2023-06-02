alert("hi mommy")
alert("hi daddy")
alert("hehehehe")
alert("love you")
flag=1
function yey(){
  alert("thank you mommy")
  alert("thank you daddy")
  alert("love you")
}
function again(){
  if (flag==1){
    document.getElementById("ay").style.left="100px";
    document.getElementById("ay").style.top="500px";
    document.getElementById("please").innerHTML="please mommy"
    flag=2;
  }
  else if (flag==2){
    document.getElementById("ay").style.left="50px";
    document.getElementById("ay").style.top="400px";
    document.getElementById("please").innerHTML="please daddy"
    flag=3
  }
  else if (flag==3){
    document.getElementById("ay").style.left="40px";
    document.getElementById("ay").style.top="350px";
    document.getElementById("please").innerHTML="please mommy, para mas gumaling pa ako mag programming"
    flag=4
  }
  else if (flag==4){
    document.getElementById("ay").style.left="30px";
    document.getElementById("ay").style.top="370px";
    document.getElementById("please").innerHTML="please daddy, par mas madali po mag encode"
    flag=5
  }
  else if (flag==5){
    document.getElementById("ay").style.left="20px";
    document.getElementById("ay").style.top="400px";
    document.getElementById("please").innerHTML="please"
    flag=6
  }
  else if (flag==6){
    document.getElementById("ay").style.left="10px";
    document.getElementById("ay").style.top="300px";
    flag=7
  }
  else if (flag==7){
    document.getElementById("ay").style.left="5px";
    document.getElementById("ay").style.top="470px";
    flag=1
  }
}