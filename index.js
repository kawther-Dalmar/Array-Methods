 const marks = [40,50,60,70,80,90];

          //map()
const mapped =  marks.map(mark => mark + 5);
 console.log(marks)
 console.log(mapped)

                    //filter()
 const filterd = marks.filter(mark => mark == 40 || mark == 70 || mark == 90)
console.log(filterd);

                 //join

const arr0 = ["Some","Words","Are","Here"];
console.log(arr0.join(' '))


                   //Sort()

// const arr = [1,2,3,4,5,6,7];
// const alphet = ["j","c","e","d","g","f"]

//SORT IN DESCENDING ORDER

// const descend = arr.sort((a,b) => a > b ? -1 : 1)
// console.log(descend)

               //ASCEND

// const ascend = alphet.sort((a,b) => a < b ? -1 : 1);
// console.log(ascend)


            //forEach()

const arr = [1,2,3,4]
arr.forEach((Element)=>{
    console.log(Element)
})   

            //concat()

const arr1 =["a","b","c"];
const arr2 = ["d","e","f",1,2,3];
console.log(arr1.concat(arr2));


             //every()

const arr3= [1,2,3,4,5,6,7];

//all element are greater then 5

const greaterfive = arr3.every(num => num > 5)
console.log(greaterfive);


                //some()
const arr4 = [1,2,3,4,5,6,7];

//at least one element is greater then 5

const greaterNum = arr4.some(num => num > 5)
console.log(greaterNum);

// at least one element is less then or equal to 0
 
const leastNum = arr4.some(num => num <= 0)
console.log(leastNum);


                //includes()
const arr5 = [1,2,3,4,5,6];
console.log(arr5.includes(2));
console.log(arr5.includes(7))

                //reduce()

const arr6 = [1,2,3,4,5,6];
const reduced = arr6.reduce((total, current)=> total + current);
console.log(reduced);


                    //find()
const finded = [1,2,3,4,5,6,7,8,9,10];
const found = finded.find(Element => Element > 5)
console.log(found);


                    //findIndex()

//const index = ["Kauthar","Mandeeq","Nimco","Mohamed"]
 //const indexFinder = index.findIndex(Element => Element === "Mandeeq");
// console.log(indexFinder)

             //indexOf()
const arrry = ["Kauthar","Mandeeq","Nimco","Mohamed"];
const indexFinder = arrry.indexOf("Mandeeq");
console.log(indexFinder)


                //fill()
const filed = new Array(3);
console.log(filed)
console.log(filed.fill(5));


                  //SLICE()
const sliced = ["b","t","j","x","kh"];
const SLICED = sliced.slice(2,4);
console.log(SLICED);

                  //reverse()
const rever = [1,2,3];
rever.reverse()
console.log(rever)


                    //push()
const fruits = ["Apple","lemon"];
console.log(fruits.push("Banana"))
console.log(fruits);

 
                     //pop()

const fruit = ["Apple","egg"];
fruit.pop();
console.log(fruit)


                      //SHIFT()
const shifts =["Apple","meet"];
shifts.shift()
console.log(shifts);

                        //UNSHIFT()
const mirro = ["Apple","tomotoes"];
console.log(mirro.unshift("Banana"))
console.log(mirro)
