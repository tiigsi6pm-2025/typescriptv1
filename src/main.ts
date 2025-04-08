

// variable
let x= 10
    x=30.098
let y:string="bsdb"

let z:number=50
    

let data:number[] = [3,4,5,5]
let users:string[] = ["ahemd","amaxamed","nuura" ]
let person:(string|number)[]=["ahemd",50]

//tuble
let k:[string,number]=["hello",8]

//enum
enum Role{
    guest,
    admin,
    superAdmin
}
let employe:Role=Role.admin


//any 
let d:any=40
   d="hello"

function great(meesage:string):void{
    console.log( meesage)
}

great("hello")

let w:null=null

interface student{
    name:string,
    phone:number,
    grade:number,
    addres:string
}


let students:{ name:string ,phone:number,grade:number} ={ name:"yusuf",phone:64635,grade:8,}