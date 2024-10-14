import {makeHairStyle, moveUser, upgradeUserLaptop, UserTypeImmutability, UserWithLaptopType} from "./immutability";



test("half cut test", () => {
    let user: UserTypeImmutability = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
        }
    }
    const awesomeUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(32); //true
    expect(awesomeUser.hair).toBe(16); //true
    expect(awesomeUser.adress).toBe(user.adress); //true toBe ===
})

test("change adress", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        }
    }
    const movedUser = moveUser(user, "Kiev");

    expect(user).not.toBe(movedUser);
    expect(user.adress).not.toBe(movedUser.adress);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.adress.city).toBe("Kiev");
})

test("upgrade to macbook", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        }
    }
    const userWithUpgradedLaptop = upgradeUserLaptop(user, "Macbook");
    expect(user).not.toBe(userWithUpgradedLaptop);
    expect(user.adress).toBe(userWithUpgradedLaptop.adress);
    expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop);
    expect(userWithUpgradedLaptop.laptop.title).toBe("Macbook");
    expect(user.laptop.title).toBe("ZenBook");
})

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

