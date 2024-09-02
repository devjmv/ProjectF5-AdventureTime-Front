import { defineStore } from "pinia";

export const registerUserInEvent = defineStore('register', () => {

    function subscribe(userid, eventid) {
      return userid + eventid
    }

    function unsubscribe(userid, eventid) {
      return userid + " + " + eventid
    }

    return { unsubscribe, subscribe }
})