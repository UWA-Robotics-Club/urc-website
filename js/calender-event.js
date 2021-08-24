
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
      //weekend: false,
      events: [
        {
          title: 'All Day Event',
          start: '2021-08-02T14:00:00',
          end: '2021-08-02T16:00:00',
          url:'http://www.google.com',
          color: regularWorkshop,

        },
        {
          title: 'Industy Event',
          start: '2021-08-05T18:00:00',
          end: '2021-08-05T20:00:00',
          url:'http://www.google.com',
          color: industryEvent,

        },
        {
          title: 'Hackathon',
          start: '2021-08-24T13:00:00',
          end: '2021-08-24T16:00:00',
          url:'http://www.google.com',
          color: generalEvent,

        },
        {
          title: 'Industy Event',
          start: '2021-08-24T15:00:00',
          end: '2021-08-24T16:00:00',
          url:'http://www.google.com',
          color: regularWorkshop,

        },

      ]
    });

    calendar.render();
  });
