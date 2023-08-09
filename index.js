function fun1(){
   var principal=Number(document.getElementById("principal").value);
   var interest=Number(document.getElementById("interest").value);
   var tenure=Number(document.getElementById("tenure").value);
   var simpleInterest=principal*tenure*interest/100;

  var output= document.getElementById("output");
  output.innerHTML=simpleInterest;


}
