/*
 * @Author: your name
 * @Date: 2022-04-19 14:24:56
 * @LastEditTime: 2022-04-19 14:27:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Design-Patterns/Proxy/PriceProxy.js
 */
// 定义一个询价处理器对象
const priceProcessor = {
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  },
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  },
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  },
  fresh(originPrice) {
    return originPrice * 0.5;
  },
};

function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice);
  console.log(priceProcessor[tag](originPrice));
}

askPrice('back', 100)
