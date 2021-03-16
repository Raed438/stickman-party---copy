let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
controller.player4.onEvent(ControllerEvent.Connected, function () {
    mySprite4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f f 1 7 7 7 f f . . . . 
        . . . f f f 1 7 1 1 f f f . . . 
        . . f f f 7 1 7 7 1 7 f f f . . 
        . . f 7 7 7 1 1 1 1 7 7 7 f . . 
        . . f 7 7 f f f f f f 7 7 f . . 
        . . f f f f e e e e f f f f . . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f e 4 d d d d d d 4 4 f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
        . . 7 7 f 7 7 7 7 7 7 f 7 7 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    mySprite3 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 1 5 5 1 f f . . . . 
        . . . f f f 1 1 1 1 f f f . . . 
        . . f f f 5 5 1 1 5 5 f f f . . 
        . . f 5 5 5 5 1 1 5 5 5 5 f . . 
        . . f 5 5 f f f f f f 5 5 f . . 
        . . f f f f e e e e f f f f . . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f 4 4 d d d d d d 4 4 f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . 5 5 f 5 5 5 5 5 5 f 5 5 . . 
        . . 5 5 f 5 5 5 5 5 5 f 5 5 . . 
        . . 4 4 f 4 4 2 2 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    mySprite2.destroy(effects.bubbles, 500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f f 1 8 8 1 f f . . . . 
        . . . f f f 1 1 1 8 f f f . . . 
        . . f f f 8 1 8 8 1 8 f f f . . 
        . . f f 8 8 1 1 1 1 8 8 8 f . . 
        . . f 8 8 f f f f f f 8 8 f . . 
        . . f f f f e e e e f f f f . . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . f 4 4 d d d d d d 4 4 f . . 
        . . . f 4 4 4 4 4 4 4 4 f . . . 
        . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
        . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
})
