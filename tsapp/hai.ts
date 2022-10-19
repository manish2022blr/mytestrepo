class Person{
    private _firstName: string;
    private _age: number;

    public get age(){
        console.log('getter');
        return this._age;
    }
    public set age(age1: number){
        console.log('setter');
        if(age1 <=17 || age1 > 40){
            throw 'Age is invalid';
        }
        this._age = age1;
    }
}

let p1: Person = new Person();
p1.age=23;
console.log(p1.age);