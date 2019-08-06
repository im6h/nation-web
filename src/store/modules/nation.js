import axios from 'axios';
import { stat } from 'fs';
const getters = {
    allNation(state){
        return state.allNation;
    },
    detailNation(state){
        return state.detailNation;
    },
    regionNation(state){
        return state.regionNation;
    }

}

const actions = {
    async ALL_NATION ({commit}){
        const res = await axios.get("https://restcountries.eu/rest/v2/all").catch(err => console.log(err));
        // console.log(res.data);
        commit("ALL_NATION",res.data);
    },
    async GET_NATION({commit},code){
        let url = `https://restcountries.eu/rest/v2/alpha/${code}`;
        const res = await axios.get(url).catch(err => console.log(err));
        // console.log(res.data);
        commit("GET_NATION",res.data);
    },
    async GET_REGION_NATION({commit},region){
        let url = `https://restcountries.eu/rest/v2/region/${region}`;
        const res = await axios.get(url).catch(err => console.log(err));
        console.log(res.data);
        commit("GET_REGION_NATION",res.data);
    }
}
const mutations = {
    ALL_NATION(state, nation){
        state.allNation = nation;
    },
    GET_NATION(state,data){
        state.detailNation = data;
    },
    GET_REGION_NATION(state,data){
        state.regionNation = data;
    }
    
}
const state = {
    allNation:[],
    detailNation:{},
    regionNation:[],
}
export default{
    getters,
    mutations,
    actions,
    state,
}