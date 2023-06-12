class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    isInStock(){
        if(this.quantity > 0){
            return "Còn hàng"
    }else if(this.quantity < 0){
        return "Ngáo hả"
    }else{
        return "Không còn hàng"
    }
}
}

class Mobile extends Product{
    constructor(name, price, brand,quantity){
            super(name, price, quantity);
            this.brand = brand;
        }
    getBrand(){
        return this.brand;
    }
}

var IP1 = new Mobile("Iphone 14 pro max 128GB", "26.640.000", "Apple");

console.log(IP1.getBrand());
console.log(IP1.isInStock());