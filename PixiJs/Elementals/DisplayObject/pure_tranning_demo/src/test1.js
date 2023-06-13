import { AnimatedSprite, Application, Container, Sprite, Ticker, Texture } from "pixi.js";
import { AdvancedBloomFilter } from "pixi-filters";


export class Anim extends Container{

    constructor(){
        super();
        this.rocket = Sprite.from("assets/images/rocket.png");
        this.rocket.scale.set(0.05,0.05);
        this.addChild(this.rocket);
        this.rocket.x = innerWidth;
        this.rocket.y = innerHeight*0.56+innerHeight*0.44*Math.random();
        this.bgd = Sprite.from("assets/images/BigPreviewTwelve.jpg");
        this.addChildAt(this.bgd, 0);
        this.bgd.width = innerWidth+2;
        this.bgd.height = innerHeight;
        this.bgd.x = 0;
        this.bglp = Sprite.from("assets/images/BigPreviewTwelve.jpg");
        this.addChildAt(this.bglp, 1);
        this.bglp.width = innerWidth+2;
        this.bglp.height = innerHeight;
        this.bglp.x = innerWidth;
        Ticker.shared.add(this.updateBg, this);
        Ticker.shared.add(this.rocking, this);
    }

    rocking(){

        this.rocket.x -=5;
        if(this.rocket.x -5 <-this.rocket.width*5) {
            this.rocket.y = innerHeight*0.56+innerHeight*0.44*Math.random();
            this.rocket.x = innerWidth;
        } 
    }

    updateBg(){
        this.bgd.x -=2;
        if(this.bgd.x -2 <-innerWidth ) this.bgd.x = innerWidth;
        this.bglp.x -=2;
        if(this.bglp.x -2 <-innerWidth ) this.bglp.x = innerWidth;
    }

    static init(){
        //My app
        this.app = new Application({
            width: innerWidth,
            height: innerHeight,
            background: 0xffffff
        });
        document.body.appendChild(this.app.view);
        var bg = new Anim();
        this.app.stage.addChild(bg);
        var clampyFrames = [
            "assets/images/runningboy/a1.png",
            "assets/images/runningboy/a1.png",
            "assets/images/runningboy/a3.png",
            "assets/images/runningboy/a4.png",
            "assets/images/runningboy/a5.png",
            "assets/images/runningboy/a6.png",
            "assets/images/runningboy/a7.png",
            "assets/images/runningboy/a8.png",
            "assets/images/runningboy/a9.png",
            "assets/images/runningboy/a10.png"            

        ];
        var animatedClampy = new AnimatedSprite(clampyFrames.map((stringy) => Texture.from(stringy)));
        this.app.stage.addChild(animatedClampy); // we just add it to the scene
        animatedClampy.play();
        animatedClampy.animationSpeed = 0.75;
        
        this.mouse = Sprite.from("assets/images/car.png");
        this.mouse.anchor.set(0.5);
        this.mouse.x = innerWidth*0.1; 
        this.mouse.y = innerHeight*0.8;
        this.mouse.scale.set(0.2,0.2);
        this.app.stage.addChildAt(this.mouse, 1);
        this.onKeyPress = this.onKeyPress.bind(this);
        window.addEventListener("keydown", this.onKeyPress);
        window.addEventListener("keyup", this.onKeyPress);
        this.keys = {};
        this.speed = 10;

        
    }


    static onKeyPress(e){
        if(e.type == "keydown") this.keys[e.keyCode] = true;
        if(e.type == "keyup") {
            if(e.keyCode == 32) {
                this.speed = 10;
                this.mouse.filters = [];
            }
            this.keys[e.keyCode] = false;
        }
        
        if(this.keys[32]) {
            if(this.keys[39]){
                this.speed++;
                if(this.speed == 14)
                    this.mouse.filters = [new AdvancedBloomFilter({
                        threshold: 0.1,
                        bloomScale: 1.5,
                        brightness: 1.5,
                        blur: 20
                    })];
            }
            
        }

        if(this.keys[39]) {            
            //this.mouse.scale.set(1,this.mouse.scale._y);
            this.mouse.x +=this.speed;
            if(this.mouse.x+this.speed>innerWidth - this.mouse.width/2) this.mouse.x = innerWidth-this.mouse.width/2;
        }
        if(this.keys[37]) {
            //this.mouse.scale.set(-1,this.mouse.scale._y);
            this.mouse.x -=10;
            if(this.mouse.x-10<this.mouse.width/2) this.mouse.x = this.mouse.width/2;
        }
        if(this.keys[40]){
            //this.mouse.scale.set(this.mouse.scale._x,1);
            this.mouse.y +=10;
            if(this.mouse.y+10>innerHeight-this.mouse.height/2) this.mouse.y = innerHeight-this.mouse.height/2;
        }
        if(this.keys[38]) {
            //this.mouse.scale.set(this.mouse.scale._x,-1);
            this.mouse.y -=10;
            if(this.mouse.y-10<innerHeight*0.56) this.mouse.y = innerHeight*0.56;
        }
    }
    

    
}


window.onload = function(){
    Anim.init();
}






