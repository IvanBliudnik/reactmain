import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompanyTitleAssocial,
    upgradeUserLaptop,
    UserTypeImmutability, UserWithBooksType,
    UserWithLaptopType, WithCompanies
} from "./immutability";



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
test("change house", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
        books: ["JS", "React", "CSS", "HTML"]
    }
    const userCopyBooks = moveUserToOtherHouse(user, 99);
    expect(user).not.toBe(userCopyBooks);
    expect(user.books).toBe(userCopyBooks.books);
    expect(user.laptop).toBe(userCopyBooks.laptop);
    expect(userCopyBooks.adress.house).toBe(99);
})
test("add new book to user", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
        books: ["JS", "React", "CSS", "HTML"]
    }
    const userCopyBooks = addNewBooksToUser(user, "ts");
    expect(user).not.toBe(userCopyBooks);
    expect(user.books).not.toBe(userCopyBooks.books);
    expect(user.laptop).toBe(userCopyBooks.laptop);
    expect(userCopyBooks.books[4]).toBe("ts");
    expect(user.books.length).toBe(4);
})
test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
        books: ["js", "React", "CSS", "HTML"]
    }
    const userCopyBooks = updateBook(user, "js" ,"ts");
    expect(user).not.toBe(userCopyBooks);
    expect(user.laptop).toBe(userCopyBooks.laptop);
    expect(user.books).not.toBe(userCopyBooks.books);
    expect(userCopyBooks.books[0]).toBe("ts");
})
test("remove js book", () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
        books: ["js", "React", "CSS", "HTML"]
    }
    const userCopyBooks = removeBook(user, "js");
    expect(user).not.toBe(userCopyBooks);
    expect(user.laptop).toBe(userCopyBooks.laptop);
    expect(user.books).not.toBe(userCopyBooks.books);
    expect(userCopyBooks.books[0]).toBe("React");
})
test("add new company", () => {
    let user: UserWithLaptopType & WithCompanies & UserWithBooksType & UserTypeImmutability = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
        books: ["JS", "React", "CSS", "HTML"],
        companies: [{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}],
    }
    const userCopy = addCompany(user, {id: 3, title: "Google"});
    expect(userCopy.companies).toEqual([{id: 1, title: "Epam"}, {id: 2, title: "IT-Incubator"}, {id: 3, title: "Google"}]);
})
test("update company", () => {
    let user: UserWithLaptopType & WithCompanies & UserWithBooksType & UserTypeImmutability = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
        books: ["JS", "React", "CSS", "HTML"],
        companies: [{id: 1, title: "Eпam"}, {id: 2, title: "IT-Incubator"}],
    }
    const userCopy = updateCompany(user,  1, "Epam");
    expect(userCopy).not.toBe(user);
    expect(userCopy.companies).not.toBe(user);
    expect(user.adress).toBe(userCopy.adress);
    expect(userCopy.companies[0].title).toBe("Epam");
})
test("update company from associal array", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        adress: {
            city: "Minsk City",
            house: 12,
        },
        laptop: {
            title: "ZenBook",
        },
    }
        let companies = {
           "Dimych": [{id: 1, title: "Eпam"}, {id: 2, title: "IT-Incubator"}],
           "Artem": [{id: 1, title: "Google"}, {id: 2, title: "IT-Incubator"}],
    }
    const copy = updateCompanyTitleAssocial(companies, "Dimych", 1, "Epam")
    expect(copy["Dimych"]).not.toBe(companies["Dimych"]);
    expect(copy["Artem"]).toBe(companies["Artem"]);
    expect(copy["Dimych"][0].title).toBe("Epam");
})
