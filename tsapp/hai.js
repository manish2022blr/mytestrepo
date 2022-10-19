class Person {
    get age() {
        console.log('getter');
        return this._age;
    }
    set age(age1) {
        console.log('setter');
        if (age1 <= 17 || age1 > 40) {
            throw 'Age is invalid';
        }
        this._age = age1;
    }
}
let p1 = new Person();
p1.age = 23;
console.log(p1.age);
