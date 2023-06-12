import { AnimatedSprite, Application, Container, Graphics, Sprite, Texture, Ticker, Text } from "pixi.js"
import { Sound } from "@pixi/sound";

export class Car extends Container{
    constructor(){
        super();
        this.car = Sprite.from("assets/images/car.png");
        this.addChild(this.car);
        this.car.x = 30;
        this.car.y = innerHeight*(0.56 + 0.4*Math.random());
        this.car.scale.set(0.2, 0.2);      
        this.racingSound = Sound.from("assets/sounds/racing.mp3");
        this.bullets = [];
        this.bulletTimer = 0;
        this.isDead = false;
        Ticker.shared.add(this.timer.bind(this));
    }
    timer(){
        if(this.bulletTimer > 0 ) this.bulletTimer--;
        //console.log(this.bulletTimer);
    }
    init(){
        window.addEventListener("keydown", this.controller.bind(this));
        window.addEventListener("keyup", this.controller.bind(this));
        this.keys = {};
        this.movespeed = 20;
    }
    controller(e){
        if(e.type == "keydown"){
            this.keys[e.keyCode] = true;
            //console.log("keydown");
        }
        if(e.type == "keyup"){
            this.keys[e.keyCode] = false;
            this.racingSound.stop();
            //console.log("keyup");
        }
        if(this.isDead == false){
            if(this.keys[37]){
                this.racingSound.play();
                this.car.x -= this.movespeed;
                if(this.car.x-this.movespeed<0) this.car.x = 0;
            }
            if(this.keys[39]){
                this.racingSound.play();
                this.car.x +=this.movespeed;
                if(this.car.x+this.movespeed>innerWidth-this.car.width) this.car.x = innerWidth-this.car.width;
            }
            if(this.keys[38]){
                this.racingSound.play();
                this.car.y -=this.movespeed;
                if(this.car.y - this.movespeed<innerHeight*0.56) this.car.y = innerHeight*0.56;
            }
            if(this.keys[40]){
                this.racingSound.play();
                this.car.y+=this.movespeed;
                if(this.car.y+this.movespeed>innerHeight-this.car.height) this.car.y = innerHeight-this.car.height;
            }
            if(this.keys[32]){
                //console.log("Bam space");
                if(this.bulletTimer <= 0) {
                    var bullet = new Bullet();
                    bullet.x = this.car.x + this.car.width;
                    bullet.y = this.car.y + this.car.height/4;
                    this.bullets.push(bullet);
                    this.addChild(this.bullets[this.bullets.length-1]);
                    this.bulletTimer = 20;
                }
    
    
            }          
        }

    }
}
export class Bullet extends Container{
    constructor(){
        super();
        this.bullet = Sprite.from("assets/images/bullet.png");
        this.addChild(this.bullet);
        this.bullet.scale.set(0.03, 0.03);
        Ticker.shared.add(this.update.bind(this));
    }
    update(){
        this.bullet.x +=10;
        if(this.bullet.x > innerWidth*1.5) {
            this.removeChild(this.bullet);
        };
    }

}
export class Enemy extends Container{
    constructor(){
        super();
        this.enemy = Sprite.from("assets/images/enemy.png");
        this.enemy.scale.set(0.05,0.05);
        this.addChild(this.enemy);
        this.enemy.x = innerWidth;
        this.enemy.y = innerHeight*(0.56 + 0.4*Math.random());
        this.movespeed = 5;
        Ticker.shared.add(this.move.bind(this));

    }
    move(){
        this.enemy.x -= this.movespeed;
        if(this.enemy.x < -innerWidth/2){
            this.removeChild(this.enemy);
        }
    }

}
export class Award extends Container{
    constructor(){
        super();
        var star = [
            "assets/images/shiningstar/Asset 1.png",
            "assets/images/shiningstar/Asset 2.png",
            "assets/images/shiningstar/Asset 3.png",
            "assets/images/shiningstar/Asset 4.png",
            "assets/images/shiningstar/Asset 5.png",
            "assets/images/shiningstar/Asset 6.png",
        ];
        this.award = new AnimatedSprite(star.map(sprite => Texture.from(sprite)));
        this.addChild(this.award);
        this.award.play();
        this.award.animationSpeed = 0.1;
        this.award.scale.set(0.3, 0.3);
        this.award.x = innerWidth;
        this.award.y = innerHeight*(0.56 + 0.4*Math.random());
        this.movespeed = 2;
        Ticker.shared.add(this.move.bind(this));
        this.bigStar = false;
    }
    move(){
        this.award.x -=this.movespeed;
        if(this.award.x< - innerWidth/2) {
            this.removeChild(this.award);
        }
    }


}
export class Background extends Container{
    constructor(){
        super();
        this.background1 = Sprite.from("assets/images/background.jpg");
        this.background1.width = innerWidth+5,
        this.background1.height = innerHeight;
        this.addChild(this.background1);
        this.background2 = Sprite.from("assets/images/background.jpg");
        this.background2.width = innerWidth+5,
        this.background2.height = innerHeight;
        this.background2.x = innerWidth+5;
        this.addChild(this.background2);
        this.movespeed = 2;
        Ticker.shared.add(this.move.bind(this));
        this.backgroundSound = Sound.from("assets/sounds/background.mp3");
    }
    move(){
        if(this.backgroundSound.isPlaying == false) {
            this.backgroundSound.volume = 0.5;
            this.backgroundSound.play();
            this.backgroundSound.loop = true;
            
        }
        this.background1.x -= this.movespeed;
        if(this.background1.x< -innerWidth) {
            this.background1.x = innerWidth;
        }
        this.background2.x -= this.movespeed;
        if(this.background2.x< -innerWidth) {
            this.background2.x = innerWidth;
        }
    }
}

