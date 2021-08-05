window.addEventListener('load', function () {
  const flightStatus = document.getElementById('flightStatus');
  const takeOffBtn = document.getElementById('takeoff');
  takeOffBtn.addEventListener('click', function () {
    const result = window.confirm(
      'Are you sure the shuttle is ready for takeoff?'
    );
    if (result) {
      flightStatus.innerHTML = 'Shuttle in flight!';
    }
  });
});
