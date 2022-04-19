/*
 * @Author: your name
 * @Date: 2022-04-19 11:43:40
 * @LastEditTime: 2022-04-19 11:47:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Design-Patterns/Proxy/PreLoadImage.js
 */
class preLoadImage {
  constructor(imgNode) {
    this.imgNode = imgNode
  }
  // 操作img节点的src属性
  setSrc(imgUrl) {
    this.imgNode.src = imgUrl
  }
}

class ProxyImage {
  // 占位图url地址
  static LOADING_URL = 'https://placehold.it/200x200'
  constructor(targetImage) {
    this.targetImage = targetImage
  }

  setSrc(targetImage) {
    // 真实img节点初始化时展示的是一个占位图
    this.targetImage.setSrc(ProxyImage.LOADING_URL)
    // 创建一个帮我们加载图片的虚拟Image实例
    const virtualImage = new Image()
    // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
    virtualImage.onload = () => {
        this.targetImage.setSrc(targetUrl)
    }
    // 设置src属性，虚拟Image实例开始加载图片
    virtualImage.src = targetUrl
  }
}