export class Program{
    static init(){
        const app = new Application({
            width: innerWidth,
            height: innerHeight,
            background: 0x987654
        });
        this.app = app;
        document.body.appendChild(app.view);
        var background = new Background();
        app.stage.addChild(background);
        this.graphic = new Graphics();        
        this.app.stage.addChild(this.graphic);
        this.graphic.beginFill("violet");
        this.graphic.drawRect(0, 0, 100,50);
        this.graphic.endFill();
        this.graphic.beginFill("blue");
        this.graphic.drawRect(innerWidth - 100, 0, 100,50);
        this.graphic.endFill();
        this.car = new Car();
        this.car.init();
        app.stage.addChild(this.car);
        app.ticker.add(this.randomObject.bind(this));
        this.ec = 100;
        this.ac = 300;
        this.eCounter = this.ec;
        this.aCounter = this.ac;
        this.enemies = [];
        this.awards = [];
        app.ticker.add(this.bombCar.bind(this));
        app.ticker.add(this.starCar.bind(this));
        app.ticker.add(this.bombBullet.bind(this));
        app.ticker.add(this.starBullet.bind(this));
        this.score = 0;
        this.lives = 3;
        this.sText = new Text("Score: 0");
        this.sText.x = innerWidth;
        this.sText.y = 5;
        this.sText.anchor.set(1,0);
        app.stage.addChild(this.sText);
        this.lText = new Text("Lives: "+this.lives);
        this.lText.x = 0;
        this.lText.y = 5;
        this.app.stage.addChild(this.lText);        
        this.bombSound = Sound.from("assets/sounds/bomb.mp3");
        this.bombSound.volume = 1000000;
        this.starSound = Sound.from("assets/sounds/star.mp3");
        this.starSound.volume = 1000000;
        this.addLife = 0;
        
    }
    static randomObject(){
        this.eCounter--;
        this.aCounter--;  

        if(this.eCounter < 0){            
            var enemy = new Enemy();
            this.app.stage.addChild(enemy);
            this.enemies.push(enemy);
            this.eCounter = this.ec;
        }
        if(this.aCounter < 0){  
            if(this.addLife <2){
                var award = new Award();
                this.app.stage.addChild(award);
                this.awards.push(award);
                this.aCounter = this.ac;
            }              
            else{
                var award = new Award();
                this.app.stage.addChild(award);
                award.bigStar = true;
                award.award.scale.set(2,2);
                award.award.y = innerHeight*(0.56 + 0.3*Math.random());
                this.awards.push(award);
                this.aCounter = this.ac;
                this.addLife = 0;
                console.log("Sau khi reset addlife la");
                console.log(this.addLife);
            }
        }
        //console.log(this.aCounter);
    }
    static bombCar(){
        if( this.car.isDead == false){
            this.enemies.forEach(enemy =>{
                var aBox = this.car.car.getBounds();
                var bBox = enemy.getBounds();
                if(aBox.x + aBox.width > bBox.x &&
                aBox.x < bBox.x + bBox.width &&
                aBox.y + aBox.height > bBox.y &&
                aBox.y < bBox.y + bBox.height){
                    this.bombSound.play();
                    console.log("va cham bom");
                    enemy.removeChildren();
                    this.lives--;
                    //console.log(this.lives);
                    this.app.stage.removeChild(this.lText);
                    this.lText =  new Text("Lives: " + this.lives);
                    this.lText.x = 0;
                    this.lText.y = 5;
                    this.app.stage.addChild(this.lText);
                    if(this.lives <= 0 ){
                        this.car.removeChildren();   
                        this.car.isDead = true;    
                    }
                }
            })  
        }
        
    }
    static starCar(){
        if( this.car.isDead == false){
            this.awards.forEach(award =>{
                var aBox = this.car.car.getBounds();
                var bBox = award.getBounds();
                if(aBox.x + aBox.width > bBox.x &&
                aBox.x < bBox.x + bBox.width &&
                aBox.y + aBox.height > bBox.y &&
                aBox.y < bBox.y + bBox.height){
                    this.starSound.play();
                    console.log("va cham sao");
                    if(award.bigStar == true) this.score +=1+Math.floor(5*Math.random());
                    else this.score++;
                    award.removeChildren();     
                    this.addLife++;
                    console.log(this.addLife);
                    //console.log(this.score);
                    this.app.stage.removeChild(this.sText);
                    this.sText =  new Text("Score: " + this.score);
                    this.sText.x = innerWidth;
                    this.sText.y = 5;
                    this.sText.anchor.set(1,0);
                    this.app.stage.addChild(this.sText);
                }
            })  
        }
        
    }
    static starBullet(){
        if( this.car.isDead == false){
            this.awards.forEach(award =>{
                this.car.bullets.forEach(bullet => {
                    var aBox = bullet.getBounds();
                    var bBox = award.getBounds();
                    if(aBox.x + aBox.width > bBox.x &&
                    aBox.x < bBox.x + bBox.width &&
                    aBox.y + aBox.height > bBox.y &&
                    aBox.y < bBox.y + bBox.height){
                    this.starSound.play();
                    console.log("va cham sao");
                    if(award.bigStar == true) this.score +=1+Math.floor(5*Math.random());
                    else this.score++;
                    this.addLife++;
                    console.log(this.addLife);
                    //console.log(this.score);
                    this.app.stage.removeChild(this.sText);
                    this.sText =  new Text("Score: " + this.score);
                    this.sText.x = innerWidth;
                    this.sText.y = 5;
                    this.sText.anchor.set(1,0);
                    this.app.stage.addChild(this.sText);
                    award.removeChildren();
                    bullet.removeChildren();
                }
                })
            })  
        }
    }
    static bombBullet(){
        if( this.car.isDead == false){
            this.enemies.forEach(enemy =>{
                this.car.bullets.forEach(bullet => {
                    var aBox = bullet.getBounds();
                    var bBox = enemy.getBounds();
                    if(aBox.x + aBox.width > bBox.x &&
                    aBox.x < bBox.x + bBox.width &&
                    aBox.y + aBox.height > bBox.y &&
                    aBox.y < bBox.y + bBox.height){
                    this.bombSound.play();
                    console.log("va cham bom");
                    enemy.removeChildren();
                    bullet.removeChildren();
                    }
                })
            })  
        }
    }
}

window.onload = function(){
    Program.init();
}







