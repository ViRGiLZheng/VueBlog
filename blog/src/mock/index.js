import Mock from 'mockjs'
import siderMap from '../router/index'
const logindata = { pass: true, message: 'success' }



Mock.mock(/\/loginCheck/, 'post', logindata)
Mock.mock(/\/getSiderMap/, 'post', siderMap)

export default Mock