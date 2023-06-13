import { AnimatedSprite, Application, Container, Graphics, Sprite, Texture, Ticker, Text, TilingSprite } from "pixi.js";
{

//crouch
{
    const crouch = [
        "assets/image/player/crouch/Anim_CROUCH_00003.png ",
        "assets/image/player/crouch/Anim_CROUCH_00005.png ",
        "assets/image/player/crouch/Anim_CROUCH_00007.png ",
        "assets/image/player/crouch/Anim_CROUCH_00009.png ",
        "assets/image/player/crouch/Anim_CROUCH_00011.png"
    ];
        var crouchPlayer = new AnimatedSprite(crouch.map(stringy => Texture.from(stringy)));
        crouchPlayer.play();
        crouchPlayer.name = "crouch";
}

//crouchwithgun
{
    const crouchwithgun = [
        "assets/image/player/crouchwithgun/Ellen_CrouchWithGun00.png ",
        "assets/image/player/crouchwithgun/Ellen_CrouchWithGun01.png ",
        "assets/image/player/crouchwithgun/Ellen_CrouchWithGun02.png ",
        "assets/image/player/crouchwithgun/Ellen_CrouchWithGun03.png ",
        "assets/image/player/crouchwithgun/Ellen_CrouchWithGun04.png"
    ];
        var crouchwithgunPlayer = new AnimatedSprite(crouchwithgun.map(stringy => Texture.from(stringy)));
        crouchwithgunPlayer.play();
        crouchwithgunPlayer.name = "crouchwithgunPlayer";
}

//death
{
    const death = [
        "assets/image/player/death/Anim_DEATH_00003.png ",
        "assets/image/player/death/Anim_DEATH_00005.png ",
        "assets/image/player/death/Anim_DEATH_00007.png ",
        "assets/image/player/death/Anim_DEATH_00009.png ",
        "assets/image/player/death/Anim_DEATH_00011.png ",
        "assets/image/player/death/Anim_DEATH_00013.png ",
        "assets/image/player/death/Anim_DEATH_00015.png ",
        "assets/image/player/death/Anim_DEATH_00017.png ",
        "assets/image/player/death/Anim_DEATH_00019.png ",
        "assets/image/player/death/Anim_DEATH_00021.png ",
        "assets/image/player/death/Anim_DEATH_00023.png ",
        "assets/image/player/death/Anim_DEATH_00025.png"
    ];
        var deathPlayer = new AnimatedSprite(death.map(stringy => Texture.from(stringy)));
        deathPlayer.play();
        deathPlayer.name = "deathPlayer";
}

//hurt
{
    const hurt = [
        "assets/image/player/hurt/Anim_HURT_00007.png ",
        "assets/image/player/hurt/Anim_HURT_00009.png ",
        "assets/image/player/hurt/Anim_HURT_00011.png ",
        "assets/image/player/hurt/Anim_HURT_00013.png ",
        "assets/image/player/hurt/Anim_HURT_00015.png"
    ]
    var hurtPlayer = new AnimatedSprite(hurt.map(stringy => Texture.from(stringy)));
    hurtPlayer.play();
    hurtPlayer.name = "hurtPlayer";
}

//idle
{
    const idle = [
        "assets/image/player/idle/Anim_IDLE_00001.png ",
        "assets/image/player/idle/Anim_IDLE_00003.png ",
        "assets/image/player/idle/Anim_IDLE_00005.png ",
        "assets/image/player/idle/Anim_IDLE_00007.png ",
        "assets/image/player/idle/Anim_IDLE_00009.png ",
        "assets/image/player/idle/Anim_IDLE_00011.png ",
        "assets/image/player/idle/Anim_IDLE_00013.png ",
        "assets/image/player/idle/Anim_IDLE_00015.png ",
        "assets/image/player/idle/Anim_IDLE_00017.png ",
        "assets/image/player/idle/Anim_IDLE_00019.png ",
        "assets/image/player/idle/Anim_IDLE_00021.png ",
        "assets/image/player/idle/Anim_IDLE_00023.png ",
        "assets/image/player/idle/Anim_IDLE_00025.png ",
        "assets/image/player/idle/Anim_IDLE_00027.png ",
        "assets/image/player/idle/Anim_IDLE_00029.png"
    ]
    var idlePlayer = new AnimatedSprite(idle.map(stringy => Texture.from(stringy)));
    idlePlayer.play();
    idlePlayer.name ="idlePlayer";
}

//idlewithgun
{
    const ildewithgun = [
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00001.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00003.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00005.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00007.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00009.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00011.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00013.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00015.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00017.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00019.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00021.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00023.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00025.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00027.png ",
        "assets/image/player/idlewithgun/Anim_IDLE_WITHGUN_00029.png"
        ];
        var ildewithgunPlayer = new AnimatedSprite(ildewithgun.map(stringy => Texture.from(stringy)));
        ildewithgunPlayer.play();
        ildewithgunPlayer.name = "ildewithgunPlayer";
}

//jump
{
    const jump = [
        "assets/image/player/jump/Anim_JUMP_01.png ",
        "assets/image/player/jump/Anim_JUMP_02.png ",
        "assets/image/player/jump/Anim_JUMP_03.png ",
        "assets/image/player/jump/Anim_JUMP_04.png ",
        "assets/image/player/jump/Anim_JUMP_05.png ",
        "assets/image/player/jump/Anim_JUMP_06.png ",
        "assets/image/player/jump/Anim_JUMP_07.png ",
        "assets/image/player/jump/Anim_JUMP_08.png ",
        "assets/image/player/jump/Anim_JUMP_09.png ",
        "assets/image/player/jump/Anim_JUMP_10.png ",
        "assets/image/player/jump/Anim_JUMP_11.png ",
        "assets/image/player/jump/Anim_JUMP_12.png ",
        "assets/image/player/jump/Anim_JUMP_13.png ",
        "assets/image/player/jump/Anim_JUMP_14.png ",
        "assets/image/player/jump/Anim_JUMP_15.png ",
        "assets/image/player/jump/Anim_JUMP_16.png ",
        "assets/image/player/jump/Anim_JUMP_17.png ",
        "assets/image/player/jump/Anim_JUMP_18.png ",
        "assets/image/player/jump/Anim_JUMP_19.png"
        ];
        var jumpPlayer = new AnimatedSprite(jump.map(stringy => Texture.from(stringy)));
        jumpPlayer.play();
        jumpPlayer.name = "jumpPlayer";
}

//jumpwithgun
{
    const jumpwithgun = [
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_01.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_02.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_03.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_04.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_05.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_06.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_07.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_08.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_09.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_10.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_11.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_12.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_13.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_14.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_15.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_16.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_17.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_18.png ",
        "assets/image/player/jumpwithgun/Anim_JUMPwithGUN_19.png"
        ];
        var jumpwithgunPlayer = new AnimatedSprite(jumpwithgun.map(stringy => Texture.from(stringy)));
        jumpwithgunPlayer.play();
        jumpwithgunPlayer.name = "jumpwithgunPlayer";
}

//push
{
    const push = [
        "assets/image/player/push/Anim_PUSH_00001.png ",
        "assets/image/player/push/Anim_PUSH_00003.png ",
        "assets/image/player/push/Anim_PUSH_00005.png ",
        "assets/image/player/push/Anim_PUSH_00007.png ",
        "assets/image/player/push/Anim_PUSH_00009.png ",
        "assets/image/player/push/Anim_PUSH_00011.png ",
        "assets/image/player/push/Anim_PUSH_00013.png ",
        "assets/image/player/push/Anim_PUSH_00015.png ",
        "assets/image/player/push/Anim_PUSH_00017.png ",
        "assets/image/player/push/Anim_PUSH_00019.png ",
        "assets/image/player/push/Anim_PUSH_00021.png ",
        "assets/image/player/push/Anim_PUSH_00023.png ",
        "assets/image/player/push/Anim_PUSH_00025.png ",
        "assets/image/player/push/Anim_PUSH_00027.png ",
        "assets/image/player/push/Anim_PUSH_00029.png"
        ];
        var pushPlayer = new AnimatedSprite(push.map(stringy => Texture.from(stringy)));
        pushPlayer.play();
        pushPlayer.name = "pushPlayer";
}

//run
{
    const runnogun = [
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_01.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_02.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_03.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_04.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_05.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_06.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_07.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_08.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_09.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_10.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_11.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_12.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_13.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_14.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_15.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_16.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_17.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_18.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_19.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_20.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_21.png ",
        "assets/image/player/runnogun/ELLEN_RUN_NoGun_22.png"
        ];
        var runnogunPlayer = new AnimatedSprite(runnogun.map(stringy => Texture.from(stringy)));
        runnogunPlayer.play();     
        runnogunPlayer.name = "runnogunPlayer";
}

//rungunou
{
    const rungunout = [
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00000.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00001.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00002.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00003.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00004.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00005.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00006.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00007.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00008.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00009.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00010.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00011.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00012.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00013.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00014.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00015.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00016.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00017.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00018.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00019.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00020.png ",
        "assets/image/player/rungunout/Ellen_RUN_GunOut_1s_00021.png"
        ];
        var rungunoutPlayer = new AnimatedSprite(rungunout.map(stringy => Texture.from(stringy)));
        rungunoutPlayer.play();
        rungunoutPlayer.name = "rungunoutPlayer";
}

//rungunout02
{
    const runwithgun = [
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00001.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00003.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00005.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00007.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00009.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00011.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00013.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00015.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00017.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00019.png ",
        "assets/image/player/runwithgun/Anim_RUN_WithGun_00021.png"
        ];
        var runwithgunPlayer = new AnimatedSprite(runwithgun.map(stringy => Texture.from(stringy)));
        runwithgunPlayer.play(); 
        runwithgunPlayer.name = "runwithgunPlayer";
}

//staffattack
{
    const staffattack = [
        "assets/image/player/staffattack/Anim_StaffAttack_Type1_00003.png ",
        "assets/image/player/staffattack/Anim_StaffAttack_Type1_00005.png ",
        "assets/image/player/staffattack/Anim_StaffAttack_Type1_00007.png ",
        "assets/image/player/staffattack/Anim_StaffAttack_Type1_00009.png ",
        "assets/image/player/staffattack/Anim_StaffAttack_Type1_00011.png"
        ];
        var staffattackPlayer = new AnimatedSprite(staffattack.map(stringy => Texture.from(stringy)));
        staffattackPlayer.play();
        staffattackPlayer.name = "staffattackPlayer";
}

//walk
{
    const walk = [
        "assets/image/player/walk/Ellen_WALK_001.png ",
        "assets/image/player/walk/Ellen_WALK_003.png ",
        "assets/image/player/walk/Ellen_WALK_005.png ",
        "assets/image/player/walk/Ellen_WALK_007.png ",
        "assets/image/player/walk/Ellen_WALK_009.png ",
        "assets/image/player/walk/Ellen_WALK_011.png ",
        "assets/image/player/walk/Ellen_WALK_013.png ",
        "assets/image/player/walk/Ellen_WALK_015.png ",
        "assets/image/player/walk/Ellen_WALK_017.png ",
        "assets/image/player/walk/Ellen_WALK_019.png ",
        "assets/image/player/walk/Ellen_WALK_021.png ",
        "assets/image/player/walk/Ellen_WALK_023.png ",
        "assets/image/player/walk/Ellen_WALK_025.png ",
        "assets/image/player/walk/Ellen_WALK_027.png ",
        "assets/image/player/walk/Ellen_WALK_029.png"
        ];
        var walkPlayer = new AnimatedSprite(walk.map(stringy => Texture.from(stringy)));
        walkPlayer.play();
        walkPlayer.name = "walkPlayer";
}

//walkgun
{
    const walkgun = [
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_001.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_003.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_005.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_007.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_009.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_011.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_013.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_015.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_017.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_019.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_021.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_023.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_025.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_027.png ",
        "assets/image/player/walkgunout/Ellen_WALK_GUNOUT_029.png"
        ];
        var walkgunPlayer = new AnimatedSprite(walkgun.map(stringy => Texture.from(stringy)));
        walkgunPlayer.play();
        walkgunPlayer.name = "walkgunPlayer";
}

}
export class Background extends Container{

}
export class Plaftform extends Container{

}
const defaultAnimationSpeed = 0.2;
const defaultPlayerSpeed = 4;
const defaultJumpForce = 30;
export class Player extends Container{
    constructor(){
        super();
        this.player = idlePlayer;
        this.playerSpeed = defaultPlayerSpeed;
        this.jumped = false;
        this.jumpForce = defaultJumpForce;
        this.init();
        Ticker.shared.add(this.update.bind(this));
        
    }
    update(){        
        this.limitBound();
    }
    limitBound(){
        if(this.player.x < this.player.width) {
           this.player.x = this.player.width;
        }
        if(this.player.x > innerWidth - this.player.width) {
           this.player.x = innerWidth - this.player.width;
        } 
        this.player.y++;
        if(this.player.y > innerHeight) {
            this.player.y = innerHeight;
        }  
        if(this.player.y < this.player.height) {
            this.player.y = this.player.height;
        }
    }
    init(){    
        this.addChild(this.player);
        this.player.animationSpeed = defaultAnimationSpeed;
        this.player.scale.set(0.2, 0.2) 
        this.player.anchor.set(0, 1);
        this.player.x = 0;
        this.player.y = 600;
        window.addEventListener("keydown", this.playerController.bind(this));
        window.addEventListener("keyup", this.playerController.bind(this));
        this.keys = {};
    }    
    playerController(e){
        if(e.type == "keydown"){
            this.keys[e.keyCode] = true;
        }
        if(e.type == "keyup"){
            this.keys[e.keyCode] = false;
            if(this.keys[88] == false) {
                this.jumped = false;
                this.setPlayer(idlePlayer);
                this.jumpForce = defaultJumpForce;
            }
            if([37, 39, 90].includes(e.keyCode)) {
               this.setPlayer(idlePlayer);
               if([90].includes(e.keyCode)) {
                this.playerSpeed = defaultPlayerSpeed;
               }
            }
        }
        if(this.keys[37]){
            this.setPlayer(walkPlayer);
            this.player.scale._x = -Math.abs(this.player.scale._x);
            this.player.x -=this.playerSpeed;
        }
        if(this.keys[39]){
            this.setPlayer(walkPlayer);
            this.player.scale._x = Math.abs(this.player.scale._x);
            this.player.x +=this.playerSpeed;         
        }
        if(this.keys[90]&&(this.keys[37]||this.keys[39])){
            this.setPlayer(runnogunPlayer);
            this.playerSpeed = defaultPlayerSpeed*2;          
        }
        if(this.keys[67]){
            this.setPlayer(staffattackPlayer);
            this.player.animationSpeed = defaultAnimationSpeed/2
        }
        if(this.keys[88]){
            if(this.jumped == false){
                this.setPlayer(jumpPlayer);
                if(this.jumpForce > 0){
                    this.jumpForce--;
                    this.player.y -= 4; 
                }
                if(this.jumpForce == 0){
                    this.jumped = true;
                    this.setPlayer(idlePlayer)
                    this.jumpForce = defaultJumpForce;
                }
                console.log(this.jumpForce);
            } 
        }
        

    }
    setPlayer(player){
        player.anchor = this.player.anchor;
        player.x = this.player.x;
        player.y = this.player.y;
        player.scale._x = this.player.scale._x;
        player.scale._y = this.player.scale._y;
        //player.animationSpeed = this.player.animationSpeed;
        player.animationSpeed = defaultAnimationSpeed;
        this.removeChild(this.player)
        this.player = player;
        this.addChild(this.player); 
    }
    setPlayerSpeed(){
        this.player.animationSpeed = this.playerSpeed;
    }
}
export class Enemy extends Container{

}
export class Award extends Container{

}
export class Game {
    static init() {
        const app = new Application({
            width: innerWidth,
            height: innerHeight,
            backgroundColor: 0x1099bb,
        });
        document.body.appendChild(app.view);
        this.player = new Player();
        app.stage.addChild(this.player);
        app.ticker.add(this.update.bind(this));
        
    }
    static update(){
    }
}

window.onload = function () {
    Game.init();
}
