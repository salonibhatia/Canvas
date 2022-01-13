let canvas=document.getElementById('canvas');
        function addBoxes(){
         for(i=0;i<300;i=i+1){
          canvas.innerHTML += "<div class ='box' onclick ='fillCanvas(this);'></div>";
        }
        }
        
        addBoxes();
        let selectedColor= "PowderBlue";
        function fillCanvas(box){
          box.style.backgroundColor= selectedColor;
          box.style.backgroundColor=selectedColor; 
         select.style.backgroundColor=selectedColor;
        }
        
        function changeColor(colorBox){
            selectedColor = colorBox.style.backgroundColor;
          document.getElementById("selected").style.backgroundColor = selectedColor;
            }
         
        function eraseCanvas(){
          canvas.innerHTML="";
          addBoxes();
        }

        