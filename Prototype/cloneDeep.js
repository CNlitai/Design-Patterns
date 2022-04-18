/*
 * @Author: your name
 * @Date: 2022-04-18 20:39:52
 * @LastEditTime: 2022-04-18 20:41:26
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Design-Patterns/Prototype/cloneDeep.js
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  var temp = obj.constructor(); // give temp the original obj's constructor
  for (var key in obj) {
    temp[key] = deepClone(obj[key]);
  }
  return temp;
}


const liLei = {
  name: 'lilei',
  age: 28,
  habits: ['coding', 'hiking', 'running']
}
const liLeiStr = JSON.stringify(liLei)
const liLeiCopy = JSON.parse(liLeiStr)
liLeiCopy.habits.splice(0, 1)
console.log('李雷副本的habits数组是', liLeiCopy.habits)
console.log('李雷的habits数组是',  liLei.habits)
