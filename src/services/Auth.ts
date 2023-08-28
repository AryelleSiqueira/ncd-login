import store from "../store";

export async function authenticate(email: string, password: string) {
    const user = store.getters.users
        .find((user: any) => user.email == email && user.password == password);

    if (user) {
        await store.dispatch('login', user);
    } else {
        throw new Error("Email ou senha incorretos");
    }
}

export async function register(user: any) {
    const existentUser = store.getters.users
        .find((u: any) => user.email == u.email || user.cpf == u.cpf);

    if (!existentUser) {
        await store.dispatch('registerUser', user);
    } else {
        const msg = existentUser.email == user.email ? "Email já cadastrado" : "CPF já cadastrado";
        throw new Error(msg);
    }
}

