var myColors = ['red', 'purple', '#E84751', 'blue', 'orange', '#323643'];
                
function clickMe(){
  var randomize = Math.floor(Math.random()*myColors.length);
  $('.box').css("background-color", myColors[randomize]);
}
.THEbtn{
  border: 1px solid #323643;
  border-radius: 50px;
 }

.box{
  margin-top: 10px;
  height: 300px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
 }
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<button class='THEbtn' onclick='clickMe()'>Click Me</button>

<div class='box'></div>