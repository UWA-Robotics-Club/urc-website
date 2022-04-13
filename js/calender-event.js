
const regularWorkshop = '#e37268';
const industryEvent = 'black';
const generalEvent = '#617496';
const specialEvent = '#C31624' // Red-ish

document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date().toISOString().slice(0, 10)
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: currentDate,
      headerToolbar: {
        left: 'title',
        right: 'prev,next today,dayGridMonth,timeGridWeek,timeGridDay'
      },
      firstDay:1, //Monday
      slotMinTime: '09:00:00',
      slotMaxTime: '21:00:00',
      // weekends: false,
      // hiddenDays: [ 0 ],

      events: [
        //   Added: 2021
		{
           title: 'Curtin Hackathon',
           start: '2021-09-06T09:00:00',
           end: '2021-09-06T17:00:00',
           url:'https://www.facebook.com/events/212163597472526/',
           color: generalEvent,
        },
        // Added: 21 Feb 2022
        {
            title: 'O-Day',
            start: '2022-02-25T11:00:00',
            end: '2022-02-25T15:00:00',
            url:'https://www.facebook.com/events/529277665073081',
            color: generalEvent,
         },
         // Added: 21 Feb 2022
         // {
         //    title: 'Hello Robot Workshop',
         //    start: '2022-03-11T13:00:00',
         //    end: '2022-03-11T15:00:00',
         //    url:'',
         //    color: regularWorkshop,
         // },
         // // Added: 21 Feb 2022
         // {
         //    title: 'Mechelmech Networking Night',
         //    start: '2022-03-15T18:00:00',
         //    end: '2022-03-15T21:30:00',
         //    url:'',
         //    color: specialEvent,
         // },
         // // Added: 21 Feb 2022
         // {
         //    title: 'Tech vs Elec Quiz Night',
         //    start: '2022-04-01T18:00:00',
         //    end: '2022-04-01T21:30:00',
         //    url:'',
         //    color: specialEvent,
         // },
      ]
    });

    calendar.render();
  });
