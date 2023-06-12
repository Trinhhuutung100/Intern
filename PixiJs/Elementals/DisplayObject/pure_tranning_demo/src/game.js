import { Application, Container, Graphics, Sprite, Text, TextStyle, BitmapText, BitmapFont, BlurFilter, ParticleContainer, Texture, AnimatedSprite } from 'pixi.js'
import { Emitter, upgradeConfig } from "@pixi/particle-emitter"
import config from "../assets/jsons/emitter.json";

const app = new Application({
    backgroundColor: 0xffffff,
    width: 1320,
    height: 650
});

document.body.appendChild(app.view); 
//Sprite
var clampy = Sprite.from("../assets/images/cat.png");
clampy.anchor.set(0.5);
clampy.x = app.screen.width/2;
clampy.y = app.screen.height/2;
app.stage.addChild(clampy);
//Container
var conty = new Container();
app.stage.addChild(conty);
var sp2 = Sprite.from("assets/images/mouse.png");
conty.addChild(sp2);
//Graphics
var gp = new Graphics();
app.stage.addChild(gp);
gp.beginFill("green");
gp.lineStyle("red");
gp.drawCircle(1000, 200, 25);
gp.endFill();
//Text
var text = new Text("Jotaro", {
    fill: 0x123456,
    fontSize: 34,
    fontFamily: "Comic Sans MS"
    
});
text.x  =1000;
text.y = 500;
app.stage.addChild(text);
//Bitmaptext
BitmapFont.from("DIO", {

});
var bt =  new BitmapText("DIO", {
    fontName: "DIO"
});
bt.x = 1000;
bt.y = 400;
app.stage.addChild(bt);
//Filters
var ft = new BlurFilter();
sp2.filters = [ft];
//Particles
var pc = new ParticleContainer();
app.stage.addChild(pc);
var texture = Texture.from("../assets/images/mouse.png");
var em = new Emitter(pc, upgradeConfig(config, [texture]));
em.autoUpdate = true;
em.updateSpawnPos(200, 100);
em.emit = true;
