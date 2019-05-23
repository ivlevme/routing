import VueRouter from 'vue-router'
import Main from './pages/Main'
import Catalog from './pages/Catalog'
import Item from './pages/Item'
import Add from './pages/Add'


export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '', component: Main},
        { path: '/catalog', component: Catalog },
        { path: '/item/:id', component: Item },
        { path: '/add', component: Add }
    ]
})