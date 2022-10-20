import React from "react";
import { observable, action, computed, makeObservable } from "mobx";
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginStore{
    @observable userName = "";
    @observable loggedIn = false;


        constructor() {
            makeObservable(this)
        }

        @action login = async (loginInput) => {
            this.userName = loginInput.trim()
            this.loggedIn = true;

        };
        @action logout = async () => {
            this.userName= "";
            this.loggedIn = false;
        };
}
let loginStore;
export function getLoginStore(){
    if(!loginStore)
        loginStore = new LoginStore();
    return loginStore;
};
