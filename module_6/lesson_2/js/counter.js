const counterTemplate = (value) =>
  `<fieldset class="widget">
    <legend>counter</legend>
    <button class="button decrement">-</button>
    <span class="value">${value}</span>
    <button class="button increment">+</button>
  </fieldset>`;

export default class Counter {
  constructor({ value, selector }) {
    this.refs = {};
    this.value = value;
    this.parent = document.querySelector(selector);

    this.parent.insertAdjacentHTML('beforeend', counterTemplate(this.value));

    this.refs.value = this.parent.querySelector('.value');
    this.refs.decrement = this.parent.querySelector('.button.decrement');
    this.refs.increment = this.parent.querySelector('.button.increment');

    this.refs.decrement.addEventListener('click', this.decrement.bind(this));
    this.refs.increment.addEventListener('click', () => {
      this.increment();
    });
  }

  render() {
    this.refs.value.textContent = this.value;
  }

  increment(step = 1) {
    // It is bad practice to use data from the DOM
    // this.refs.value.textContent = Number(this.refs.value.textContent) + 1;

    // It's good practice to use data from memory and then render it to the DOM
    this.value += step;
    this.render();
  }

  decrement(e, step = 1) {
    // It is bad practice to use data from the DOM
    // this.refs.value.textContent = Number(this.refs.value.textContent) - 1;

    // It's good practice to use data from memory and then render it to the DOM
    this.value -= step;
    this.render();
  }
}
