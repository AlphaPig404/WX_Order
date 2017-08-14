var axios = require('axios')

axios.defaults.baseURL = 'http://ppe-openapi.ele.me/'

const params = {
	timestamp: new Date().getTime(),
	consumer_key: '0170804777',
	sig: sig
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config.headers.url)
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

function getRestaurants(){
	axios.get('/restaurants',{
		params:{
			geo: '121.371422,31.105650'
		}
	}).then(suc=>{

	}).catch(err=>{

	})
}

module.exports = {
	getRestaurants:getRestaurants
}

