import RegisterEventService from "@/services/RegisterEventService";
import { defineStore } from "pinia";

export const registerUserInEvent = defineStore('register', () => {

  function subscribe(userid, eventid) {
    const service = new RegisterEventService(userid, eventid)
    return service.registerEvent()
  }

  function unsubscribe(userid, eventid) {
    const service = new RegisterEventService(userid, eventid)
    return service.unRegisterEvent()
  }

  return { unsubscribe, subscribe }
})