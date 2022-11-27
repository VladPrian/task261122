abstract class Human{
    public name: String;
    constructor(name: String){
        this.name = name;
    }
}

class Student extends Human{
    private group:String;
    protected averageMark:Number;

    constructor(name:String,group:String,averageMark:Number){
        super(name);
        this.group = group;
        this.averageMark = averageMark;
    }


    getName(){
        return this.name;    
    }
    
    setName(name:String){
        this.name = name;    
    }

    getGroup(){
        return this.group;    
    }
    
    setGroup(group:String){
        this.group = group;    
    }

    getAverageMark(){
        return this.averageMark;    
    }
    
    setAverageMark(averageMark:Number){
        this.averageMark = averageMark;    
    }

    toJson(){
        return {
            "name":this.name,
            "group":this.group,
            "averageMark":this.averageMark
        }
    }

}


let st = new Student("st1","11d",6);

console.log(st.toJson());
