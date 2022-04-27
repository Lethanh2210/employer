export class Staff{
    name : string;
    email : string;
    age : number;
    constructor(name, email, age) {
        this.age = age;
        this.email = email;
        this.name = name;
    }
    getName() : string {
        return this.name;
    }
    setName(name : string) : void {
        this.name = name;
    }
    getEmail() : string {
        return this.email;
    }
    setEmail(email : string) : void {
        this.email = email;
    }
    getAge() : number {
        return this.age;
    }
    setAge(age : number) : void {
        this.age = age;
    }
}
