

function add()
{
    var x = +document.getElementById("txt1").value;
    var y = +document.getElementById("txt2").value;
    var result;
    result = x+y;
    document.getElementById("result").innerHTML = "Result= "+result;
}

function sub()
{
    var x = +document.getElementById("txt1").value;
    var y = +document.getElementById("txt2").value;
    var result;
    result = x-y;
    document.getElementById("result").innerHTML = "Result= "+result;
}

function mul()
{
    var x = +document.getElementById("txt1").value;
    var y = +document.getElementById("txt2").value;
    var result;
    result=x*y;
    document.getElementById("result").innerHTML = "Result= "+result;
}

function div()
{
    var x = +document.getElementById("txt1").value;
    var y = +document.getElementById("txt2").value;
    var result;
    result=x/y;
    document.getElementById("result").innerHTML = "Result= "+result;
}


