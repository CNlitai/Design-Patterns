/*
 * @Author: your name
 * @Date: 2022-04-19 14:36:21
 * @LastEditTime: 2022-04-19 14:43:36
 * @LastEditors: Please set LastEditors
 * @Description: 状态模式
 * @FilePath: /Design-Patterns/Proxy/coffeeProxy.js
 */

class CoffeeMaker {
  constructor() {
     /**
      这里略去咖啡机中与咖啡状态切换无关的一些初始化逻辑
    **/
    // 初始化状态，没有切换任何咖啡模式
    this.state = 'init'
    // 初始化牛奶的存储量
    this.leftMilk = '500ml'
  }
  stateToProcessor = {
    that: this,
    american() {
      // 尝试在行为函数里拿到咖啡机实例的信息并输出
      console.log(this.that.leftMilk)
      console.log('我只吐黑咖啡')
    },
    latte() {
      this.american()
      console.log('我吐黑咖啡加牛奶')
    },
    vanillaLatte() {
      this.latte()
      console.log('我吐黑咖啡加牛奶加香草糖浆')
    },
    mocha() {
      this.latte()
      console.log('我吐黑咖啡加牛奶加摩卡糖浆')
    }
  }

  // 关注咖啡机状态切换函数
  changeState(state) {
    this.state = state
    if (!this.stateToProcessor[state]) {
      return
    }
    this.stateToProcessor[state]()
  }
}

const mk = new CoffeeMaker()
mk.changeState('latte')