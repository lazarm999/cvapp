import { users } from "../common/constants/routes"

export async function fetchUser(credentials) {
    try {
        return fetch(`${users}?username=${credentials.username}&&password=${credentials.password}`).then(res => res.json())
    }
    catch (error) {
        return error
    }
}