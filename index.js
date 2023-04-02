// Add your Circle class here


class Circle {



 constructor(radius){



    this.radius  = radius;
    /// initialises our instance with radius
   //
   // In JavaScript, this.radius = radius; is an assignment 
   //statement inside the constructor of a class.


   //this.radius = radius; is setting the radius property of the
   // instance to the value passed to the constructor, which is used to calculate the diameter, 
   //circumference, and area of the circle.

 }

  get diameter(){

   return  this.radius * 2;

  }


  get circumference(){

   return Math.PI * this.diameter;

 //  in JavaScript, get circumference() is a getter method of the 
 //Circle class that calculates and returns the circumference of the
 // circle based on its radius, using the formula circumference = 2 * pi * 
  //radius where pi is Math.PI and radius is this.radius.

  }

 get area(){


    return  Math.PI * (this.radius ** 2);



 }


 set  diameter(value){


  // we want to modify the instance of of our class diameters using set method

  this.radius = value / 2 ;
 }



 set circumference(value){

 

    this.radius  = value  / (2 * Math.PI);


 }

 set  area(value){

    this.radius = Math.sqrt(value / Math.PI);



 }

}