import axios from 'axios';
const getters = {
    allNation(state) {
        return state.allNation;
    },
    detailNation(state) {
        return state.detailNation;
    },
    regionNation(state) {
        return state.regionNation;
    },
    filterNation(state) {
        return state.filterNation;
    },
    searchKey(state) {
        return state.searchKey;
    }

}

const actions = {
    // Get all nation
    async ALL_NATION({ commit }) {
        const res = await axios.get("https://restcountries.eu/rest/v2/all").catch(err => console.log(err));
        // console.log(res.data);
        commit("ALL_NATION", res.data);
    },
    // Get one by one nation
    async GET_NATION({ commit }, code) {
        let url = `https://restcountries.eu/rest/v2/alpha/${code}`;
        const res = await axios.get(url).catch(err => console.log(err));
        // console.log(res.data);
        commit("GET_NATION", res.data);
    },
    // Get region of nation
    async GET_REGION_NATION({ commit }, region) {
        let url = `https://restcountries.eu/rest/v2/region/${region}`;
        const res = await axios.get(url).catch(err => console.log(err));
        console.log(res.data);
        commit("GET_REGION_NATION", res.data);
    },
    // Filter nation with search key
    async FILTERED_NATION({ state, commit }) {
        const res = await axios.get("https://restcountries.eu/rest/v2/all").catch(err => console.log(err));
        commit("FILTERED_NATION", res.data.filter(function (nation) {
            return nation.name.toLowerCase().includes(state.searchKey.toLowerCase()) ||  nation.alpha3Code.includes(state.searchKey.toUpperCase());
        }))
    },

}
const mutations = {
    ALL_NATION(state, nation) {
        state.allNation = nation;
    },
    GET_NATION(state, data) {
        state.detailNation = data;
    },
    GET_REGION_NATION(state, data) {
        state.regionNation = data;
    },
    FILTERED_NATION(state, data) {
        state.filterNation = data;
    },
    SEARCH_KEY(state, word) {
        state.searchKey = word;
    }

}
const state = {
    allNation: [],
    detailNation: {},
    regionNation: [],
    filterNation: [],
    searchKey: ""
}
export default {
    getters,
    mutations,
    actions,
    state,
}