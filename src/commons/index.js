import Vue from 'vue';
import {  Tabbar, TabbarItem ,Col, Row ,Button} from 'vant';
import AppFooterNav from './footerNav.vue'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.component('app-footer-nav',AppFooterNav)
