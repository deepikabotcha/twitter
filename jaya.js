function me(){
    document.getElementById("demo").innerHTML=document.getElementById("")
   }
   var toggle=true;
        function likesClick() {
            if(toggle===true){              
            
            let noOfLinkes = document.getElementById("likesCount").innerHTML;
            document.getElementById("like1").src = "redLike.jpeg"
           
            document.getElementById("likesCount").innerHTML = parseInt(noOfLinkes) + 1
            }
            else{
                let noOfLinkes = document.getElementById("likesCount").innerHTML;
            document.getElementById("like1").src = "like.jpeg"
           
            document.getElementById("likesCount").innerHTML = parseInt(noOfLinkes) -1
            }
            toggle = !toggle;
        }
        var toggle=true;
        function likessClick() {
            if(toggle===true){              
            
            let noOfLinkes = document.getElementById("likesCount").innerHTML;
            document.getElementById("like2").src = "redLike.jpeg"
           
            document.getElementById("likessCount").innerHTML = parseInt(noOfLinkes) + 1
            }
            else{
                let noOfLinkes = document.getElementById("likesCount").innerHTML;
            document.getElementById("like2").src = "like.jpeg"
           
            document.getElementById("likessCount").innerHTML = parseInt(noOfLinkes) -1
            }
            toggle = !toggle;
        }
        var modal = document.getElementById("myModal");


        var btn = document.getElementById("myBtn");
        
        
        var span = document.getElementsByClassName("close")[0];
        
        
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        
        function me(){
          document.getElementById("demo").innerHTML=document.getElementById("")
        }
        
        function me (){
          document.getElementById("demo").innerHTML=document.getElementById("")
        }
        
        
        
         
        
        
        
        
  
  // Get the button that opens the modal
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
  modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
  var modal = document.getElementById("Mymodal1");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn1");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close1")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
  modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
  
  var modal = document.getElementById("myModal2");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn2");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
  modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
  modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  }
  
  