import store from "../store";
import User from "../types/User.ts";

export async function authenticate(email: string, password: string) {
    const user = store.getters.users
        .find((user: User) => user.email == email && user.password == password);

    if (user) {
        await store.dispatch('login', user);
    } else {
        throw new Error("Email ou senha incorretos");
    }
}

export async function register(user: User) {
    const existentUser = store.getters.users
        .find((u: User) => user.email === u.email || user.cpf === u.cpf);

    if (!existentUser) {
        await store.dispatch('registerUser', user);
    } else {
        const msg = existentUser.email === user.email ? "Email já cadastrado" : "CPF já cadastrado";
        throw new Error(msg);
    }
}

