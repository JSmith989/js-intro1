/*const bestFriend = "Holly";

// SPLIT
const bestFriendArray = bestFriend.split("");


console.log("my best friend in array format", bestFriendArray)


// JOIN

const array2 =["cow", "dog", "cat"];

const string = array2.join(", ")

console.log(string)

// POP

const animals = ["cow", "dog", "cat"];

const lastAnimal = animals.pop()

console.log("animals", animals)
console.log("last animal", lastAnimal)

const first = animals.shift()
console.log(first) 


animals.unshift("bear")
console.log(animals)

animals.push("kitty")
console.log(animals) */

const animals = ["dog", "cat"]

const arrayAndIndex = (array, index) => {
    return array[index];
}

console.log(arrayAndIndex(animals, 1))

const findGreg = (array) => {
    return array.includes("greg")
}

console.log(findGreg(animals));