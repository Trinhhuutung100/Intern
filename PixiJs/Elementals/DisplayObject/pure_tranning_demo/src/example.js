import { AnimatedSprite,Rectangle, Application, Assets, Sprite, Ticker, Texture, Spritesheet } from "pixi.js";

// Tạo một PIXI.Application
const app = new Application({
    width: innerWidth,
    height: innerHeight,
    background: 0x123456
});

// Thêm canvas vào HTML
document.body.appendChild(app.view);

// Tạo một texture từ ảnh
const texture = Texture.from('assets/images/bg.jpg');
var fw = texture.width/4;
var fh = texture.height/4;
var frame = new Rectangle(0, 0, fw, fh);
var newTexture = new Texture(texture, frame);
var sprite = new Sprite(newTexture);
app.stage.addChild(sprite);