(this["webpackJsonptui-calendar"]=this["webpackJsonptui-calendar"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),i=(n(13),n(1)),l=n(2),d=(n(14),n(7)),u=n.n(d);n(18),n(19),n(20);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement((function(){var e=Object(a.createRef)(),t=Object(a.useState)("month"),n=Object(l.a)(t,2),c=n[0],r=n[1],d=Object(a.useState)([]),m=Object(l.a)(d,2),f=m[0],s=m[1],h=Object(a.useState)([]),b=Object(l.a)(h,2),g=b[0],p=b[1];Object(a.useEffect)((function(){p(f)}),[g,f]);var k=Object(a.useState)([{name:"Providers",check:!0},{name:"Location",check:!0},{name:"Rooms",check:!0}]),y=Object(l.a)(k,2),v=y[0],E=y[1];Object(a.useEffect)((function(){var t=e.current.getInstance();v.forEach((function(e,n){!0===e.check?t.toggleSchedules(n.toString(),!1,!0):t.toggleSchedules(n.toString(),!0,!0)}))}));var C={usageStatistics:!1,theme:{"common.border":"thin solid #796bbb","common.backgroundColor":"#161331","common.holiday.color":"#f54f3d","common.saturday.color":"#9d93d5","common.dayname.color":"#ffffff","month.dayname.height":"42px","month.dayname.borderLeft":"none","month.dayname.paddingLeft":"0","month.dayname.paddingRight":"0","month.dayname.fontSize":"13px","month.dayname.backgroundColor":"inherit","month.dayname.fontWeight":"normal","month.dayname.textAlign":"center","month.dayExceptThisMonth.color":"#ffffff42","month.day.fontSize":"16px","month.schedule.borderRadius":"5px","month.schedule.height":"18px","month.schedule.marginLeft":"10px","month.schedule.marginRight":"10px","week.dayname.textAlign":"center","week.today.color":"#00f298","week.timegridLeft.backgroundColor":"rgba(38, 34, 74, .49)"},taskView:!1,scheduleView:!0,view:c,disableDblClick:!0,disableClick:!1,useDetailPopup:!0,useCreationPopup:!0,schedules:g,template:{titlePlaceholder:function(){return"Subject"},alldayTitle:function(){return'<span class="tui-full-calendar-left-content" style="color: #fff">All Day</span>'}},calendars:[{id:"0",name:"Providers",bgColor:"#9e5fff",borderColor:"#9e5fff"},{id:"1",name:"Location",bgColor:"#00a9ff",borderColor:"#00a9ff"},{id:"2",name:"Rooms",bgColor:"#03bd9e",borderColor:"#03bd9e"}],onBeforeCreateSchedule:function(e){var t=f,n={id:Date.now(),calendarId:e.calendarId,title:e.title,category:"time",start:e.start,end:e.end};t.push(n),s(Object(i.a)(t))},onBeforeUpdateSchedule:function(e){var t,n=e.schedule.id,a=f;a.forEach((function(o,c){o.id===n&&(t={id:e.schedule.id,calendarId:e.schedule.calendarId,title:e.schedule.title,category:"time",start:e.start,end:e.end},a[c]=t)})),s(Object(i.a)(a))},onBeforeDeleteSchedule:function(e){var t=e.schedule.id,n=f;n.forEach((function(e,a){e.id===t&&n.splice(a,1)})),s(Object(i.a)(n))}};return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,["day","week","month"].map((function(e){return o.a.createElement("button",{key:e,onClick:function(){return function(e){r(e)}(e)}},e)}))),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.current.getInstance().prev()}},"Prev"),o.a.createElement("button",{onClick:function(){e.current.getInstance().next()}},"Next")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.current.getInstance().today()}},"Today")),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(t){e.current.getInstance().openCreationPopup(t.schedule)}},"New Schedule")),o.a.createElement("div",null,v.map((function(e,t){return o.a.createElement("label",{key:t},o.a.createElement("input",{type:"checkbox",checked:e.check,onChange:function(){return function(e){var t=v;t[e].check=!t[e].check,E(Object(i.a)(t))}(t)}}),e.name)}))),o.a.createElement(u.a,Object.assign({ref:e},C)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(21)}},[[8,1,2]]]);
//# sourceMappingURL=main.73ddebf5.chunk.js.map