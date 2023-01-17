let op="";
let flag=0;
let div=0;
let multiply=0
let addition=0
let substract=0
let op1;
let op2;
function one(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-1");
    op=dis.innerHTML;
    
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}

function two(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-2");
    op=dis.innerHTML;
    
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}

function three(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-3");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function four(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-4");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function five(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-5");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function six(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-6");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function seven(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-7");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function eight(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-8");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function nine(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-9");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function zero(){
    let dis=document.getElementById("display");
    let one=document.getElementById("box-10");
    op=dis.innerHTML;
    op+=one.innerHTML;
    dis.innerHTML=op;
    op=op.replaceAll(" ","");
    console.log(op)
}
function clear(){
    let dis=document.getElementById("display");
    dis.innerHTML=0;
    
}
function divide(){
     op1=Number.parseInt(op);
    let dis=document.getElementById("display");
    dis.innerHTML=0;
      div=1;
}
function mul(){
    op1=Number.parseInt(op);
   let dis=document.getElementById("display");
   dis.innerHTML=0;
     multiply=1;
}
function sub(){
    op1=Number.parseInt(op);
   let dis=document.getElementById("display");
   dis.innerHTML=0;
     substract=1;
}
function add(){
    op1=Number.parseInt(op);
   let dis=document.getElementById("display");
   dis.innerHTML=0;
     addition=1;
}
function equal(){
    op2=Number.parseInt(op);
    if(div==1){
        let dis=document.getElementById("display");
    dis.innerHTML=op1/op2;
    }
    else if(multiply==1){
        let dis=document.getElementById("display");
    dis.innerHTML=op1*op2;
    }
    else if(substract==1){
        let dis=document.getElementById("display");
    dis.innerHTML=op1-op2;
    }
    else if(addition==1){
        let dis=document.getElementById("display");
    dis.innerHTML=op1+op2;
    }
    else{
        let dis=document.getElementById("display");
    dis.innerHTML="INVALID"
    }
    
}