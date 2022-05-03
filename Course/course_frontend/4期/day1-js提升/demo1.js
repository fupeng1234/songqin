// 一个js文件就是一个模块

//1.导出一个变量
export const PI = 3.14

//2.导出一个函数（export命令可以多次出现）
export function add(a,b){return a + b}

// //3.用一个命令导出多个变量或函数，必须使用{}，哪怕只导出一个变量
// export{PI,add}

//4.对导出的变量/函数进行重命名
export{PI as pi,add as add9}

//5.export default为默认导出，一个模块只能有一个export default
// export default 可以导出匿名函数。
export default function(a,b){return a + b}