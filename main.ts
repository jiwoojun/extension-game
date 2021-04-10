enum RadioMessage {
    message1 = 49434
}
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . f d f d f d f . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . . . f 8 f . . . . . . . 
    . . . . . . f a f . . . . . . . 
    . . . f f . f 8 f . f f . . . . 
    . . f a f f f a f f f a f . . . 
    . . f 8 8 8 8 8 8 8 8 8 f . . . 
    . . f f f f f a f f f f f . . . 
    . . . . . . f 8 f . . . . . . . 
    . . . . . . f a f . . . . . . . 
    . . . . f f f 8 f f f . . . . . 
    . . . f 2 5 2 5 2 5 2 f . . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
