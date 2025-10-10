let count:number
count=7678686;
console.log(count)

let lastName:string="Kianfar"
console.log(lastName)

function RRR(num1:number,num2:number):number{
   return num1*num2
}

console.log(RRR(3,3))


let itemsList:string[]=["pen","pencil","hghjg"];
console.log(itemsList)

let PersonalInfo:object={name:"sara",lastName:"amiri",age:567,edu:"mathematic",city:"sanadaj"}

function getKey(parametr:object){
   let Keys:string[]=Object.keys(parametr)
   return Keys
}

console.log(getKey(PersonalInfo))

function getValue(parametr:object){
   let Values:string[]=Object.values(parametr)
   return Values
}

console.log(getValue(PersonalInfo))

let bbb:string | number=65

let basket:{
   product:[{productName:string,id:number,price:number,inventory:number}],
   payment:[total:number,dicCount:number]
}={
   product:[{productName:"laptop",id:1234,price:67000000,inventory:456},
            
   ],
   payment:[82000000,10]
}
console.log(basket);

let basket2:{
   product:Array<{productName:string,id:number,price:number,inventory:number}>
   payment:Array<{total:number,dicCount:number}>
}={
   product:[{productName:"mouse",id:9807,price:780000,inventory:679}],
   payment:[{total:6767,dicCount:20}]
}


interface Animal{
   name:string
   sound:string
}

interface Dog extends Animal{
   race:string
}

let dog:Dog={
   name:'Papi',
   sound:'barking',
   race:'german'
}

console.log(dog)

interface Vehicle{
   model:string;
   move():string
}

interface car extends Vehicle{
   move():string
}

let Bugatti: car={
   model:"Bugatti",
   move(){
      return 'The Bugatti is moving.'
   }
}

console.log(Bugatti)
console.log(Bugatti.move());

interface user{
   name:string,
   age:number,
   id:number | undefined
}

function greet(user:user){
   console.log(`welcom dear ${user.name}`);
   
}

enum EventType{
   message1='Admission was successful.',
   message2='You must have an ID.'
}

function greet2(user:user){
   if(user.id===undefined) {
      return `dear ${user.name}, do not have an ID to accept.
              ${EventType.message2}`
   }else{
      return `welcome dear ${user.name}
              ${EventType.message1}`
   }
}

let user1={
   name:"Darin",
   age:567,
   id:777
}

greet(user1);

let user2={
   name:'Arad',
   age:145,
   id:undefined
}

console.log(greet2(user2))

let user3={
   name:'Arash',
   age:567,
   id:76867
}

console.log(greet2(user3))

type usersname={name:string}
type userId={id:number | undefined}
type userInfo= usersname & userId
type EventTypes='Admission was successful.' | 'You must have an ID.'

function greetingUsers(user:userInfo){
   if(user.id===undefined){
       let message:EventTypes='You must have an ID.'
         return `dear ${user.name}, do not have an ID to accept.
                 ${message} `
             
   }else{
        let message:EventTypes='Admission was successful.'
        return `welcome dear ${user.name}
              ${message}`
   } 
}

let user4:userInfo={
   name:"barbod",
   id:979978
}

console.log(greetingUsers(user4));


type IdCard=string | number

function SpecifyInputType(parameter:IdCard){
        console.log(typeof(parameter));        
}

let IdCard1:IdCard="jhjh233"
SpecifyInputType(IdCard1)

let IdCard2:IdCard=6558587698
SpecifyInputType(IdCard2)


