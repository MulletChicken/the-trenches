namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        .......fff.fff...........
        .....ffff...fff..........
        .....fff.....ff..........
        .....f.......fff.........
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(500)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f b b f . . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . . f b b f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
    pause(2000)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        ........ff.ff............
        ........ff.ff............
        ........ffffff...........
        .........................
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        .......fff.fff...........
        .....ffff...fff..........
        .....fff.....ff..........
        .....f.......fff.........
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        ........ff.ff............
        ........ff.ff............
        ........ffffff...........
        .........................
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        ........ff.ff............
        ........ff.ff............
        ........ffffff...........
        .........................
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        .......fff.fff...........
        .....ffff...fff..........
        .....fff.....ff..........
        .....f.......fff.........
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        ........ff.ff............
        ........ff.ff............
        ........ffffff...........
        .........................
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ........88888............
        ........888888...........
        ........8888d............
        ........88bdd............
        ........ddbbb............
        ....eeeeeebeeeeeeeb......
        ....eee86666f88fd........
        ......888888d88fd........
        .......88888d............
        ......efeefff............
        ......e8ee888............
        .......888888............
        .......8888f8............
        .......f888f8............
        .......f888f8............
        .......ffffff............
        .......ffffff............
        ........ff.ff............
        .......fff.fff...........
        .....ffff...fff..........
        .....fff.....ff..........
        .....f.......fff.........
        .........................
        .........................
        .........................
        `],
    50,
    true
    )
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    Enemies = sprites.create(img`
        .........................
        ..........22222..........
        .........ffffff..........
        ..........d2222..........
        ..........ddb22..........
        ..........bbbdd..........
        ....beeeeeeebeeeeee......
        ......df22fffff2eee......
        ......df22d222222........
        ..........d22222.........
        ..........fffeefe........
        ..........222ee2e........
        ..........222222.........
        ..........2f2222.........
        ..........2f222f.........
        ..........ffffff.........
        ..........ffffff.........
        ..........ff.ff..........
        ..........ff.ff..........
        ..........ff.ff..........
        ..........ff.ff..........
        .........ffffff..........
        .........................
        .........................
        .........................
        `, SpriteKind.Enemy)
    Enemies.setPosition(127, randint(0, scene.screenHeight()))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Enemies.setFlag(SpriteFlag.Invisible, true)
    pause(1000)
    Enemies.setFlag(SpriteFlag.Invisible, false)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Enemies: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
tiles.setCurrentTilemap(tilemap`level3`)
mySprite = sprites.create(img`
    .........................
    .........................
    ..........88888..........
    ..........888888.........
    ..........8888d..........
    ..........88bdd..........
    ..........ddbbb..........
    ......eeeeeebeeeeeeeb....
    ......eee86666f88fd......
    ........888888d88fd......
    .........88888d..........
    ........efeefff..........
    ........e8ee888..........
    .........888888..........
    .........8888f8..........
    .........f888f8..........
    .........ffffff..........
    .........ffffff..........
    ..........ff.ff..........
    ..........ff.ff..........
    ..........ff.ff..........
    ..........ff.ff..........
    ..........ffffff.........
    .........................
    .........................
    `, SpriteKind.Player)
Enemies = sprites.create(img`
    .........................
    ..........22222..........
    .........ffffff..........
    ..........d2222..........
    ..........ddb22..........
    ..........bbbdd..........
    ....beeeeeeebeeeeee......
    ......df22fffff2eee......
    ......df22d222222........
    ..........d22222.........
    ..........fffeefe........
    ..........222ee2e........
    ..........222222.........
    ..........2f2222.........
    ..........2f222f.........
    ..........ffffff.........
    ..........ffffff.........
    ..........ff.ff..........
    ..........ff.ff..........
    ..........ff.ff..........
    ..........ff.ff..........
    .........ffffff..........
    .........................
    .........................
    .........................
    `, SpriteKind.Enemy)
Enemies.setPosition(127, 55)
controller.moveSprite(mySprite, 100, 100)
mySprite.setPosition(18, 36)
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f b b f . . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . . f b b f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Enemies, -200, 0)
    projectile2.x = projectile2.x - 10
})
game.onUpdateInterval(1000, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . f b b f . . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . f b b b b f . . . . . . 
        . . . . . f b b f . . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
    projectile2.x = projectile2.x - 10
})
