class Developer {
    startWork() {
        console.log(`${this.name} starts work ...`);
    }
    endWork() {
        console.log(`${this.name} ends work ...`);
    }
}

class Frontend extends Developer {
    constructor(name, webSiteName){
        super()
        this.name = name;
        this.webSiteName = webSiteName;
    }
    buildWebSite() {
        console.log(`${this.name} start build website ${this.webSiteName}`);
    }
}

class Backend extends Developer {
    constructor(name){
        super()
        this.name = name;
    }
    buildServer() {
        console.log(`${this.name} start build server`);
    }
}

const john = new Frontend('john', 'Amazon');
    john.startWork();        
    john.buildWebSite();     
    john.endWork(); 

const jack = new Backend('jack');  
    jack.startWork(); 
    jack.buildServer();
    jack.endWork(); 



