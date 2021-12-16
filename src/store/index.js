import Vue from 'vue'
import Vuex from 'vuex'
import { server } from '../../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isRegistered: false,
    isFillProfile: false,
    profileData: [],
    organizationData: [],
    paymentData: [],
    access_token: '',
    errorResponse: [],
    successResponse: [],
  },
  mutations: {
    MUTATE_IS_LOGED_IN (state, payload) {
      state.isLogin = payload
    },
    MUTATE_IS_REGISTER (state, payload) {
      state.isRegistered = payload
    },
    MUTATE_ACCESS_TOKEN (state, payload) {
      state.access_token = payload
    },
    MUTATE_IS_FILL_PROFILE (state, payload) {
      state.isFillProfile = payload
    },
    MUTATE_PROFILE_DATA (state, payload) {
      state.profileData = payload
    },
    MUTATE_ORGANIZATION_DATA (state, payload) {
      state.organizationData.push = payload
    },

    // RESPONSES
    MUTATE_SUCCESS_RESPONSE (state, payload) {
      state.successResponse = payload
      state.errorResponse = ''
    },
    MUTATE_ERROR_RESPONSE (state, payload) {
      state.errorResponse = payload
      state.successResponse = ''
    },
    CLEAR_RESPONSE_DATA (state) {
      state.successResponse = []
      state.errorResponse = []
    }
  },
  actions: {
    async register (context, payload) {
      try {
        await server.post('/register', payload)
        context.commit('MUTATE_IS_REGISTER', true)
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    },
    async googleAuth (context, payload) {
      try {
        const response = await server.post('/google-oauth', payload)
        localStorage.access_token = response.data.access_token
        // Mutating State if there is token applied
        context.commit('MUTATE_IS_LOGED_IN', true)
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    },
    async doLogin (context, payload) {
      try {
        const response = await server.post('/login', payload)
        // Set token to localStorage
        localStorage.access_token = response.data.access_token
        context.commit('MUTATE_ACCESS_TOKEN', response.data.access_token)

        // Mutating State if there is token applied
        context.commit('MUTATE_IS_LOGED_IN', true)

        context.dispatch('fetchProfile')
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    },
    async fetchProfile (context) {
      try {
        context.dispatch('cekToken')
        const profile = await server.get('/profile', {
          headers: {
            access_token: this.state.access_token
          }
        })
        
        if (profile.data) {
          context.commit('MUTATE_IS_FILL_PROFILE', true)
          context.commit('MUTATE_PROFILE_DATA', profile.data)
        }
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    },
    doLogout (context) {
      localStorage.clear()
      context.commit('MUTATE_ACCESS_TOKEN', '')
      context.commit('MUTATE_IS_LOGED_IN', false)
    },
    clearResponse (context) {
      context.commit('CLEAR_RESPONSE_DATA')
    },
    cekToken (context) {
      const access_token = localStorage.access_token

      if (!access_token) {
        context.dispatch('doLogout')
      }
      
      context.commit('MUTATE_ACCESS_TOKEN', access_token)
    },
    async createProfile (context, payload) {
      context.dispatch('cekToken')
      // console.log(payload);
      try {
        await server.post('/profile', payload, {
          headers: {
            access_token: this.state.access_token
          }
        })

        context.commit('MUTATE_IS_FILL_PROFILE', true)
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    },
    async fetchOrganization (context) {
      context.dispatch('cekToken')

      try {
        const result = await server.get('/organization', {
          headers: {
            access_token: this.state.access_token
          }
        })

        context.commit('MUTATE_ORGANIZATION_DATA', result.data)
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    },
    async fetchPayment (context){
      try {
        context.dispatch('fetchProfile')
      } catch (error) {
        context.commit('MUTATE_ERROR_RESPONSE', error.response.data)
      }
    }
  },
  modules: {
  }
})
