class Singleton {
	constructor() {
		if (!Singleton.instance) {
			Singleton.instance = this.createInstance();
		}
		return Singleton.instance;
	}

	createInstance() {
		return new Object('Instance');
	}
}

let instance1 = new Singleton();
let instance2 = new Singleton();

console.log('Same instance?', instance1 === instance2);
