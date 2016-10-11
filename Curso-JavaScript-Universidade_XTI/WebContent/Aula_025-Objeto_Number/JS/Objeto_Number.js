var teste = 120.35;
alert(typeof(teste));

var n = new Number(130.70);

alert(typeof(n));  

var n2 = new Number("140.80"); 

alert(n2);


var n3 = new Number("150");
alert(Number.MAX_VALUE);
alert(Number.MIN_VALUE);
alert(Number.NaN); 
alert(Number.NEGATIVE_INFINITY);
alert(Number.POSITIVE_INFINITY);

var n4 = new Number("120.35123");

alert(n4.toFixed()); 
alert(n4.toFixed(2));

alert("toPrecision");

alert(n4.toPrecision()); 


alert(n4.toPrecision(1)); 

alert(n4.toExponential()); 