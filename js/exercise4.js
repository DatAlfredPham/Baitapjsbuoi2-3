// Mô hình 3 khối 

// K1: Input 

// + Chiều dài: length
// + Chiều rộng: width


// K2:
// B1: tạo hàm, gắn hàm vào button 
// B2: trong hàm, tạo công thức tính 

// + area = length * width
// + circuit = ( length * width ) * 2


// K3: Output
// + Diện tích hình chữ nhật : area
// + Chu vi hình chữ nhật : circuit


function CalcAreaCircuit() {
    console.log("test4")

    var length = document.getElementById("inputLength").value;
    var width = document.getElementById("inputWidth").value;
    var area = 0;
    var circuit = 0;

    console.log(length, width);

    var area = Number(length) * Number(width);
    var circuit = ( Number(length) + Number(width)) * 2;

    console.log(area,circuit);

    document.getElementById("txtNotify4").innerHTML = "Diện tích:" + area + "<br> Chu vi:" + circuit;

}


document.getElementById("btnCalcAreaCircuit").onclick = CalcAreaCircuit;
