function add(){
    console.log(1+1)
}
const person = "小明"
//导出多个写法
export {add,person}   //导出对外暴露的变量或方法
//导出单个写法
// export const person2 = "小红"
// export function add(){
//     console.log(1+1)
// }

export default{add,person}   //默认导出，会以default为变量名
