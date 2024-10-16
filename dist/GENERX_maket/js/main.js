let demo = document.getElementsByClassName("light")[0];
function rgbBack() {
if (demo.className === "light") {
    demo.className = "dark";
} else {
    demo.className = "light";
}



}

let newsWindow = document.getElementById('window');

function new_window() {
    
    if (newsWindow.style.display === "none") {
        newsWindow.style.display = "block"
    } else {
        newsWindow.style.display = "none"
    }
}

new_window()
    function opens() {
    newsWindow.style.display = "none";
        
    }

function closes() {
       newsWindow.style.display = "none";
    }



    //document.getElementById("demo").style.backgroundColor = "rgb(78, 101, 191)";
    //document.getElementById("qardblock").style.backgroundColor = "rgb(228, 236, 241 )";
    //document.getElementsByClassName("qard_block_two") = "rgb(228, 236, 241)";
    //document.getElementsByClassName("qard").style.backgroundColor = "rgb(0, 0, 0)";
    
    //document.getElementsByClassName("qard_date").style.Color =  "rgba(55, 132, 210, 1)";
/*function rgbBack() {
    let color1 = "rgb(78, 101, 191)";
    let color2 =  "rgba(16, 47, 95, 0.99)";
    let color3 = "rgb(228, 236, 241)";
    let color4 = "rgb(0, 0, 0)";
    let color5 = "rgb(255, 255, 255)";
    let color6 =  "rgba(55, 132, 210, 1)";
    let newqaed = document.getElementById("qardblock").style.backgroundColor;
    let elementstwo = document.getElementsByClassName("qard");
    let bodiColor = document.getElementById("demo").style.backgroundColor;
    let elements = document.getElementsByClassName("qard_block_two");
    let elementsone = document.getElementsByClassName("qard_date");
    
    if (bodiColor === color2 && newqaed ===  color4  ) {
        document.getElementById("demo").style.backgroundColor = color1;
        document.getElementById("qardblock").style.backgroundColor = color3;
        
       
    } else {
        document.getElementById("demo").style.backgroundColor = color2;
        document.getElementById("qardblock").style.backgroundColor = color4;
       
    }
   
    
    
    
    for ( let i = 0; i < elements.length; i++){
        if( elements[i].style.backgroundColor ===  color4){
        elements[i].style.backgroundColor = color3;
        } else {
            elements[i].style.backgroundColor = color4;
        }
    }
        for ( let i = 0; i < elementstwo.length; i++){
        if( elementstwo[i].style.backgroundColor === color4 ){
            elementstwo[i].style.backgroundColor = color5;
        } else {
            elementstwo[i].style.backgroundColor = color4;
        }
    }
    for ( let i = 0; i < elementsone.length; i++){
        if( elementsone[i].style.color === color1 ){
            elementsone[i].style.color = color4;
        } else {
            elementsone[i].style.color = color1;
        }
    }


   
}



/*function rgbBack() {
   
    let color1 = "  rgb(78, 101, 191)";
    let color2 = " #3784D2 100%";
    let colorLast1 =  "rgb(78, 101, 191)";// + "," + color2 + ")";
    let colorLast2 =  color2;
    
    if(  document.getElementById("demo").style.background === colorLast1){
        document.getElementById("demo").style.background = colorLast1;
         
    }else{
        document.getElementById("demo").style.background = colorLast2;
    }

    
  
    
}

color: rgb(78, 101, 191);

 //linear-gradient(180deg, rgba(16, 47, 95, 0.99) 0%, #3784D2 100%);*/



