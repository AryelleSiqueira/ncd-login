import { defineStore } from "pinia";
import User from "../types/User.ts";

export interface IState {
    loggedUserId: number;
    users: User[];
}

const useStore = defineStore('authStore', {
    state: (): IState  => ({
        users: [],
        loggedUserId: -1
    }),
    getters: {
        isAuthenticated: (state: IState) => state.loggedUserId !== -1,
        loggedUser: (state: IState) => state.users.find((user: User) => user.id === state.loggedUserId),
    },
    actions: {
        registerUser(user: User) {
            user.id = Math.max(...this.users.map((user: any) => user.id), 0) + 1;
            this.users.push(user);
            localStorage.setItem("users", JSON.stringify(this.users));
        },
        login(user: User) {
            this.loggedUserId = user.id ? user.id : -1;
            localStorage.setItem("loggedUserId", String(this.loggedUserId));
        },
        logout() {
            this.loggedUserId = -1;
            localStorage.setItem("loggedUserId", String(this.loggedUserId));
        },
        load() {
            const users = localStorage.getItem("users");
            const loggedUserId = localStorage.getItem("loggedUserId");

            if (users) this.users = JSON.parse(users);
            if (loggedUserId) this.loggedUserId = Number(JSON.parse(loggedUserId));
        }
    }
});

export default useStore;