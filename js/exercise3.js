// Mô hình 3 khối 

// K1: Input 

// numUsd


// K2:
// B1: tạo hàm, gắn hàm vào button 
// B2: trong hàm, tạo công thức tính 

// numVND = numUsd * 23500


// K3: Output
// numVnd


function calcExchange() {
    console.log("test3")
    var numUsd = document.getElementById("inputUsd").value;
    var rate = 23500;
    var numVND = 0;

    console.log(numUsd, numVND);

    var numVND = numUsd * rate;
    
    console.log(numVND);

   
    document.getElementById("txtNotify3").innerHTML = numVND + "VNĐ";

}

document.getElementById("btnCalcExchange").onclick = calcExchange;



