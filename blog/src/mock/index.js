import Mock from 'mockjs'
const logindata = {pass:true,message:'success'}

Mock.mock(/\/loginCheck/,'post',logindata)

export default Mock