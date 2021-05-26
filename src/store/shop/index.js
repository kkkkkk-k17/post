import {createStore} from 'vuex'
import state from "./state";
import mutations from "./mutation";
import actions from "./actions";

const store = createStore({
    state,
    mutations,
    actions
})
export default store