class Student extends Human{
    public name: String;
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
}