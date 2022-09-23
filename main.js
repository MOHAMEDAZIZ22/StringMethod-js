//REPLACE

function myFunction() {

    let text = document.getElementById("txt").innerHTML;
    document.getElementById("txt").innerHTML = text.replace("Zoho", "Lorem ipsum dolor sit.");
}

// UPPER CASE

function ourFunction() {
    let x = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = x.toUpperCase();

}
function thisfunction() {
    let y = document.getElementById("yy").innerHTML;
    document.getElementById("yy").innerHTML = y.toLowerCase();
}

//PAD START

let letters = "8";
document.getElementById("do").innerHTML = letters.padStart(10, "☢");

//PAD END
let text = "5";
document.getElementById("doend").innerHTML = text.padEnd(5,"☢");

//LENGTH

let len = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, eveniet! Doloribus, voluptates officiis! Doloremque amet tempore itaque ipsa blanditiis eum, facilis beatae quisquam corrupti deleniti illo inventore excepturi perferendis quibusdam!";
document.getElementById("length").innerHTML = len.length;

//to lowercase()
let lowercase='LOWERCASE'
console.log(`lowercase:`,lowercase.toLowerCase());

//repeat
let repeat=' AZIZ '
console.log(`Repeat:`,repeat.repeat(8));

//check string ends 
let endswith='sdsdsdsbbshdbsbd'
console.log(`EndsWith:`,endswith.endsWith('bd'));

//INCLUDES
let includes='include'
console.log(`Includes:`,includes.includes('A'));

//CONCAT
let user='welcome';
let user1=' ALL';
console.log(`Concat:`,user.concat(user1));

//INDEX OF
let users='AZIZ'
console.log(`Index Of c:`,users.indexOf('I'));

//SPLIT
let fruits3='AZIZ'
let fruits4=fruits3.split('')
console.log(`Split:`,fruits4);

//SLICE
let who='worldHealthOranization'
console.log(`Slice:`,who.slice(2,8));


// SEARCH
let search='hello all'
console.log(`Search:`,search.search('o'));

// INDEX OF CHARACTER
let fruits='Dragon fruit'
console.log('Index of character:',fruits.charAt(0));


