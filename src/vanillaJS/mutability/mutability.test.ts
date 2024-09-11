//мутабельный мир где обьект меняется (мутирует)
// так как мы не создаём копии

function increaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string,
    age: number,
    address: {title:string}
}
// test("big test", () => {
//     let user: UserType = {
//         name: "Dimych",
//         age: 32
//     }
//     increaseAge(user);
//     expect(user.age).toBe(33); //true
//     const superman = user
//     console.log(superman === user) //true
//     superman.age = 100
//     expect(user.age).toBe(100) //true
// })
//мутировали обьект user без копии

test("array test", () => {
    let users = [{
            name: "Dimych",
            age: 32
        },
        {
            name: "Ivan",
            age: 33
        }]
    let admins = users
    admins.push({name: "Bandit", age: 10}) //добавили в users Bandita
    expect(users[2]).toEqual({name: "Bandit", age: 10}); //true
})
//мутировали обьект user без копии

test("array interesting test", () => {
    const address = {
        title: "Minsk",
    }

    let user:UserType = {
        name: "Dimych",
        age: 32,
        address: address
    }
    // let addr = user.address
    let user2: UserType = {
        name: "Natasha",
        age: 32,
        address:address
    }
    address.title = "Minsk City"

    expect(user.address.title).toBe("Minsk City")
    expect(user.address.title).toBe(user2.address.title)
})
test("reference array interesting test", () => {
    const address = {
        title: "Minsk",
    }

    let user:UserType = {
        name: "Dimych",
        age: 32,
        address: address
    }
    // let addr = user.address
    let user2: UserType = {
        name: "Natasha",
        age: 32,
        address:address
    }

    const users = [user, user2, {name: "Katya", age: 12, address:address}]

    const admins = [user, user2]
    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")
})

//Самое главное
test("passportist test", () => {
    const letters = ["c", "a", "e", "f"]
    passportist(letters)
    expect(letters).toEqual(["a", "c", "e", "f"])
})
function passportist(letters:any) {
    const copy = [...letters].sort()
}
//нельзя мутировать обьекты!!!
//только создавать копии!!!