function strip(input){
    var pattern = /(.*?)@.*?/
    var output = input.match(pattern);
    var result =  output && output[1] ? output[1] : ""   //how can I strip everything after the @ ??
    console.log("Input--> " + input + "  Output --> " + result);
}

strip("john@email.com");
strip("@email.com");
strip("email.com");
strip("john@");