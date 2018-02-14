export default class BasePageObj {
  constructor (wrapper) {
    if (!wrapper) {
      throw new Error('Cannot create Page object without specifying wrapper.');
    }

    this.wrapper = wrapper;
  }

  get vm () {
    return this.wrapper.vm;
  }

  exists () {
    return this.wrapper.exists();
  }

  text () {
    return this.wrapper.text();
  }

  attributes () {
    return this.wrapper.attributes();
  }

  tid (...args) {
    return this.wrapper.tid(...args);
  }

  tids (...args) {
    return this.wrapper.tids(...args);
  }

  trigger (...args) {
    return this.wrapper.trigger(...args);
  }
}
