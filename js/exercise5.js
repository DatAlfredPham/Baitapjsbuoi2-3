// Mô hình 3 khối 

// K1: Input 

// số có 2 chữ số 
// num2digit


// K2:
// B1: tạo hàm, gắn hàm vào button 
// B2: trong hàm, tạo công thức tính 

// + lấy số hàng chục

// var ten = Math.floor(num2digit/10);

// + lấy số hàng đơn vị

// var unit = ten % 10;

//var total2digit = ten + unit


// K3: Output
// Tổng 2 ký số : total2digit


function calcTotal2digit() {
    console.log("test5");
    var num2digit = document.getElementById("inputNum2digit").value;
 
    var total2digit = 0;

    console.log(num2digit)

    var ten = Math.floor(num2digit/10);
    var unit = num2digit % 10;

    console.log(ten, unit)

    var total2digit = Number(ten) + Number(unit);

    console.log(total2digit);

    document.getElementById("txtNotify5").innerHTML = "Tổng của 2 ký số là: <br>" + total2digit;

}

document.getElementById("btnCalcTotal2digit").onclick = calcTotal2digit;
