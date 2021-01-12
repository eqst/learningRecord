// 由于事件绑定只执行一次，所以，防抖节流函数执行第一次之后，再执行时，只执行返回的函数，所以并不会破坏初始化的标记值
/**
 *  onChange = {debunce(this.changeHandle,[delay])}  
 */
/**
 * @name debounce 防抖
 * @description 如果有定时器，则清除，以此往复，清除除了最后一个定时器之前所有的定时器，保证执行一次
 * @param {*} fn 传入的函数 
 * @param {*} delay 需要延时的时间
 */
function debounce(fn,delay) {
  let timer = null
  return function (arg) {
    if (timer!= null) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(arg);
      let value = ''
      switch (arg.type) {
        case 'change':
          value = arg.target.value
          break;
        case 'input':
          value = arg.target.value
          break;
        default:
          break;
      }
      fn(value)
    }, delay);
  }
}

/**
 * @name throttle 节流
 * @description 判断时间变化是否在传入时间之外，是则执行，不是则不执行
 * @param {*} fn 传入的函数 
 * @param {*} delay 节流时间
 */
function throttle(fn,delay) {
  let oldDate = new Date().getTime()
  return function (arg) {
    let now = new Date().getTime()
    if (now - oldDate >= delay) {
      fn(arg.target.value)
      oldDate = now
    }
  }
}

function throttle1(fn,delay) {
  let oldDate = new Date().getTime()
  let _that = this
  return function () {
    let now = new Date().getTime()
    if (now - oldDate >= delay) {
      fn.apply(_that,args)
      oldDate = now
    }
  }
}

export {
  debounce,
  throttle
}