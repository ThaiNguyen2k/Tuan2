let originalString = "Lop Hoc Web cua KITS"

console.log("Độ dài chuỗi: " + originalString.length)

console.log("Lấy chữ Web: " + originalString.slice(8,11))

console.log("Thay ký tự trống thành dấu ,: " + originalString)

function isDev(originalString) {
    return originalString.includes("Dev")
}

isDev(originalString)

var i = 20;

function isPrime(i){
    if (i <= 1) {
        console.log(i + " không là số nguyên tố")
        return false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                console.log(i + " không là số nguyên tố")
                return false;
            }
        }
        console.log(i + " là số nguyên tố")
        return true;
}
}

isPrime(i)

function expres(n){
    let a = 0;
    for (let j = 1; j <= n; j++){
        a = a + j/n
    }
    console.log(a)
}
 expres(i)

 function doimau(){
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    div1.addEventListener("click", function(){
        document.body.style.backgroundColor= "blue"
    })
    div2.addEventListener("click", function(){
            document.body.style.backgroundColor= "red"
        })
 }
 doimau()