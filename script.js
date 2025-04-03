let inputNum;
let parseNum;
let remainder;

document.getElementById("buttonSubmit").onclick=function() {
    inputNum = document.getElementById("inputNumber").value;
    parseNum = parseFloat(inputNum);
    remainder = parseNum % 2;
    if (Number.isInteger(parseNum) && inputNum == parseNum) {
        if (remainder == 0) {
            document.getElementById("labelResults").innerHTML = parseNum + " is an Even Number";
        } else {
            document.getElementById("labelResults").innerHTML = parseNum + " is an Odd Number";
        }
    } else {
        document.getElementById("labelResults").innerHTML = "Please submit an Integer";
    }
}

document.getElementById("buttonClear").onclick=function() {
    document.getElementById("inputNumber").value = "";
    document.getElementById("labelResults").innerHTML = "Results:";
}
