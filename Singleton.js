const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("I am the Instance");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

function run() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  return instance1 === instance2;
}