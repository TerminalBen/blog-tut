let person = {firstName : "ben",lastName :"ten",age:25}
person.firstName = "tom"


class cat {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let cat1 = new cat("tom",13);
let cat2 = cat1;
cat2.name="jerry"

console.log(cat1.name,cat2.name)