function Employee(name) {
  this.name = name;
  
  this.say = function () {
    console.log('I am employee ' + name);
  };
}

function EmployeeFactory() {
  this.create = function(name) {
    return new Employee(name);
  };
}

function Vendor(name) {
  this.name = name;
  
  this.say = function () {
    console.log('I am vendor ' + name);
  };
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  };
}

function run() {
  const persons = [];
  const employeeFactory = new EmployeeFactory();
  const vendorFactory = new VendorFactory();
  
  persons.push(employeeFactory.create('Jin'));
  persons.push(employeeFactory.create('Min'));
  persons.push(employeeFactory.create('Uk'));
  persons.push(vendorFactory.create('ca'));
  persons.push(vendorFactory.create('co'));
  persons.push(vendorFactory.create('ceo'));
  
  const result = persons.forEach((person) => person.say());
  return result;
}

run();