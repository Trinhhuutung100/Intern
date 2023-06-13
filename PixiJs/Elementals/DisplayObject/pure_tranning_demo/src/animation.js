import { AnimatedSprite, Application, Container, Texture, Ticker, Sprite } from "pixi.js";
//Animation
export class Scene0 extends Container{
        constructor(){
            super();
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
            this.addChild(animatedClampy); // we just add it to the scene
            animatedClampy.play();
            animatedClampy.animationSpeed = 0.25;
            // Now... what did we learn about assigning functions...
            animatedClampy.onFrameChange = this.onClampyFrameChange.bind(this);
        }
    
        onClampyFrameChange(currentFrame) {
            console.log("Clampy's current frame is", currentFrame);
        }

        static init(){
            this.app = new Application({
            width: 1300,
            height: 610,
            background: 0xffffff
            })
            document.body.appendChild(this.app.view);
            var sc = new Scene0();
            sc.x = 1000;
            sc.y = 200;
            this.app.stage.addChild(sc);
        }
    }

export class Scene1 extends Container {
   
    constructor(screenWidth, screenHeight) {
        super(); 
        this.clampy = new Scene0();
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    
        this.clampy.x = 0; // we start it at 0
        this.clampy.y = this.screenHeight;
        this.addChild(this.clampy);

        Ticker.shared.add(this.update, this);
    
        // If you want, you can do it the bind way
        // Ticker.shared.add(this.update.bind(this));
    }
    
    update() {
        this.clampy.x = this.clampy.x + 2;
    
        if (this.clampy.x > this.screenWidth) {
            // Woah there clampy, come back inside the screen!
                this.clampy.x = 0;
        }
    }
    static init(){
        this.app = new Application({
            width: innerWidth,
            height: innerHeight,
            background: 0xffffff
        })

        //Add sprite and background
        document.body.appendChild(this.app.view);
        var sc = new Scene1(1300, 200);
        this.app.stage.addChild(sc);
        var bg = Sprite.from("assets/images/bg.jpg");
        bg.x = 0;
        bg.y = 0;
        bg.width = innerWidth;
        bg.height = innerHeight;
        this.app.stage.addChildAt(bg,0);
    }
}

window.onload = function(){
    Scene1.init();
}
    