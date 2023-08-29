import { createStore } from "vuex";
import User from "../types/User.ts";

export interface IState {
    isAuthenticated: boolean;
    loggedUserId: number;
    users: User[];
}

export default createStore({
    state: {
        users: [],
        isAuthenticated: false,
        loggedUserId: -1
    },
    getters: {
        isAuthenticated: (state: IState) => state.isAuthenticated,
        userByEmail: (state: IState) => (email: string) => state.users.find((user: User) => user.email === email),
        loggedUser: (state: IState) => state.users.find((user: User) => user.id === state.loggedUserId),
        users: (state: IState) => state.users,
    },
    mutations: {
        setIsAuthenticated(state: IState, isAuthenticated: boolean) {
            state.isAuthenticated = isAuthenticated;
            localStorage.setItem("isAuthenticated", isAuthenticated.toString());
        },
        setLoggedUserId(state: IState, loggedUserId: number) {
            state.loggedUserId = loggedUserId;
            localStorage.setItem("loggedUserId", loggedUserId.toString());
        },
        registerUser(state: IState, user: User) {
            user.id = Math.max(...state.users.map((user: any) => user.id), 0) + 1;
            state.users.push(user);
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        setUsers(state: IState, users: User[]) {
            state.users = users;
        },
    },
    actions: {
        registerUser: ({ commit }: any, user: User) => {
            commit("registerUser", user);
        },
        login: ({ commit }: any, user: User) => {
            commit("setIsAuthenticated", true);
            commit("setLoggedUserId", user.id);
        },
        logout: ({ commit }: any) => {
            commit("setIsAuthenticated", false);
            commit("setLoggedUserId", -1);
        },
        load: ({ commit }: any) => {
            const users = localStorage.getItem("users");
            const isAuthenticated = localStorage.getItem("isAuthenticated");
            const loggedUserId = localStorage.getItem("loggedUserId");

            if (users) commit("setUsers", JSON.parse(users));
            if (isAuthenticated) commit("setIsAuthenticated", isAuthenticated === 'true');
            if (loggedUserId) commit("setLoggedUserId", Number(loggedUserId));
        }
    }
});