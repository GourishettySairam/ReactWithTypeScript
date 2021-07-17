export function log(str: string){
    console.log(str);
}

class A {
    greeting = "Hello world";
    // constructor() {
    //     this.greeting = "";
    // }
}

log(new A().greeting);
