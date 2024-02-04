class Animal {
    constructor(name, backbone, coldBlooded) {
      this.name = name;
      this.backbone = backbone;
      this.coldBlooded = coldBlooded;
    }
  
    getInfo() {
      return `Name: ${this.name}, Backbone: ${this.backbone}, Cold Blooded: ${this.coldBlooded}`;
    }
  }
  
  class BackboneAnimal extends Animal {
    constructor(name, subclass) {
      super(name, true, true); 
      this.subclass = subclass;
    }
 
    getSubclassInfo() {
      return `Subclass: ${this.subclass}`;
    }
  }
  
  class WarmBloodedAnimal extends BackboneAnimal {
    constructor(name, subclass) {
      super(name, subclass);
      this.coldBlooded = false; 
    }
  }

  const fish = new BackboneAnimal('Fish', 'Fish');
  const amphibia = new BackboneAnimal('Amphibia', 'Amphibia');
  const reptile = new BackboneAnimal('Reptile', 'Reptilia');
  const bird = new WarmBloodedAnimal('Bird', 'Aves');
  const mammal = new WarmBloodedAnimal('Mammal', 'Mammalia');
  const arthropoda = new Animal('Arthropoda', false, true); // Without backbone

  const animalArray = [fish, amphibia, reptile, bird, mammal, arthropoda];
  
  animalArray.forEach(animal => {
    console.log(animal.getInfo());
    if (animal instanceof BackboneAnimal) {
      console.log(animal.getSubclassInfo());
    }
    console.log('---');
  });
  