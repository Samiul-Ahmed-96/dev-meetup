import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups:[
      {
        name: "New York City",
        id: "111111111111",
        time: "03-12-23",
        src: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        name: "Tokyo Japan",
        id: "122222222222",
        time: "04-02-23",
        src: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        name: "Netherlands",
        id: "123333333333",
        time: "06-11-23",
        src: "https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        name: "London",
        id: "123333334443",
        time: "18-11-23",
        src: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        name: "Paris",
        id: "126783334443",
        time: "18-08-23",
        src: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
    ],
  },
  getters: {
    loadedMeetups  (state){
      return state.loadedMeetups.sort((meetUpA,meetUpB)=>{
        return meetUpA.date > meetUpB;
      })
    },
    featuredMeetUp(state,getters){
      return getters.loadedMeetups.slice(0,5);
    },
    loadedMeetup(state){
      return (meetUpId) =>{
        return state.loadedMeetups.find((meetUp)=>{
          return meetUp.id === meetUpId;
        })
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
