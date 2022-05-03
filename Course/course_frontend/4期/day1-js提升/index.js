//所有的非default导出，导入时均需要{}

// 1.从demo1.js模块，导入变量PI
import {PI} from './demo1.js'
console.log(PI)

// 2.从demo1.js模块，导入变量PI和add函数
import {PI,add} from './demo1.js'
console.log(PI)
console.log(add(1,2))

// 3.从demo1.js模块，导入变量add9(导出方重命名了)
import {add9} from './demo1.js'
console.log(add9(1,2))

// 4.从demo1.js模块，导入变量PI和add函数，并进行重命名(导入方也可以重新命名的)
import {add as myadd} from './demo1.js'
console.log(myadd(1,2))

//5.默认导出，导入时无需{}---songqin是任意取的名称，当时默认导出时，导入名称可以随便取
import songqin from './demo1.js'
console.log(songqin(100,200))