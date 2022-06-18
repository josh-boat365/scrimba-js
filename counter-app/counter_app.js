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

}

function decrement() {
    count -= 1
    people_count.innerHTML = count

}

function save() {
    let saved_count = count + " - "
    counted_people.innerHTML += saved_count
    count = 0
}

function reset() {
    people_count.innerHTML = 0
    counted_people.innerHTML = 0
    count = 0
}