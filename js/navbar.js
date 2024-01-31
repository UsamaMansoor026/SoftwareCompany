const widthh = document.getElementById('width');
const initialWidth = window.innerWidth;
console.log("Initial window width:", initialWidth);


window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  if (newWidth < '800') {
    widthh.innerHTML = "Tablet View"
  }
  else {
    widthh.innerHTML = "Desktop View"
  }
});

