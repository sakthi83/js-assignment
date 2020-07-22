<script>
        function even_odd(){
            var num =   document.getElementById('number').value;

            if ( num % 2){
                document.getElementById('result').innerHTML = "Entered Number is Odd";
            }
            else{
                document.getElementById('result').innerHTML = "Entered Number is Even";
            }
        }
    </script>
</head>
<body>
    <center>
        <div id="error"></div>
        <center>
            <h2> Find Given Number is Even or Odd </h2>
            <p>Enter a value</p>
            <input type="text" id="number" />
            <button onclick="even_odd();">Check</button><br />
            <div id="result"><b></b></div>
        </center>
    </center>
</body>