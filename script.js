function wyczysc()
{
    document.getElementById("wyswietlacz").innerHTML = "0";
}
function removeZero()
{
    var value = document.getElementById("wyswietlacz").innerHTML;
    if (value=="0") 
    {
        value=" "
        document.getElementById("wyswietlacz").innerHTML=value;
    }
}
function procent() 
{
    removeZero()
    var value = document.getElementById("wyswietlacz").innerHTML;
    value = value / 100;
    document.getElementById("wyswietlacz").innerHTML = value;
}

function oblicz()
{
    removeZero()
    var equation = document.getElementById("wyswietlacz").innerHTML
    var solved = eval(equation)
    document.getElementById("wyswietlacz").innerHTML=solved;
}

function wyswietl(value) 
{
   removeZero()
    document.getElementById("wyswietlacz").innerHTML += value;
}