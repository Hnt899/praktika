function positionAt(anchor, position, elem) {
  const anchorCoords = anchor.getBoundingClientRect();
  
  switch (position) {
    case 'top':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.top - elem.offsetHeight}px`;
      break;
    case 'right':
      elem.style.left = `${anchorCoords.right}px`;
      elem.style.top = `${anchorCoords.top}px`;
      break;
    case 'bottom':
      elem.style.left = `${anchorCoords.left}px`;
      elem.style.top = `${anchorCoords.bottom}px`;
      break;
  }
  
  elem.style.position = 'fixed';
}