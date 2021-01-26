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

// export {
//   debounce,
//   throttle
// }

let str = 'recordValue=%7B"type_name"%3A"党委会"%2C"create_user_name"%3A"张楠华"%2C"batch_id"%3A""%2C"topic_dept_id"%3A"e65c041c179e11e6880d008cfa0427c4"%2C"topic_check_state"%3A"16"%2C"topic_type"%3A"70facc72d48b11e9bf8d5254001e99b7"%2C"topic_important_reason"%3A""%2C"topic_next_check_state_desc"%3A"流程启动"%2C"button"%3A"详情%2C修改%2C终止"%2C"topic_dept_name"%3A"哈尔滨软件研究院-人力资源部"%2C"topic_if_important"%3A"0"%2C"update_user_id"%3A"0883263"%2C"topic_next_check_state"%3A"-1"%2C"state_desc"%3A"待提交议题"%2C"topic_name"%3A"测试十三"%2C"topic_if_generate_record"%3A"0"%2C"topic_reporting_time"%3A"10"%2C"topic_study_id"%3A""%2C"id"%3A"495"%2C"topic_id"%3A"7dd3ee2b5c7211eb83ce0242ac110002"%2C"create_date"%3A"2021-01-22+13%3A27%3A17"%2C"topic_user_name"%3A"江国通%2C娄瑜%2C王建%2C陈斌"%2C"list_state"%3A"4"%2C"topic_last_check_state_desc"%3A"申请提交"%2C"create_user_id"%3A"0883263"%2C"urgent_reason"%3A""%2C"topic_check_reject_reason"%3A""%2C"topic_last_check_state"%3A"1"%2C"topic_if_generate_note"%3A"0"%2C"topic_file_state_desc"%3A"未归档"%2C"topic_if_study"%3A""%2C"topic_user_id"%3A"0473300%2C0000397%2C0598925%2C0000604"%2C"topic_check_state_desc"%3A"申请人撤回+"%2C"topic_if_generate_check"%3A"0"%2C"topic_urgent"%3A"0"%2C"update_user_name"%3A"张楠华"%2C"update_date"%3A"2021-01-22+14%3A23%3A05.0"%2C"other_dept_name"%3A"哈尔滨软件研究院-管理层"%2C"topic_if_secret"%3A"0"%2C"topic_if_generate_agenda"%3A"0"%2C"topic_other_dept_id"%3A"e65c06d1179e11e6880d008cfa0427c4"%2C"topic_secret_reason"%3A""%2C"topic_if_generate_approval"%3A"0"%2C"topic_content"%3A""%2C"topic_file_reject_reason"%3A""%2C"topic_file_state"%3A"0"%2C"topic_level"%3A"0"%2C"key"%3A"7dd3ee2b5c7211eb83ce0242ac110002"%7D'
console.log(str.length);