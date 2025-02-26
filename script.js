var index = 0;
    
    function changeColors(){
        var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

        document.getElementsByTagName("body")[0].style.backgroundColor = colors[index++];

        if(index >= colors.length - 1){
            index = 0;
        }
    }