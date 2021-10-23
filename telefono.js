class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
        this.info = `Les presento este nuevo samsung ${this.color}, con un peso de ${this.peso}, pantalla de ${this.resolucionDePantalla} y ${this.memoriaRam}`;
    }
    verInfo() {
        console.log(this.info)
    }
    presionarBotonEncendido() {
        if(this.encendido == false){
            console.log("Celular Encendido");
            this.encendido == true;
        } else {
            console.log("Celular Apagado");
            this.encendido = false;
        }
    }
}

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rcde){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rcde;
        
    }
    grabarVideoLento(){
        console.log("Estas grabando en camara lenta")
    }
    ReconocimientoFacial(){
        console.log("Iniciando reconocimiento facial")
    }
    infoAltaGama(){
        console.log(this.verInfo() + `resolucion de camara extra: ${this.resolucionDeCamara}`)
    }
}
let Samsumg = new Celular ("azul","0.3g","fhd","1200mp","8ram")
let huawei = new CelularAltaGama ("negro","0.2","25cm","UHD","10ram", "10");


Samsumg.verInfo();
huawei.ReconocimientoFacial();


