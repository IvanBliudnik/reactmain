export type UserTypeImmutability = {
    name: string,
    hair: number,
    adress: {
        city: string,
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserTypeImmutability & {
     laptop: LaptopType
}
export type UserWithBooksType = UserTypeImmutability & {
    books: Array<string>
}
type CompanyType = { id:number, title: string }
export type WithCompanies = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserTypeImmutability, power: number) {
    const userCopy = {...u, hair: u.hair/power};
    return userCopy;
}
export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, adress: {
        ...u.adress, city: city
        }};
}
export function upgradeUserLaptop(u: UserWithLaptopType, newLaptop: string) {
    return {...u, laptop: {...u.laptop, title: newLaptop}};
}
export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, adress: {
            ...u.adress, house: house
        }};
}
export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {...u, books: [...u.books, newBook]};
}
export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
const copy = {
    ...u, books: u.books.map(b => b === oldBook ? newBook : b)
    // {
    // if (oldBook === b) {
    //     return newBook
    // } else {
    //     return b
    // }
    // })}
}
return copy;
}
export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) =>  ({
        ...u, books: u.books.filter(b => b !== bookForDelete) //оставит книги кроме той которая не равна bookForDelete
})
export const addCompany = (u: UserWithLaptopType & UserWithBooksType & WithCompanies, newCompany: {}) =>
    ({
        ...u, companies: [...u.companies, newCompany]
    })
export const updateCompany = (u: UserWithLaptopType & UserWithBooksType & WithCompanies, companyId: number, newTitle: string) =>
    ({
        ...u, companies: u.companies.map(c=> c.id === companyId ? {...c, title: newTitle} : c)
    })
export const updateCompanyTitleAssocial = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) =>
    {
        let companyCopy = {...companies}
        companyCopy[userName] = companyCopy[userName].map(c => c.id===companyId ? {...c, title:newTitle} : c)
        return companyCopy;
    }