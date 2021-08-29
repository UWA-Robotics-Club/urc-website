
const regularWorkshop = '#e37268';
const industryEvent = 'black';
const generalEvent = '#617496';
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2021-08-07',
      headerToolbar: {
        left: 'title',
        right: 'prev,next today,dayGridMonth,timeGridWeek,timeGridDay'
      },
      firstDay:1, //Monday
      slotMinTime: '09:00:00',
      slotMaxTime: '21:00:00',
      weekends: false,
      // hiddenDays: [ 0 ],

      events: [
        // {
//           title: 'All Day Event',
//           start: '2021-08-02T14:00:00',
//           end: '2021-08-02T16:00:00',
//           url:'http://www.google.com',
//           color: regularWorkshop,
// 
//         },
		{
           title: 'Curtin Hackathon',
           start: '2021-09-06T09:00:00',
           end: '2021-09-06T17:00:00',
           url:'https://www.facebook.com/events/212163597472526/',
           color: generalEvent,
 
         },
    

      ]
    });

    calendar.render();
  });
