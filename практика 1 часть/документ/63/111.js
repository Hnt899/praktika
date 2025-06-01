function positionAt(anchor, position, elem) {
  const anchorCoords = anchor.getBoundingClientRect();
  const scrollY = window.pageYOffset;
  const scrollX = window.pageXOffset;
  
  switch (position) {
    case 'top':
      elem.style.left = `${scrollX + anchorCoords.left}px`;
      elem.style.top = `${scrollY + anchorCoords.top - elem.offsetHeight}px`;
      break;
    case 'right':
      elem.style.left = `${scrollX + anchorCoords.right}px`;
      elem.style.top = `${scrollY + anchorCoords.top}px`;
      break;
    case 'bottom':
      elem.style.left = `${scrollX + anchorCoords.left}px`;
      elem.style.top = `${scrollY + anchorCoords.bottom}px`;
      break;
  }
  
  elem.style.position = 'absolute';
}