// Add your scripts here
function myFunction() {
  const x = document.getElementById('topnav');
  if (x.className === 'nav') {
    x.className += 'responsive';
  } else {
    x.className = 'nav';
  }
}
