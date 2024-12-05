imagenes.forEach((imagen) => {
 imagen.addEventListener('mousedown', (e) => {
  const rect = imagen.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  imagen.style.position = 'absolute';
  imagen.style.top = `${y}px`;
  imagen.style.left = `${x}px`;

  document.addEventListener('mousemove', (e) => {
   const newX = e.clientX - x;
   const newY = e.clientY - y;

   imagen.style.top = `${newY}px`;
   imagen.style.left = `${newX}px`;
  });

  document.addEventListener('mouseup', () => {
   imagen.style.position = '';
  });
 });
});