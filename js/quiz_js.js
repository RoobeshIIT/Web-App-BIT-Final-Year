// results popped up in a message
function pop(total,popup) {
    if(popup === false) {
           document.getElementById("mbox").style.display = "block";
   if (total > 10) {
           document.getElementById("mbox").style.backgroundColor = "#66ff66"
           document.getElementById("results").innerHTML = "<h2>WELL DONE BUD!</h2><p>You have scored&nbsp;" + total + " marks for the quiz.";
   } else {
           document.getElementById("results").innerHTML = "<h2>OH NO OH NO OH NO!</h2><p>You failed but try again " + total + " marks for the quiz.";
}
popup = true
} else {
   document.getElementById("mbox").style.display = "none";
   // location.replace("../docs/home.html")
   popup = false
}   

        document.getElementById("quiz").scrollIntoView();
}
function quiz(){
 clearInterval(counter);
 total=0;
// question 01 answer   
 if (document.getElementById("1a").checked){
         total+=2;
 } else{
         total-=1
 }
// question 02 answer    
 if (document.getElementById("2c").checked){
         total+=2;
 } else{
         total-=1
 }
// question 03 answer
 if (document.getElementById("3d").checked){
         total+=2;
 } else{
         total-=1
 }
// question 04 answer
 if (document.getElementById("4a").checked){
         total+=2;
 } else{
         total-=1
 }
// question 05 answer
 if (document.getElementById("5b").checked){
         total+=2;
 } else{
         total-=1
 }
// question 06 answer
 if (document.getElementById("v4").checked){
         total+=2;
 } else{
         total-=1
 }
// question 07 answer
 if (document.getElementById("w3").checked){
         total+=2;
 } else{
         total-=1
 }
// question 08 answer
 if (document.getElementById("x3").checked){
         total+=2;
 } else{
         total-=1
 }
// question 09 answer
 if (document.getElementById("y3").checked){
         total+=2;
 } else{
         total-=1
 }
// question 10 answer
 if (document.getElementById("z3").checked){
         total+=2;
 } else{
         total-=1
 }
 pop(total,false);
}  

function startTimer(time) {
        counter = setInterval(timer, 1000);
        function timer() {
                document.getElementById("timer-time").textContent = time;
            time--;
            timeValue = time;
            if (time <= 0) {
                timeTaken = 60 - timeValue;
               
                clearInterval(counter);
                //stopTimer(counter);
                
                quiz()
            }
        }
    }
    
    function go(){
        var a = document.getElementById("start");
        var b = document.getElementById("ques");
        a.style.display ="none";
        b.style.display ="block";
        startTimer(60);
}
   