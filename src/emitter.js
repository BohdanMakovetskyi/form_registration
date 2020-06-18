class EventEmitter {
  constructor() {
    this.events = {};
  }

  emit(eventName, data) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }
  }

  on(eventName, func) {
    if(!this.events[eventName]) {
      this.events[eventName] = [];
    }
      
    this.events[eventName].push(fn);

    return () => {
      this.events = this.events[event].filter(eventFunc => eventFunc !== func);
    }
  }

}
export default EventEmitter;
