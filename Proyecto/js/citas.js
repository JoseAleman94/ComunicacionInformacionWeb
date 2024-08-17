document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      select: function(info) {
        var eventName = prompt('Ingresa el nombre de la cita:');
        if (eventName) {
          calendar.addEvent({
            title: eventName,
            start: info.start,
            end: info.end,
            allDay: info.allDay
          });
        }
        calendar.unselect();
      }
    });
    calendar.render();

    // Validación de fecha
    var today = new Date().toISOString().split('T')[0];
    document.getElementById('datePicker').setAttribute('min', today);

    // Evento para seleccionar fecha desde el input
    document.getElementById('datePicker').addEventListener('change', function() {
      var selectedDate = this.value;
      calendar.gotoDate(selectedDate);
      calendar.select(selectedDate);
    });
  });