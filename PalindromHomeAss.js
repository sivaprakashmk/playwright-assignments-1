

function oddNumber() {
    for (let index = 1; index <= 25; index++) {
        if (index % 2 !== 0) {
            console.log(index);
        }
    }
}

oddNumber();


// palindrome
let person = "madam"
let reversed ="";

function palin() {
    for (let i = person.length- 1; i >= 0; i--) {
        reversed = reversed + person.charAt(i)
    }
    if (reversed ==person) {
        console.log(`converted word is ${reversed}`);
    }
    
}

palin();

