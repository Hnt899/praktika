class HoverIntent {
  constructor({elem, over, out}) {
    this.elem = elem;
    this.over = over;
    this.out = out;
    this.timer = null;
    this.isOver = false;
    this.lastMouseMoveTime = 0;
    
    // Обработчики событий
    elem.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    elem.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    elem.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }
  
  handleMouseEnter() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (!this.isOver) {
        this.over();
        this.isOver = true;
      }
    }, 300); // Задержка перед показом
  }
  
  handleMouseLeave() {
    if (this.timer) clearTimeout(this.timer);
    if (this.isOver) {
      this.out();
      this.isOver = false;
    }
  }
  
  handleMouseMove(event) {
    const now = Date.now();
    const speed = Math.sqrt(
      Math.pow(event.movementX, 2) + 
      Math.pow(event.movementY, 2)
    ) / (now - this.lastMouseMoveTime || 1);
    
    // Если скорость движения мыши высокая - отменяем показ
    if (speed > 0.5 && this.timer) {
      clearTimeout(this.timer);
    }
    
    this.lastMouseMoveTime = now;
  }
  
  destroy() {
    this.elem.removeEventListener('mouseenter', this.handleMouseEnter);
    this.elem.removeEventListener('mouseleave', this.handleMouseLeave);
    this.elem.removeEventListener('mousemove', this.handleMouseMove);
  }
}