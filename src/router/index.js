import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home/Home.vue';
import Meetups from '../components/Meetups/Meetups.vue';
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
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
