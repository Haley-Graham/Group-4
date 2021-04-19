window.onload=init;
var state = {
    i : 0
};

function init()
{
    console.log("window has loaded");
    state.i=1;
    
}

function next_top()
{
    console.log("inside function next_top");
    console.log(state.i);
    var dress=document.getElementById("shirts");
    if(state.i===0){
    shirts.setAttribute("class","black_shirt");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    shirts.setAttribute("class","flower_shirt");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    shirts.setAttribute("class","flower_shirt");
         state.i=0;
    }

}
