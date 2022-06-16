// Question 2
// var myAge = 22
// var humanDogRatio = 7
// var myDogAge = myAge * humanDogRatio
// console.log(myDogAge + " Dog Years Old")

// Question 3
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


let people_count = document.getElementById('number-count')
let counted_people = document.getElementById('counted-people')
let count = 0

function increment() {
    count += 1
    people_count.innerHTML = count

    // return people_count;

}

function decrement() {
    count -= 1
    people_count.innerHTML = count

    // return people_count;

}

function save() {
    counted_people.innerHTML = count
}