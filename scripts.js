/* All JS code should wait until the page has loaded */
window.addEventListener('load', function () {
  /* Lookup all DOM elements used multiple times at the start.
  DOM lookups are relatively expensive, so try to reduce the number of
  times you retrieve the same node. */
  const imgObj = document.getElementById('rocket');
  const status = document.getElementById('flightStatus');
  const shuttleHeight = document.getElementById('spaceShuttleHeight');
  const bg = document.getElementById('shuttleBackground');

  /* Set the CSS styles. `cssText` is a shortcut for defining multiple rules
  at once. Equivalent to the inline `style` attribute in HTML */
  imgObj.style.cssText = `position:absolute;left:0px;bottom:0px;`;

  /* Abstracted function for moving the rocket image.
  Utilizes the CSS position 'absolute' to control the location:
  https://www.w3schools.com/cssref/pr_class_position.asp*/
  const onMove = (dirction) => () => {
    const curLeftPos = parseInt(imgObj.style.left);
    const curBottomPos = parseInt(imgObj.style.bottom);
    const curHeight = parseInt(shuttleHeight.innerHTML);
    switch (dirction) {
      case 'right':
        imgObj.style.left = `${curLeftPos + 10}px`;
        break;
      case 'left':
        imgObj.style.left = `${curLeftPos - 10}px`;
        break;
      case 'down':
        imgObj.style.bottom = `${curBottomPos - 10}px`;
        shuttleHeight.innerHTML = curHeight - 10000;
        break;
      case 'up':
        imgObj.style.bottom = `${curBottomPos + 10}px`;
        shuttleHeight.innerHTML = curHeight + 10000;
        break;
    }
  };

  /* If you don't need the node for any other manipulations,
  it common to see method chaining for event listeners */
  document.getElementById('right').addEventListener('click', onMove('right'));

  document.getElementById('left').addEventListener('click', onMove('left'));

  document.getElementById('down').addEventListener('click', onMove('down'));

  document.getElementById('up').addEventListener('click', onMove('up'));

  document.getElementById('takeOff').addEventListener('click', function () {
    result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      bg.style.backgroundColor = 'blue';
      shuttleHeight.innerHTML = '10000';
      status.innerHTML = 'Shuttle in flight';
    }
  });

  document.getElementById('land').addEventListener('click', function () {
    bg.style.backgroundColor = 'green';
    window.alert('The shuttle is landing. Landing gear engaged.');
    shuttleHeight.innerHTML = '0';
    status.innerHTML = 'Shuttle landed';
    imgObj.style.bottom = '0px';
  });

  document
    .getElementById('missionAbort')
    .addEventListener('click', function () {
      result = window.confirm('Are you sure you want to end the mission?');
      if (result) {
        bg.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        status.innerHTML = 'Mission aborted';
        imgObj.style.bottom = '0px';
      }
    });
});
