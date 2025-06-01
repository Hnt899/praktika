function positionAt(anchor, position, elem) {
  const anchorCoords = anchor.getBoundingClientRect();
  const scrollY = window.pageYOffset;
  const scrollX = window.pageXOffset;
  
  elem.style.position = 'absolute';
  
  switch (position) {
    case 'top-out':
      elem.style.left = `${scrollX + anchorCoords.left}px`;
      elem.style.top = `${scrollY + anchorCoords.top - elem.offsetHeight}px`;
      break;
    case 'right-out':
      elem.style.left = `${scrollX + anchorCoords.right}px`;
      elem.style.top = `${scrollY + anchorCoords.top}px`;
      break;
    case 'bottom-out':
      elem.style.left = `${scrollX + anchorCoords.left}px`;
      elem.style.top = `${scrollY + anchorCoords.bottom}px`;
      break;
    case 'top-in':
      elem.style.left = `${scrollX + anchorCoords.left}px`;
      elem.style.top = `${scrollY + anchorCoords.top}px`;
      break;
    case 'right-in':
      elem.style.left = `${scrollX + anchorCoords.right - elem.offsetWidth}px`;
      elem.style.top = `${scrollY + anchorCoords.top}px`;
      break;
    case 'bottom-in':
      elem.style.left = `${scrollX + anchorCoords.left}px`;
      elem.style.top = `${scrollY + anchorCoords.bottom - elem.offsetHeight}px`;
      break;
  }
}