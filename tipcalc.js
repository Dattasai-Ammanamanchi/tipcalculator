let calcbtn=document.getElementById("calc");

calcbtn.addEventListener("click",function(){
    let bill =document.getElementById("bill");
    let tippercentage =document.getElementById("tipper");
    document.getElementById("tip").value=bill/tippercentage;
    /*console.log("tippercentage");*/
    tip=document.getElementById("tip");
    document.getElementById("billamount").value=bill+tip;

})