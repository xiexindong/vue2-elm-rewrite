import {
	GET_USERINFO,
} from './mutation-types.js'



export default {
	
	//获取用户信息存入vuex
	[GET_USERINFO](state,info){
		if(info && !info.message){ // 只有请求接口不成功时， message 才会有值 
			state.userInfo = { ...info }
		}else{
			state.userInfo = null
		}
	}
	
	
	
}
