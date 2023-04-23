// Mô hình 3 khối 

// K1: Input 

// num1, num2, num3, num4, num5


// K2:
// B1: tạo hàm, gắn hàm vào button 
// B2: trong hàm, tạo công thức tính 

// average = (num1 + num2 + num3 + num4 + num5) / 5


// K3: Output
// Average : trung bình cộng của 5 số


function calcAvg() {
    console.log("test2");
    var num1 = document.getElementById("inputNum1").value;
    var num2 = document.getElementById("inputNum2").value;
    var num3 = document.getElementById("inputNum3").value;
    var num4 = document.getElementById("inputNum4").value;
    var num5 = document.getElementById("inputNum5").value;
    var average = 0;

    console.log(num1, num2, num3, num4, num5)

    var average = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    console.log(average);

    document.getElementById("txtNotify2").innerHTML = "Giá trị trung bình của 5 số là: <br>" + average;

}

document.getElementById("btnCalcAvg").onclick = calcAvg;