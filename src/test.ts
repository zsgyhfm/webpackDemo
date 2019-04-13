class Person{
    public name:string
    constructor(name:string){
        this.name = name;
    }
    show():string{
        console.log(this.name)
        return this.name;
    }
}
export default Person;