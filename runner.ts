interface Employee {
  name: string;
  id: number;
  isManager: boolean;
  getUniqueId: () => string;
}

class Runner {
  static lastRunTypeName: string;
  constructor(private typeName: string) {}
  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}
const a = new Runner('a');
const b = new Runner('b');

b.run();
a.run();
console.log(Runner.lastRunTypeName);

const linda: Employee = {
  name: 'linda',
  id: 2,
  isManager: false,
  getUniqueId: (): string => {
    let uniqueId = linda.id + '-' + linda.name;
    if (!linda.isManager) {
      return 'emp-' + uniqueId;
    }
    return uniqueId;
  },
};
console.log(linda.getUniqueId());

const pam: Employee = {
  name: 'pam',
  id: 1,
  isManager: true,
  getUniqueId: (): string => {
    let uniqueId = pam.id + '-' + pam.name;
    if (pam.isManager) {
      return 'mgr-' + uniqueId;
    }
    return uniqueId;
  },
};
console.log(pam.getUniqueId());

class Vehicle {
  constructor(private wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`);
  }
}
class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
}
class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorcycle = new Motorcycle();
motorcycle.showNumberOfWheels();
const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();
