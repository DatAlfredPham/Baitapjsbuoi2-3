// Mô hình 3 khối 

// K1: Input 

// + unitPrice, numDay


// K2:
// B1: tạo hàm, gắn hàm vào button 
// B2: trong hàm, tạo công thức tính 


//  salary = unitPrice * numDay 


// K3: Output
// salary 


function calcSalary() {
    console.log("test1")

    // Lấy giá trị từ form 
    var unitPrice = document.getElementById("inputUnitPrice").value;
    var numDay = document.getElementById("inputNumDay").value;
    var salary = 0;

    console.log(unitPrice, numDay);

    var salary = unitPrice * numDay;

    console.log(salary);

    document.getElementById("txtNotify1").innerHTML = "Tổng tiền lương là: <br>" + salary;

}

document.getElementById("btnCalcSalary").onclick = calcSalary;