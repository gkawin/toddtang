import { observable, action } from 'mobx'

export class UserStore {
   @observable me

   constructor () {
     this.me = null
   }

   @action
   setMe = (user) => {
     this.me = user
   }
   @action
   getMe () {
     return this.me
   }
}

export default new UserStore()
