import useStore from "../store";
import User from "../types/User.ts";

export async function authenticate(email: string, password: string) {
    const store = useStore();

    const user = store.users
        .find((user: User) => user.email == email && user.password == password);

    if (user) {
        store.login(user);
    } else {
        throw new Error("Email ou senha incorretos");
    }
}

export async function register(user: User) {
    const store = useStore();

    const existentUser = store.users
        .find((u: User) => user.email === u.email || user.cpf === u.cpf);

    if (!existentUser) {
        store.registerUser(user);
    } else {
        const msg = existentUser.email === user.email ? "Email já cadastrado" : "CPF já cadastrado";
        throw new Error(msg);
    }
}

