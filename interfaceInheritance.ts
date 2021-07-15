namespace IntefaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }
  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount: (newWheelCount: number) => void;
    showNumberOfWheels: () => void;
  }

  class Motorcycle implements Vehicle {
    name: string;
    wheelCount: number;
    constructor(name: string) {
      this.name = name;
    }
    updateWheelCount(newWheeelCount: number) {
      this.wheelCount = newWheeelCount;
      console.log(`Automobile has ${this.wheelCount} miles`);
    }
    showNumberOfWheels() {
      console.log(`moved Automobile ${this.wheelCount} miles`);
    }
    getFullName() {
      return 'MC-' + this.name;
    }
  }
  const moto = new Motorcycle('beginner-cycle');
  console.log(moto.getFullName());
}
