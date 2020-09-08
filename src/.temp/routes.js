const c1 = () => import(/* webpackChunkName: "page--src--pages--team-vue" */ "/home/ljmarin/Documents/cca/cca-grenada/src/pages/Team.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--services-vue" */ "/home/ljmarin/Documents/cca/cca-grenada/src/pages/Services.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--projects-vue" */ "/home/ljmarin/Documents/cca/cca-grenada/src/pages/Projects.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/home/ljmarin/Documents/cca/cca-grenada/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/ljmarin/Documents/cca/cca-grenada/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/ljmarin/Documents/cca/cca-grenada/src/pages/Index.vue")

export default [
  {
    path: "/team/",
    component: c1
  },
  {
    path: "/services/",
    component: c2
  },
  {
    path: "/projects/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
