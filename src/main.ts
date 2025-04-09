

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


let students:{ name:string ,phone:number,grade?:number} ={ name:"yusuf",phone:64635, grade:8}

interface std{
    name:string,
    phone:number,
    gender?:boolean
}
let arday:std ={name:"yacquub",phone:5783737}

type emp={
    name:string,
    phone:string|number,
    title:string|null
}
  let shql:emp= { name:"kaafiya",phone:463783 ,title:"" }

//partial 
let mng: Partial<emp>={name:"ysuuf",phone:"74733"}

// read only   
const api: Readonly<{url:string}> ={url:"api route"}
//pick
type mrk= Pick<emp,"name"|"phone">

const test:mrk={name:"chdfkjh",phone:9383663}
//omit
type deletOne= Omit<emp,"name">


const userOne:deletOne={phone:464632,title:"heloo"}

// functions
function Greating(Name:string):string{
 return ` hello ${Name}`
}
Greating("ysusu")

let Q= function(){

}

let add:(a:number,b:number)=>number = (a,b)=>{
 return a+b
}
