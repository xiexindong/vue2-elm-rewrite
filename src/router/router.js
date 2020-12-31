import App from '../App'

// require.ensure(dependencies: String[], callback: function(require), chunkName: String)
// 第一个参数指定依赖的模块，
// 第二个参数是一个函数，
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

// 使用node 方法读取本地文件 动态创建 目录-----优化方案


    
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            name:'home',
            component: home
        },
      
    ]
}]
