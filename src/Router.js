import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import PortfolioV1 from './components/Projets/Portfoliov1.vue'
import Locages from './components/Projets/Locages.vue'
import GSBfrais from './components/Projets/GSBfrais.vue'
import PortfolioV2 from './components/Projets/Portfoliov2.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path:'/', name:'Main', component: Main},
        {path:'/#portfolio', name:'Section-projets', component: Main},
        {path:'/PortfolioV1', name:'PortfolioV1', component: PortfolioV1},
        {path:'/Locages', name:'Locages', component: Locages},
        {path:'/GSBfrais', name:'GSBfrais', component: GSBfrais},
        {path:'/PortfolioV2', name:'PortfolioV2', component: PortfolioV2}
    ], 
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})