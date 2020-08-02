/* add an element */
var x = 0;
var array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}
/*remove an elemnt from list*/
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  //Usage
  console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
  console.log(removeItemAll([2,5,9,1,5,8,5], 5))
  // Retrieve your data from locaStorage
var saveData = JSON.parse(localStorage.saveData || null) || {};

// Store your data.
function saveStuff(obj) {
  saveData.obj = obj;
  // saveData.foo = foo;
  saveData.time = new Date().getTime();
  localStorage.saveData = JSON.stringify(saveData);
}

// Do something with your data.
function loadStuff() {
  return saveData.obj || "default";
}
/* program for stopwatch */
var Stopwatch = function(elem, options) {

    var timer       = createTimer(),
        startButton = createButton("start", start),
        stopButton  = createButton("stop", stop),
        resetButton = createButton("reset", reset),
        offset,
        clock,
        interval;
  
    // default options
    options = options || {};
    options.delay = options.delay || 1;
  
    // append elements     
    elem.appendChild(timer);
    elem.appendChild(startButton);
    elem.appendChild(stopButton);
    elem.appendChild(resetButton);
  
    // initialize
    reset();
  
    // private functions
    function createTimer() {
      return document.createElement("span");
    }
    function createButton(action, handler) {
        var a = document.createElement("a");
        a.href = "#" + action;
        a.innerHTML = action;
        a.addEventListener("click", function(event) {
          handler();
          event.preventDefault();
        });
        return a;
      }
    
      function start() {
        if (!interval) {
          offset   = Date.now();
          interval = setInterval(update, options.delay);
        }
      }
    
      function stop() {
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      }
    
      function reset() {
        clock = 0;
        render();
      }
    
      function update() {
        clock += delta();
        render();
      }
    
      function render() {
        timer.innerHTML = clock/1000; 
      }
    
      function delta() {
        var now = Date.now(),
            d   = now - offset;
    
        offset = now;
        return d;
      }
    
      // public API
      this.start  = start;
      this.stop   = stop;
      this.reset  = reset;
    };
    
  
