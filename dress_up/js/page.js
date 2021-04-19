window.onload=init;

function init() {
    console.log("window has loaded");
    state.i=1;
}

var state = {
    i : 0,
};

function next_top() {
    console.log("inside function next_top");
    console.log(state.i);
    var top=document.getElementById("clothes");
    if(state.i===0){
    top.setAttribute("class","pink_shirt");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===1){
    top.setAttribute("class","purple_shirt");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    top.setAttribute("class","yellow_shirt");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===3){
    top.setAttribute("class","black_shirt");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===4){
    top.setAttribute("class","flower_shirt");
        state.i++;
        console.log(state.i);
    }
    else
     if(state.i===5){
    top.setAttribute("class","a_shirt");
         state.i=0;
    }

}
