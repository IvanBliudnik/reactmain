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