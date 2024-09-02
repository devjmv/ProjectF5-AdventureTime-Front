import { defineStore } from "pinia";

export const registerUserInEvent = defineStore('register', () => {

    function register(userid, eventid) {
      return userid + eventid
    }

    return { register }
})