// Add your scripts here
function navigation() {
  let x = document.getElementById('topnav');
  if (x.className === 'nav') {
    x.className += 'responsive';
  } else {
    x.className = 'nav';
  }
}
