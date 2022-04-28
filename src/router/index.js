import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateMeeting from '../components/CreateMeeting/CreateMeeting.vue';
import Home from '../components/Home/Home.vue';
import Login from '../components/Login/Login.vue';
import Meetups from '../components/Meetups/Meetups.vue';
import Register from '../components/Register/Register.vue';
import SingleMeetup from '../components/SingleMeetup/SingleMeetup.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
  },
  {
    path: '/meetups/:id',
    name: 'SingleMeetup',
    props:true,
    component: SingleMeetup
  },
  {
    path: '/createMeetup',
    name: 'CreateMeeting',
    component: CreateMeeting
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
