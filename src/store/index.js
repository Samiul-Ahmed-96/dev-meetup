import {
  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword
} from "firebase/auth";
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,
    authError : null,
    error:null,
    loadedMeetups:[
      {
        title: "New York City",
        id: "111111111111",
        location:'USA',
        date: "06-11-23",
        time:"2.12",
        imageUrl: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        title: "Tokyo Japan",
        id: "122222222222",
        date: "06-11-23",
        time:"2.12",
        location:'USA',
        imageUrl: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        title: "Netherlands",
        id: "123333333333",
        date: "06-11-23",
        time:"2.12",
        location:'USA',
        imageUrl: "https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        title: "London",
        id: "123333334443",
        date: "06-11-23",
        time:"2.12",
        location:'USA',
        imageUrl: "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
      },
      {
        title: "Paris",
        id: "126783334443",
        date: "06-11-23",
        time:"2.12",
        location:'USA',
        imageUrl: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
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
    },
    user(state){
      return state.user;
    },
    error(state){
      return state.error
    },
    loading(state){
      return state.loading
    }
  },
  mutations: {
    createMeetup(state,payload){
      state.loadedMeetups.push(payload);
    },
    setUser(state,payload){
      state.user = payload;
    },
    setLoading(state,payload){
      state.loading = payload;
    },
    setError(state,payload){
      state.error = payload;
    },
    clearError(state ){
      state.error = null
    }
    
  },
  actions: {
    createMeetup({commit},payload){
      const newMeetup = {
        title : payload.title,
        location : payload.location,
        description:payload.description,
        imageUrl:payload.imageUrl,
        date:payload.date,
        time:payload.time,
        id:'23423414525345235'
      }
      commit('createMeetup',newMeetup);
      alert('Added');
    },
    registerUser({commit},payload){
      commit('setLoading',true)
      commit('clearError')
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          const user = userCredential.user;
          commit('setLoading',false)
          const newUser = {
            id: user.uid,
            email:user.email
          };
          commit("setUser", newUser);
          console.log("user",user)
          console.log("New user",newUser)
          return user;
        })
        .catch((error) => {
          console.log(error.message);
          commit('setLoading',false)
          commit('setError',error)
        });
    },
    loginUser({commit},payload){
      commit('setLoading',true)
      commit('clearError')
      const auth = getAuth();
      signInWithEmailAndPassword(auth, payload.email,payload.password)
      .then((user) => {
        commit('setLoading',false)
        const newUser = {
          id: user.uid,
          email:user.email
        };
        commit("setUser", newUser);
        // ...
      })
      .catch((error) => {
        commit('setLoading',false)
        commit('setError',error)
      });
    }
  },
  modules: {
  }
})
