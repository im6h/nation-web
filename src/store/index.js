import Vue from 'vue'
import Vuex from 'vuex'
import Nation from './modules/nation.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Nation
    }
})