
/*
class person{
  country = 'India';
  // address='pune'
 static address = 'mumbai'
static planet='Earth'
 constructor(name, age){
   this.name =name
   this.age= age
 }
 persondetail(){
  //use this keyword for class inside  variable
   console.log('this is ' +this.name+ 'and having age ' +this.age+ 'from ' +this.address) 
  
}
static printfulldetail(){
  console.log('this sachin having age 30 from nagar')
}

}
let ram = new person('rahul',30)
console.log(ram.address) // static variable accessble only by its class not its instanses output undefined
console.log(person.address)// output mumbai
 ram.persondetail() 
// person.persondetail() // not a function error
person.printfulldetail() // static method acceble only its class
 console.log(ram.country)// output mumbai
 ram.country ='USA'
 console.log(ram.country) // output/usa
console.log(person.planet)//earth
person.planet ='Mars'
console.log(person.planet)// static property change by only class

// private property not even acceble and not changble it is only readble
//and inside class only acceble aslo we have full control on property overide
class Player{
  #speciality = 'Keeper';
  battingStyle = 'Right handed';
  constructor(name, game){
      this.myName = name;
      this.myGame = game;
  }
  #PrintSpecilaity(){
      console.log('speciality is ' +this.#speciality);
  }
  
  getSpeciality(){
      this.#PrintSpecilaity()
       return this.#speciality
  }

   // method for changing the private property
   setSpeciality(speciality){
    if(speciality === 'finisher' | 'captain'){
        this.#speciality = speciality
    }
}
}
let dhoni = new Player('MS Dhoni', 'cricket');
console.log(dhoni.battingStyle);
dhoni.battingStyle = 'left handed';
console.log(dhoni.speciality);   //undefine output
console.log(dhoni.getSpeciality());
// dhoni.getSpeciality()
dhoni.setSpeciality('finisher');
console.log(dhoni.getSpeciality());
dhoni.setSpeciality('bowler');
console.log(dhoni.getSpeciality());
// this will be undefined hence the result will be 'not a function'
// dhoni.PrintSpecilaity()

*/

  

class player{

 #speciality ='Wk';
  constructor(name,game){
    this.myname= name
    this.mygame=game
  }
  #printspeciality(){
    console.log('speciality is ' +this.#speciality);
  }

  getspeciality(){
    this.#printspeciality()
    return this.#speciality  
  }
    // method for changing the private property
    setspeciality(speciality){
      if(speciality === 'finisher' | 'captain'){
          this.#speciality = speciality
      }
  }
  
}

let dhoni = new player('ms dhoni','cricket')
console.log(dhoni)// it give object with private property
console.log(dhoni.speciality)// undifined
console.log(player.speciality)//undefined

// console.log(dhoni.printspeciality()) // not a function
//dhoni.Printspecilaity()// this is undefined print not a function
console.log(dhoni.getspeciality())//get access through internal method to private method
dhoni.setspeciality('finisher')
console.log(dhoni.getspeciality())
dhoni.setspeciality('bowler')
console.log(dhoni.getspeciality())





/*
class Person{
    // static country = 'Earth'
    country = 'India'
    static planet = 'Earth'
   constructor(name, address){
    this.myName = name,
    this.myAddress = address
   }
   printFullAddress(){
  
    console.log(this.myName + ' lives in ' +this.myAddress + this.country);
   }
   static PrintFullDetails(){
       console.log('This is a person class which allows you to create a person');
   }
}
let av = new Person('Abhinav', 'Delhi');
// console.log(av);
// console.log(av.country);
// av.printFullAddress();
// av.country = 'USA'
// av.printFullAddress();
// console.log(av.planet);
// av.PrintFullDetails();
// console.log(Person.planet);
// Person.planet = 'MArs';
// console.log(Person.planet);
Person.PrintFullDetails()
// let ram = new Person('Ram', 'Ayodhya');
// console.log(ram);
// console.log(ram.country);
// ram.country = 'USA';
// console.log(ram.country);
*/

// makes a private



//
