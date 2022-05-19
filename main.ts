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
    pause(710)
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
    pause(1000)
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
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    777777777777777777777eeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eee77777777777777777777777777
    777777777777777777777eeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeee7ddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777eeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeee7ddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddd77eeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeedddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7eeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeedddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddd7eeeeeeee777777777777777777777777
    77777777777777777777eeeeeeeeeeeeeeddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddd7eeeeeeeee7777777777777eeee7777777
    77777777777777777777eeeeeeeeeeeeedddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddeeeeeeeeee7777777777777eeee7777777
    77eee777777777777777eeeeeeefeeeeddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7eeeeeeeeee7777777777777eeee7777777
    77eee777777777777777eeeeeeefeeeedddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777dddd7eeeeeefeeee77777777777777eeee777777
    77eee777777777777777eeeeeeefeeeeddde77777777777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddeeeefeeee77777777777777eeee777777
    77777777777777777777eeeeeeefeeedddde77777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddeeefeeee777777777777777eee777777
    77777777777777777777eeeeeeefeeedddde77777777777777777777777777777777777777777777777777777777777777777777777777777777777dddddddddeeefeeee777777777777777777777777
    77777777777777777777eeeeeeefeeedddee77777777777777777777777777777777777777777eeee77777777777777777777777777777777777777dddddddddeeefeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeddddeddddd777777777777777777777777777777777777eeee77777777777777777777777777777777777777dddddddddeefeeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeddddddddddd77777777777777777777777777777777777eeee7777777777777777777777777777777777777ddddddddeeeefeeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeddddddddddd77777777777777777777777777777777777eeee7777777777777777777777777777777777777ddddeeeeeeeffeeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeedddddddddd77777777777777777777777777777777777eeee7777777777777777777777777777777777777ddddeeeeeeefeeeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeeeddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777dddeeeeeeeefeeeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeeeeddddd777777777777777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeefeeeeeee777777777777777777777777
    77777777777777777777eeeeeeefeeeeeeddde7777777777777777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeefeeeeeee777777777777777777777777
    77777777777777777777eeeeeeeffeeeedddde7777777777777777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeefeeeeeee777777777777777777777777
    77777777777777777777eeeeeeeefeeeedddde777777777777777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeeefeeeeeee777777777777777777777777
    77777777777777777777eeeeeeeefeeeedddee777777777777777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeeefeeeeeee777777777777777777777777
    77777777777777777777eeeeeeeeefeeedddee777777777777777777777777777777777777777777777777777777777777777777777777777777ddd7eeeeeeefeeeeeeee777777777777777777777777
    77777777777777777777eeeeeeeeefeeedddeee7777777777777777777777777777777777777777777777777777777777777777777777777777dddd7eeeeeeefeeeeeee7777777777777777777777777
    77777777777777777777eeeeeeeeeffeeddddee7777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddeefeeeeeee7777777777777777777777777
    77777777777777777777eeeeeeeeeefeeddddeee777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddeefeeeeeee7777777777777777777777777
    77777777777777777777eeeeeeeeeefeeedddeee777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddeefeeeeeee7777777777777777777777777
    77777777777777777777eeeeeeeeeeffeeddddee777777777777777777777777777777777777777777777777777777777777777777777777777ddddddddddeefeeeeeeee777777777777eee777777777
    77777777777777777777eeeeeeeeeeefeedddddedddddd777777777777777777777777777777777777777777777777777777777777777777777dddddddddeeefeeeeeeee777777777777eee777777777
    7777777eee7777777777eeeeeeeeeeeffeeddddeddddddd777777777777777777777777777777777777777777777777777777777777777777777ddddddeeeeefeeeeeeee77777777777eeee777777777
    7777777eee7777777777eeeeeeeeeeeefeeeddddddddddd77777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeeefeeeeeeee77777777777eeee777777777
    7777777eee7777777777eeeeeeeeeeeeffeeddddddddddd77777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeeefeeeeeeee77777777777eeee777777777
    77777777777777777777eeeeeeeeeeeeefeeeddddddddd777777777777777777777777777777777777777777777777777777777777777777777dddeeeeeeeeefeeeeeeee77777777777eeee777777777
    77777777777777777777eeeeeeeeeeeeefeeeeddddddd777777777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeeeefeeeeeeee777777777777eee777777777
    77777777777777777777eeeeeeeeeeeeefeeeeeddddd7777777777777777777777777777777777777777777777777777777eeee77777777777ddddeeeeeeeeefeeeeeeee777777777777eee777777777
    77777777777777777777eeeeeeeeeeeeefeeeeeddd77777777777777777777777777777777777777777777777777777777eeeee77777777777ddddeeeeeeeeefeeeeeeeee77777777777eee777777777
    77777777777777777777eeeeeeeeeeeeefeeeeeddd77777777777777777777777777777777777777777777777777777777eeeee77777777777dddeeeeeeeeeefeeeeeeeee77777777777777777777777
    77777777777777777777eeeeeeeeeeeeefeeeeeddd77777777777777777777777777777777777777777777777777777777eeee777777777777dddeeeeeeeeeefeeeeeeeee77777777777777777777777
    77777777777777777777eeeeeeeeeeeeefeeeeeddd77777777777777777777777777777777777777777777777777777777eee7777777777777dddddddeeeeeefeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeeefeeeeeddd777777777777777777777777777777777777777777777777777777777777777777777777ddddddddeeeeefeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeeffeeeeeddd77777777777777777777777777777777777777777777777777777777777777777777777dddddddddeeeeefeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeddd77777777777777777777777777777777777777777777777777777777777777777777777dddddddddeeeeefeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeddd7777777777777777777777777777777777777777777777777777777777777777777777ddddddddddeeeeefeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeddd777777777777777777777777777777777777777777777777777777777777777777777dddddddddddeeeefeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeddde77777777777777777777777777777777777777777777777777777777777777777777dddddddddeeeeeefeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeedddee77777777777777777777777eee7777777777777777777777777777777777777777dddd777eeeeeeeeefeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeedddddddddd777777777777777777eeeee7777777777777777777777777777777777777ddddd777eeeeeeeeefeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeddddddddddd77777777777777777eeeeeeeee777777777777777777777777777777777dddd7777eeeeeeeefeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeedddddddddd77777777777777777eeeeeeeee777777777777777777777777777777777dddd7777eeeeeeeefeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeeddddddddd77777777777777777777eeeeee777777777777777777777777777777777ddd77777eeeeeeeefeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeeddddddddd77777777777777777777777777777777777777777777777777777777777ddd7777ddddeeeeefeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeeddddddddd77777777777777777777777777777777777777777777777777777777777ddd7777ddddeeeeefeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeedddee777777777777777777777777777777777777777777777777777777777777777ddd777ddddddeeeefeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeedddeee77777777777777777777777777777777777777777777777777777777777777dddd77dddddddeefeeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeedddeee77777777777777777777777777777777777777777777777777777777777777ddddd7dddddddeefeeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeedddeeddd777777777777777777777777777777777777777777777777777777777777ddddd7dddddddefeeeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeefeeeeeeeedddddddd7777777777777777777777777777777777777777777777777777777777777ddddddddddddefeeeeeeeeeeeee77777777777777777777777
    7777777777777777777eeeeeeeeeeeeeefeeeeeeeddddddddd7777777777777777777777777777777777777777777777777777777777777ddddddddddeefeeeeeeeeeeeee77777777777777777777777
    7eee777777777777777eeeeeeeeeeeeeefeeeeeeedddddddddd777777777777777777777777777777777777777777777777777777777777dddddddddeeefeeeeeeeeeeeee77777777777777777777777
    7eee777777777777777eeeeeeeeeeeeeefeeeeeeddddddedddd777777777777777777777777777777777777777777777777777777777777dddddeeeeeeefeeeeeeeeeeeee77777777777777777777777
    7eee777777777777777eeeeeeeeeeeeeefeeeeeedddddeedddd777777777777777777777777777777777777777777777777777777777777dddd7eeeeeeefeeeeeeeeeeeee7777777777777eee7777777
    7777777777777777777eeeeeeeeeeeeeefeeeeedddddedddddd777777777777777777777777777777777777777777777777777777777777dddd7eeeeeeefeeeeeeeeeeeee7777777777777eee7777777
    7777777777777777777eeeeeeeeeeeeeeefeeeeddddddddddd77777777777777777777777777777777777777777777777777777777777777ddd7eeeeeeefeeeeeeeeeeeee777777777777eeee7777777
    77777777777777777777eeeeeeeeeeeeeefeeeedddddddddd777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeefeeeeeeeeeeeee777777777777eeee7777777
    77777777777777777777eeeeeeeeeeeeeefeeeeddddddddde777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeefeeeeeeeeeeeee777777777777eee77777777
    77777777777777777777eeeeeeeeeeeeeefeeeedddddddeee777777777777777777777777777777777777777777777777777777777777777ddddeeeeeeefeeeeeeeeeeee7777777777777eee77777777
    777777777777777777777eeeeeeeeeeeeeefeeeeeddddeeee7777777777777777777777777777777777777777777777777777777777777777dddeeeeeeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeefeeeeedddddeee7777777777777777777777777777777777777777777777777777777777777777ddddddeeeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeefeeeeeeddddeee7777777777777777777777777777777777777777777777777777777777777777ddddddddeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeefeeeeeddddeee7dddd7777777777777777777777777777777777777777777777777777777777dddddddddeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeefeeeeeeddddeedddddddd77777777777777777777777eee7777777777777777777777777777ddddddddddeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeefeeeeeeddddeddddddddd77777777777777777777777eeee77777777777777777777777777dddddddddddeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeefeeeeeedddddddddddddd77777777777777777777777eeeee7777777777777777777777777ddddddddddeeefeeeeeeeeeeee777777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeefeeeeeeeddddddd7ddddd777777777777777777777777eeeee777777777777777777777777ddddddddeeeeeefeeeeeeeeeeee77777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeefeeeeeeedddddddddddd77777777777777777777777777eeeee77777777777777777777777ddd777eeeeeeeefeeeeeeeeeeee77777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeefeeeeeeedddddddddd777777777777777777777777777eeeee77777777777777777777777dddd77eeeeeeeefeeeeeeeeeeee77777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeefeeeeeeeeddddddddd77777777777777777777777777777eee77777777777777777777777dddd77eeeeeeeefeeeeeeeeeeee77777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeefeeeeeeeeeeddd77777777777777777777777777777777777777777777777777777777777dddd77eeeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeefeeeeeeeeeddd777777777777777777777777777777777777777777777777777777777777ddd77eeeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeefeeeeeeeeddd777777777777777777777777777777777777777777777777777777777777ddd7eeeeeeeefeeeeeeeeeeeeee777777777777eee7777777
    777777777777777777777eeeeeeeeeeeeeeeeeefeeeeeeeedddd77777777777777777777777777777777777777777777777777777777777ddd7eeeeeeeefeeeeeeeeeeeeee777777777777eee7777777
    777777777777777777777eeeeeeeeeeeeeeeeeeffeeeeeeedddd77777777777777777777777777777777777777777777777777777777777ddd7eeeeeeeefeeeeeeeeeeeeee777777777777eee7777777
    777777777777777777777eeeeeeeeeeeeeeeeeeefeeeeeeedddd77777777777777777777777777777777777777777777777777777777777ddd7eeeeeeeefeeeeeeeeeeeeee777777777777eee7777777
    777777777777777777777eeeeeeeeeeeeeeeeeeefeeeeeeeedddd7777777777777777777777777777777777777777777777777777777777ddddeeeeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeefeeeeeeeedddd7777777777777777777777777777777777777777777777777777777777ddddeeeeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeefeeeeeeeeeddd77ddddddd7777777777777777777777777777777777777777777777777dddddddeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeefeeeeeeeeeddd7ddddddddd7777777777777777777777777777777777777777777777777ddddddeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeefeeeeeeeeeddddddddddddd777777777777777777777777777777777777777777777777ddddddddeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeefeeeeeeeeddddddd77dddd77777777777777777777777777777777777777777777777dddddddddeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeefeeeeeeeeddddddd77dddd7777777777777777777777777777777777777777777777ddddddddddeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeefeeeeeeeedddddd77dddd77777777777777777777777777777777777777777777777ddddddddddeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777eee777eeeeeeeeeeeeeeeeeeeefeeeeeeeeeddddddddddd7777777777777777777777777777777777777777777777ddddddddddeeeffeeeeeeeeeeeeeee7777777777777777777777
    777777777777777eee777eeeeeeeeeeeeeeeeeeeefeeeeeeeeddddddddddd77777777777777777777777777777777777777777777777dddd7dddddeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777eee777eeeeeeeeeeeeeeeeeeeefeeeeeeeedddddddddd777777777777777777777777777777777777777777777777dddd777eeeeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeefeeeeeeeddddddddd7777777777777777777777777777777777777777777777777ddd7777eeeeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeefeeeeeeedddee77777777777777777777777777777777777777777777777777777ddd7777eeeeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeefeeeeeeedddee77777777777777777777777777777777777777777777777777777ddd7777eeeeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeefeeeeeeedddee77777777777777777777777777777777777777777777777777777ddd7777eeeeefeeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeefeeeeeeedddee77777777777777777777777777777777777777777777777777777ddd777eeeeeefeeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddee77777777777777777777777777777777777777777777777777777ddd777eeeeeefeeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddee77777777777777777777777777777777777777777777777777777ddd777eeeeeefeeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddee77777777777777777777777777777777777777777777777777777ddd7ddddeeeefeeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddee77777777777777777777777777777777777777777777777777777ddd7dddddeeefeeeeeeeeeeeeeeeee7777777777777777eee777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddddddd77777777777777777777777777777777777777777777777777dddddddddeeefeeeeeeeeeeeeeeeee7777777777777777eee777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeeddddddddd7777777777777777777777777777777777777777777777777ddddddddddeefeeeeeeeeeeeeeeeee7777777777777777eee777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddddddddd77777777777777eee7777777777777777777777777777777ddddddddddeefeeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeedddddeddddd7777777777777eee777777777777777eee77777777777777dddddddddeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeeddddeeddddd7777777777777eee777777777777777eee77777777777777ddddddddeeeefeeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeeddddde77ddd7777777777777777777777777777777eee7777777777777dddd7eeeeeeeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeedddddde77ddd77777777777777777777777777777777777777777777777dddd7eeeeeeeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeedddddddd7ddd77777777777777777777777777777777777777777777777dddd7dddeeeeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeedddddddddddd77777777777777777777777777777777777777777777777ddddddddeeeeeefeeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeedddedddddddd77777777777777777777777777777777777777777777777ddddddddeeeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeedddeeeddddd7777777777777777777777777777777777777777777777777dddddddeeeeeeefeeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeddddeee777777777777777777777777777777777777777777777777777777777eeeeeeeeeeefeeeeeeeeeeeee7777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeefeeeeeddddee7777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeefeeeeeeeeeee77777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeedddee77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeefeeeeeeeeeee77777777777777777777777
    777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeedddee77777777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeee77777777777777777777777
    `)
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
let Enemies = sprites.create(img`
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
mySprite.setStayInScreen(true)
