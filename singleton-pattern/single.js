/*
 * @Author: your name
 * @Date: 2022-04-13 20:32:41
 * @LastEditTime: 2022-04-13 20:36:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Design-Patterns/singleton-pattern/single.js
 */
class NoSingleDog {
  show() {
    console.log('我是一个单例对象')
  }
}
const s1 = new SingleDog()
const s2 = new SingleDog()

// false
s1 === s2
// 很明显 s1 和 s2 之间没有任何瓜葛，两者是相互独立的对象，各占一块内存空间

class SingleDog {
  show() {
    console.log('我是一个单例对象')
  }
  static getInstance() {
    // 如果没有实例，则创建一个
    if (!SingleDog.instance) {
      // 创建一个实例
      SingleDog.instance = new SingleDog()
    }
    // 返回实例
    return SingleDog.instance
  }
}
