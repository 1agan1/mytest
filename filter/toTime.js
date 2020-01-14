export default function toTime(n){
    //转化出来的时间格式 是2019-12-17 11:21
    //取出当前时间戳的东八区时间Tue Dec 17 2019 11:21:28 GMT+0800 (中国标准时间) "date"
    let date = new Date(n)
    console.log(date,'date') 
    let year = date.getFullYear()
    let month = date.getMonth() +1 >9 ? date.getMonth() +1 : "0"+(date.getMonth() +1)
    console.log(month,'month')
    let day = date.getDate()  >9 ? date.getDate() : "0"+date.getDate()
     console.log(day,'day')
     return `${year}-${month}-${day}`
  }