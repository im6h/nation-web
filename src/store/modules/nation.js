import axios from 'axios';
const getters = {
    allNation(state){
        return state.allNation;
    }
}

const actions = {
    async ALL_NATION ({commit}){
        const res = await axios.get("https://restcountries.eu/rest/v2/all").catch(err => console.log(err));
        console.log(res.data);
        commit("ALL_NATION",res.data);
    }
}
const mutations = {
    ALL_NATION(state, nation){
        state.allNation = nation;
    }
}
const state = {
    allNation:[],

}
export default{
    getters,
    mutations,
    actions,
    state,
}