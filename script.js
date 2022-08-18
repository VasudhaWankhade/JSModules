// first way

// import { obj } from "./exportCode.js"
// import { multiplication } from "./exportCode.js"

// console.log(obj.myFirstName)
// multiplication(10, 20)

// second way By using alias

// import { obj as info, multiplication as multiply } from "./exportCode.js"

// console.log(info)
// multiply(10, 20)

// third way to import everything from same file

// import * as person from "./exportCode.js"

// console.log(person.obj)
// person.multiplication(10, 9)


// fourth way default export

// import name from "./exportCode.js"

// console.log(name[0])

// async await

// if type of file is set to module then we can use await keyword outside the async function

function createUser() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("User created")
        })
    }, 3000)
}

function id() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("User id received")
        })
    }, 2000)
}

function userInfo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Display user info")
        })
    }, 1000)
}

async function UserInfo() {
    let user = await createUser()
    console.log(user)

    let idOfUser = await id()
    console.log(idOfUser)

    let infoUser = await userInfo()
    return infoUser
}
// let infoU = UserInfo()
// console.log(infoU) ==> pending promise ==> async function always returns promise
// as the file type is module ==> we can use await keyword outside the async function

// so
let infoU = await UserInfo()
console.log(infoU)