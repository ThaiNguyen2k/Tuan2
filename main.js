const sum = (a, b) => {
    return a * b;
}
console.log(sum(3, 4));

const check = (i) => {
    if (i % 2 === 0) {
        return "Số chẵn"
    }
    return "Số lẻ";
}

// console.log(check(3));

const ten = "Nguyên"
function hello(ten) {
    console.log("Xin chào " + ten);
}

// hello(ten);

const age = 4
function hello2() {
    console.log("Xin chào " + ten + " " + age + " " + "tủi");
}

// hello2();


function xdiem(diem) {

    switch (true) {
        case diem < 5:
            document.write("Không đạt")
            break;
        case diem >= 5 && diem <= 6.5:
            document.write("Đạt")
            break;
        case diem >= 6.5 && diem <= 8:
            document.write("Khá")
            break;
        case diem >= 8 && diem <= 10:
            document.write("Giỏi")
            break;
        default:
            document.write("Không Hợp Lệ")

    }

}

// xdiem(6);

function bt1(i) {
    for (let x = 0; x <= i; x++) {
        document.write(x + " ");
    }
}
// bt1(10)

function tinhtong(i) {
    var tong = 0;
    for (let x = 0; x <= i; x++) {
        tong = tong + x;
    }
    document.write(tong)
}

// tinhtong(100)

function x9() {
    for (let i = 1; i <= 10; i++) {
        document.writeln(`9 x ${i} = ${9 * i}`);
    }
}

// x9();

function changeName(){
    document.getElementById("myName").innerHTML = "Hi Nguyên"
}
function rechange(){
    document.getElementById("myName").innerHTML = "My name"
}
function changecolor(){
    document.getElementById("myName").style.color="blue"
}