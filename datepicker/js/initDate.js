/**
 * Created by XiLel on 2017/11/22.
 * 这个方法用于初始化用户的事件选择框
 * 十年 一年 一月 一周 一日 等多种初始化显示方式
 * 函数依赖于两个 html class
 * $('.form_date_start').val(sText);
 * $('.form_date_end').val(eText);
 * @param range 日期的范围 [day week month year decade]
 * @param dateRange 传递一个对象，它将保存日期的年月日等信息，以便于使用
 * @param startView 日期的初始视图 默认为2(day) [3(month) 4&5(year,decade)]
 */
function changeDate(range, dateRange, startView) {
  // 本函数可以实现选择一天，一周，一月和一年，需要传递的参数为日期范围，
  // 保证dataRange对象在当前作用域中可以访问。
  if(startView === undefined){
    startView = 2;
  }
  //今天的时间
  var today = new Date();
  today.setTime(today.getTime());

  // 设置今天的日期
  dateRange.eYear = today.getFullYear();
  dateRange.eMonth = today.getMonth()+1;
  dateRange.eDay = today.getDate();

  var sText = "";
  var eText = "";

  // 点击切换
  if(range === "day"){
    //昨天的时间
    var yesterday = new Date();
    yesterday.setTime(yesterday.getTime()-24*60*60*1000);
    dateRange.sYear = yesterday.getFullYear();
    dateRange.sMonth = yesterday.getMonth()+1;
    dateRange.sDay = yesterday.getDate();
    if(startView == 2){
      // 天视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
    } else if(startView == 3){
      // 月视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
    } else if(startView == 4 || startView == 5){
      // 年视图
      sText = dateRange.sYear;
      eText = dateRange.eYear;
    }
    $('.form_date_start').val(sText);
    $('.form_date_end').val(eText);

  } else if(range === "week"){
    //一星期前的时间
    var lastweek = new Date();
    lastweek.setTime(lastweek.getTime()-7*24*60*60*1000);
    dateRange.sYear = lastweek.getFullYear();
    dateRange.sMonth = lastweek.getMonth()+1;
    dateRange.sDay = lastweek.getDate();
    if(startView == 2){
      // 天视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
    } else if(startView == 3){
      // 月视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
    } else if(startView == 4 || startView == 5){
      // 年视图
      sText = dateRange.sYear;
      eText = dateRange.eYear;
    }
    $('.form_date_start').val(sText);
    $('.form_date_end').val(eText);
  } else if(range === "month"){
    // 一个月前的时间
    var lastmonth = new Date();
    lastmonth.setMonth(lastmonth.getMonth()-1);
    dateRange.sYear = lastmonth.getFullYear();
    dateRange.sMonth = lastmonth.getMonth()+1;
    dateRange.sDay = lastmonth.getDate();
    if(startView == 2){
      // 天视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
    } else if(startView == 3){
      // 月视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
    } else if(startView == 4 || startView == 5){
      // 年视图
      sText = dateRange.sYear;
      eText = dateRange.eYear;
    }
    $('.form_date_start').val(sText);
    $('.form_date_end').val(eText);
  } else if(range === "year"){
    // 一年前的日期
    var lastyear = new Date();
    lastyear.setFullYear(lastyear.getFullYear()-1);
    dateRange.sYear = lastyear.getFullYear();
    dateRange.sMonth = lastyear.getMonth()+1;
    dateRange.sDay = lastyear.getDate();
    if(startView == 2){
      // 天视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
    } else if(startView == 3){
      // 月视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
    } else if(startView == 4 || startView == 5){
      // 年视图
      sText = dateRange.sYear;
      eText = dateRange.eYear;
    }
    $('.form_date_start').val(sText);
    $('.form_date_end').val(eText);
  } else if(range === 'decade'){
    // 十年前的日期
    var decade = new Date();
    decade.setFullYear(decade.getFullYear()-10);
    dateRange.sYear = decade.getFullYear();
    dateRange.sMonth = decade.getMonth()+1;
    dateRange.sDay = decade.getDate();
    if(startView == 2){
      // 天视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth)+"-"+(dateRange.sDay>9?dateRange.sDay:"0"+dateRange.sDay);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth)+"-"+(dateRange.eDay>9?dateRange.eDay:"0"+dateRange.eDay);
    } else if(startView == 3){
      // 月视图
      sText = dateRange.sYear+"-"+(dateRange.sMonth>9?dateRange.sMonth:"0"+dateRange.sMonth);
      eText = dateRange.eYear+"-"+(dateRange.eMonth>9?dateRange.eMonth:"0"+dateRange.eMonth);
    } else if(startView == 4 || startView == 5){
      // 年视图
      sText = dateRange.sYear;
      eText = dateRange.eYear;
    }
    $('.form_date_start').val(sText);
    $('.form_date_end').val(eText);
  }
}
