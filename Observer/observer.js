/*
 * @Author: your name
 * @Date: 2022-04-19 15:01:50
 * @LastEditTime: 2022-04-19 15:40:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Design-Patterns/Observer/observer.js
 */

class PrdPublish extends Publisher {
  constructor() {
    super()
    // 初始化需求文档
    this.prdState = null
    this.observer = []
    console.log('PrdPublish初始化完毕')
  }
  // 该方法用于获取当前的prdState
  getState() {
    console.log('PrdPublisher.getState invoked')
    return this.prdState
  }
  // 该方法用于改变prdState
  setState(prdState) {
    console.log('PrdPublisher.setState invoked')
    // prd的值发生改变
    this.prdState = state
    // 需求文档变更，立刻通知所有开发者
    this.notify()
  }
}



class DeveloperObserver extends Observer {
  constructor() {
      super()
      // 需求文档一开始还不存在，prd初始为空对象
      this.prdState = {}
      console.log('DeveloperObserver created')
  }
  // 重写一个具体的update方法
  update(publisher) {
      console.log('DeveloperObserver.update invoked')
      // 更新需求文档
      this.prdState = publisher.getState()
      // 调用工作函数
      this.work()
  }

  // work方法，一个专门搬砖的方法
  work() {
      // 获取需求文档
      const prd = this.prdState
      // 开始基于需求文档提供的信息搬砖。。。
      console.log('996 begins...')
  }
}
