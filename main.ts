namespace SpriteKind {
    export const Start = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const LAVAMAKER = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f 2 2 f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile0`)) {
        mySprite.vy = -60
        timer.after(750, function () {
            mySprite.vy = 60
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    mySprite4.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
function level1 () {
    mySprite.destroy()
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 f 2 2 f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 f f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(mySprite)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    controller.moveSprite(mySprite, 100, 0)
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    info.setLife(3)
    mySprite2.destroy()
}
function Final_Level () {
    tiles.setTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(mySprite5, sprites.castle.rock0)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 5 5 5 5 5 4 . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile7`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    game.showLongText("FINNAL LEVEL", DialogLayout.Bottom)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    OOF()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    level2()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f 2 2 f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    game.over(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f 2 2 f 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f f f 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    mySprite.vy = -90
})
function level3 () {
    mySprite3.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite4.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setTilemap(tilemap`level4`)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 5 5 5 5 5 4 . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile7`)
    game.showLongText("Level 3", DialogLayout.Bottom)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    mySprite3.destroy(effects.halo, 500)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    OOF()
})
function level2 () {
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 3 . . 2 3 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . . 3 2 2 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Heart)
    game.showLongText("Level 2", DialogLayout.Bottom)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 5 5 5 5 5 4 . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile6`)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile7`)
}
scene.onOverlapTile(SpriteKind.Start, assets.tile`myTile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff2222222222222ff222fffffffff222ffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff2222ff222fffffffff222ffffff222fffffffff222ffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff22222222222222fffff22222222222fffffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222ff22222222fffffffffffffffffffffffffffffff
            ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
            ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
            ffffffffffffffff22222222222222ffffffffffffffffffffffffffffffffffffffff222222222222fffffff222fffff222ffffffff222fffff2222222fff222fffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffff222fffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddddbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddddddbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddddbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        timer.after(500, function () {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222ff222fffffffff222ffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff2222ff222fffffffff222ffffff222fffffffff222ffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff22222222222222fffff22222222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222ff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffffffffffffffffffffffffffffffffffffffff222222222222fffffff222fffff222ffffffff222fffff2222222fff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffff222fffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddddbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddddddbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddddbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        })
        timer.after(1000, function () {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222ff222fffffffff222ffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff2222ff222fffffffff222ffffff222fffffffff222ffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff22222222222222fffff22222222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222ff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffffffffffffffffffffffffffffffffffffffff222222222222fffffff222fffff222ffffffff222fffff2222222fff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffff222fffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddddbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbddddddddddbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddddbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.........................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        })
        timer.after(1500, function () {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222ff222fffffffff222ffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff2222ff222fffffffff222ffffff222fffffffff222ffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff22222222222222fffff22222222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222ff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffffffffffffffffffffffffffffffffffffffff222222222222fffffff222fffff222ffffffff222fffff2222222fff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffff222fffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbdddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbdddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        })
        timer.after(2000, function () {
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffff222222222ffffffffffff222222222fffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222fffff222222222fffffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff2222222222222ff222fffffffff222ffffff222fffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff2222ff222fffffffff222ffffff222fffffffff222ffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222222222222ffffffffff22222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff22222222222222fffff22222222222fffffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222222222222222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff222fffffffffffffff222ffffff222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222fffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222fffffffff222ffff222fffff222ffffffff222fffff222ff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffff222222222222fff222fffffffff222ffffff222222222222fffffff222fffff222ffffffff222fffff2222222222222fffffffffffffffffffffffffffffff
                ffffffffffffffff22222222222222ffffffffffffffffffffffffffffffffffffffff222222222222fffffff222fffff222ffffffff222fffff2222222fff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222ffffffff222fffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222fffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222ffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddddddddddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddddbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddddbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddddddddbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbfffffffffffffffffffffbddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffffbdddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbfffffffffffffffffbdddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbfffffffffffffffbddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbfffffffffffffbddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbfffffffffbbdddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbddddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbdddddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbddddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbdddddddddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbddddddddddddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbddddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbddddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbddddddbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                `)
        })
        timer.after(2100, function () {
            level1()
        })
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 f 2 2 f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 f f f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    OOF()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    OOF()
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f 2 2 f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    level_4()
})
function level_4 () {
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    mySprite4.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 4 4 5 5 5 4 . . . 
        . . . 4 5 5 5 5 5 5 5 5 4 . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile7`)
    game.showLongText("Level 4", DialogLayout.Bottom)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f 2 2 f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `)
})
function OOF () {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    info.changeLifeBy(-1)
    music.zapped.playUntilDone()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    level3()
})
function level_5 () {
    mySprite4.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    tiles.setTilemap(tilemap`level6`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
    mySprite5 = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f 2 2 2 2 2 2 2 2 2 2 f 2 2 
        2 2 f 2 2 2 2 2 2 2 2 2 2 f 2 2 
        2 2 f 2 2 2 2 2 2 2 2 2 2 f 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.LAVAMAKER)
    tiles.placeOnRandomTile(mySprite5, sprites.castle.rock0)
    game.showLongText("Level 5", DialogLayout.Bottom)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    level_5()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    Final_Level()
})
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite5: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666688866668888888888888888888888866666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666688888866668888888888888888888888866688866666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666668888888866668888888888888888888888866688888666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666888888888866668888888888888888888888866688888886666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666688888888888866668888888888888888888888866688888888866666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666888888888888866668888888888888888888888866688888888886666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666688888888888888866668888888888888888888888866688888888888866666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666888888888888888866668888888888888888888888866688888888888886666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666668888888888888888866668888888888888888888888866688888888888888666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666888888888888888888866668888888888888888888888866688888888888888886666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666668888888888888888888866668888888888888888888888866688888888888888888666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666688888888888888888888866668888888888888888888888866688888888888888888866666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666888888888888888888888866668888888888888888888888866688888888888888888886666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666668888888888888888888888866668888888888888888888888866688888888888888888888666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666688888888888888888888888866668888888888888888888888866688888888888888888888866666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666688888888888888888888888866668888888888888888888888866688888888888888888888866666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666888888888888888888888888866668888888888888888888888866688888888888888888888886666666666666666666666666666666666666
    6666666666666666666666666666666666666666666668888888888888888888888888866668888888888888888888888866688888888888888888888888666666666666666666666666666666666666
    6666666666666666666666666666666666666666666688888888888888888888888888866668888888888888888888888866688888888888888888888888866666666666666666666666666666666666
    6666666666666666666666666666666666666666666688888888888888888888888888866668888888888888888888888866688888888888888888888888866666666666666666666666666666666666
    6666666666666666666666666666666666666666666888888888888888888888888888866668888888888888888888888866688888888888888888888888886666666666666666666666666666666666
    6666666666666666666666666666666666666666668888888888888888888888888888866668888888888888888888888866688888888888888888888888888666666666666666666666666666666666
    6666666666666666666666666666666666666666668888888888888888888888888888866668888888888888888888888866688888888888888888888888888666666666666666666666666666666666
    6666666666666666666666666666666666666666688888888888888888888888888888866668888888888888888888888866688888888888888888888888888866666666666666666666666666666666
    6666666666666666666666666666666666666666688888888888888888888888888888866668888888888888888888888866688888888888888888888888888866666666666666666666666666666666
    6666666666666666666666666666666666666666888888888888888888888888888888866668888888888888888888888866688888888888888888888888888886666666666666666666666666666666
    6666666666666666666666666666666666666666888888888888888888888888888888666668888888888888888888888866688888888888888888888888888886666666666666666666666666666666
    6666666666666666666666666666666666666668888888888888888888888888888886666668888888888888888888888866668888888888888888888888888888666666666666666666666666666666
    6666666666666666666666666666666666666668888888888888888888888888888866666668888888888888888888888866666888888888888888888888888888666666666666666666666666666666
    6666666666666666666666666666666666666668888888888888888888888888888666666668888888888888888888888866666688888888888888888888888888666666666666666666666666666666
    6666666666666666666666666666666666666688888888888888888888888888886666666668888888888888888888888866666668888888888888888888888888866666666666666666666666666666
    6666666666666666666666666666666666666688888888888888888888888888866666666668888888888888888888888866666666888888888888888888888888866666666666666666666666666666
    6666666666666666666666666666666666666688888888888888888888888888866666666668888888888888888888888866666666888888888888888888888888866666666666666666666666666666
    6666666666666666666666666666666666666888888888888888888888888888666666666668888888888888888888888866666666688888888888888888888888886666666666666666666666666666
    6666666666666666666666666666666666666888888888888888888888888886666666666668888888888888888888888866666666668888888888888888888888886666666666666666666666666666
    6666666666666666666666666666666666666888888888888888888888888886666666666668888888888888888888888866666666668888888888888888888888886666666666666666666666666666
    6666666666666666666666666666666666666888888888888888888888888866666666666668888888888888888888888866666666666888888888888888888888886666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888866666666666668888888888888888888888866666666666888888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888866666666666668888888888888888888888866666666666888888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666668888888888888888888888866666666666688888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666668888888888888866666666666666666666688888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666666666666666666666666666666666666666688888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666666666666666666666666666666666666666688888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666666666666666666666666666666666666666688888888888888888888888666666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666666666666666666666666666666666699999988888888888888888888888999666666666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666666666666666666666669999999999999999988888888888888888888888999999996666666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666666666666666999999999999999999999999999988888888888888888888888999999999999666666666666666
    6666666666666666666666666666666666668888888888888888888888888666666666699999999999999999999999999999999999999988888888888888888888888999999999999999996666666666
    6666666666666666666666666666666666668888888888888888888888888999999999999999999999999999999999999999999999999988888888888888888888888999999999999999999999966666
    6666666666666666666666666666666666668888888888888888888888888999999999999999999999999999999999999999999999999988888888888888888888888999999999999999999999999999
    6666666666666666666666666666666666668888888888888888888888888999999999999999999999999999999999999999999999999988888888888888888888888999999999999999999999999999
    6666666666666666666666666666666666668888888888888888888888888999999999999999999999999999999999999999999999999988888888888888888888888999999999999999999999999999
    6666666666666666666666666666666666998888888888888888888888888999999999999999999999999999999999999999999999999988888888888888888888888999999999999999999999999999
    6666666666666666666666666666669999998888888888888888888888888999999999999999999999999999999999999999999999999988888888888888888888888999999999999999999999999999
    6666666666666666666666666669999999998888888888888888888888888899999999999999999999999999999999999999999999999888888888888888888888888999999999999999999999999999
    6666666666666666666666699999999999998888888888888888888888888899999999999999999999999999999999999999999999999888888888888888888888888999999999999999999999999999
    6666666666666666666999999999999999999888888888888888888888888899999999999999999999999999999999999999999999999888888888888888888888889999999999999999999999999999
    6666666666666666999999999999999999999888888888888888888888888889999999999999999999999999999999999999999999998888888888888888888888889999999999999999999999999999
    6666666666669999999999999999999999999888888888888888888888888889999999999999999999999999999999999999999999998888888888888888888888889999999999999999999999999999
    6666666669999999999999999999999999999888888888888888888888888888999999999999999999999999999999999999999999988888888888888888888888889999999999999999999999999999
    6666699999999999999999999999999999999988888888888888888888888888899999999999999999999999999999999999999999888888888888888888888888899999999999999999999999999999
    9999999999999999999999999999999999999988888888888888888888888888899999999999999999999999999999999999999999888888888888888888888888899999999999999999999999999999
    9999999999999999999999999999999999999988888888888888888888888888889999999999999999999999999999999999999998888888888888888888888888899999999999999999999999999999
    9999999999999999999999999999999999999998888888888888888888888888888999999999999999999999999999999999999988888888888888888888888888999999999999999999999999999999
    9999999999999999999999999999999999999998888888888888888888888888888899999999999999999999999999999999999888888888888888888888888888999999999999999999999999999999
    9999999999999999999999999999999999999998888888888888888888888888888889999999999999999999999999999999998888888888888888888888888888999999999999999999999999999999
    9999999999999999999999999999999999999999888888888888888888888888888888999999999999999999999999999999988888888888888888888888888889999999999999999999999999999999
    9999999999999999999999999999999999999999888888888888888888888888888888889999999999999999999999999998888888888888888888888888888889999999999999999999999999999999
    9999999999999999999999999999999999999999988888888888888888888888888888888999999999999999999999999988888888888888888888888888888899999999999999999999999999999999
    9999999999999999999999999999999999999999988888888888888888888888888888888889999999999999999999998888888888888888888888888888888899999999999999999999999999999999
    9999999999999999999999999999999999999999998888888888888888888888888888888888889999999999999998888888888888888888888888888888888999999999999999999999999999999999
    9999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999
    9999999999999999999999999999999999999999999888888888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999
    9999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999
    9999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999
    9999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999888888888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999888888888888888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999888888888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888888888888888888888999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999888888888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999888888888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999988888888888888888888888888888888888888888888888888899999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999888888888888888888888888888888888888888888888889999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999998888888888888888888888888888888888888888888999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999988888888888888888888888888888888888888899999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999988888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999988888888888888888888888888899999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999998888888888888888888999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
game.showLongText("A Neon Gaming Production", DialogLayout.Bottom)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fff11111ff111ff111ff11111ffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77ffffff1fffffff1ffffffff1fff1fff1f1ff1fff1ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ff7ffff111ffffff1ffffffff1fff1fff1f111ffff1ffffffff
    fff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777fffff1f111ffff111fffff1fff11111f1ff1fff1ffffffff
    ff22222222222ffffffffffff222222222222222222222222ffff2222222ffffffffffffffffffffffffffffffffffffffffffffffff7ff7fffff1f1f1fffffff1ffff1fff1fff1f1fff1ff1ffffffff
    ff2222222222222ffffffffff222222222222222222222222ffff222222222ffffffffffffffffffffffffffffffffffffffffffffff7ff7fffff1f111fffffff1ffff1fff1fff1f1fff1ff1ffffffff
    ff2222222222222222fffffff222222222222222222222222ffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffff1fff1fff1f1fff1ff1ffffffff
    ff222222222222222222fffff222222222222222222222222ffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff2222222222222222222ffff222222222222222222222222ffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222ff222222222222ffff22222fffffffffffffffffffffff2222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222ffff2222222222ffff22222fffffffffffffffffffffff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222fff22222222222ffff22222fffffffffffffffffffffff22222ff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222f2222222222222ffff22222222222222ffffffffffffff22222fff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff222222222222222222fffff222222222222222222222fffffff22222fffff222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff2222222222222222fffffff222222222222222222222fffffff22222fffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222222222222fffffffff222222222222222222222ffffff222222ffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff222222222222fffffffffff222222222222222222222ffffff222222fffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff222222222222fffffffffff22222fffff22222222222ffffff222222fffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222222222222fffffffff22222ffffffffffffffffffffff222222ffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff2222222222222222fffffff22222ffffffffffffffffffffff22222fffffff2222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff222222222222222222ffff222222ffffffffffffffffffffff22222fffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222f2222222222222fff222222ffffffffffffffffffffff22222fff2222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222fff22222222222fff22222fffffffffffffffffffffff22222f22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222fffff222222222fff22222fffffffffffffffffffffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222fffffff2222222fff22222fffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222fffffffff22222fff22222ffffffffffffffffffffff222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff22222fffffffffffffffff22222222222222222222fffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff22222222222222222222fffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff22222222222222222222fffffff222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff22222222222222222222fffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222ffffffffffffffffffffffffffff2222222222fffffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222ffffffffffffffffffffffffffff2222222222ffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222fff22222fffffffff22222fff2222222222222ffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222fff22222ffffffff222222fff222222222222222ff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    222222222222222222fff22222ffffffff222222fff222222222222222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff222222fff22222fffff22222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff222222fff22222fffff22222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff222222222222222ff22222ff22222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff2222222222222ffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff2222222222222ffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff222222222222222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff222222222222222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    22222ffffffffffffffff22222ffffffff22222ffff22222fffff22222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    222222222222222222fff222222222222f22222ffff22222fffff22222ff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    222222222222222222fff222222222222222222ffff22222fffff22222ff22222f222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222fff222222222222222222ffff222222222222222ff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222fff222222222222222222ffff2222222222222ffff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff222222222222222fff222222222222222222ffff2222222222222ffff222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff22222fff2222222222ffff2222222222222ffff222222222222222ffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff222222222222ffff2222222222ffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222fffffffffffffffffffffffffffffffff
    ffffffffffffff22222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffffffffffff
    ffffffffffffff222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222fffffffffffffffffffffffffffffff
    ffffffffffff22222222222fff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222ffffffffffffffffffffffffffffff
    ffffffffffff22222222fffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222fffffffffffffffffffffffffffff
    fffffffffff222222fffffffffff22222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222ffffffffffffffffffffffffffff
    fffffffffff22222fffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222fffffffffffffffffffffffffff
    ffffffffff22222ffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222ffffffffffffffffffffffffff
    ffffffffff22222ffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222fffffffffffffffffffffffff
    ffffffffff22222ffffffffffffff222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222ffffffffffffffffffffffff
    ffffffffffffffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222fffffffffffffffffffffff
    fffffffffffffffffffffffffff22222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222ffffffffffffffffffffff
    fffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222fffffffffffffffffffff
    fffffffffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222ffffffffffffffffffff
    ffffffffffffffffffffff222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222fffffffffffffffffff
    fffffffffffffffffff22222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222ffffffffffffffffff
    ffffffffffffffffff2222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222fff222222222fffffffffffffffff
    fffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222fff2222222222ffffffffffffffff
    ffffffffffffffff22222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222fff22222222222fffffffffffffff
    fffffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222ffffffffffffff
    fffffffffffff22222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222fffffffffffff
    fffffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222fffffffffffff
    fffffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222fff2222222fffffffffffff
    fffffffffffff22222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222fff2222222fffffffffffff
    fffffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222fff2222222fffffffffffff
    fffffffffffff22222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222f222222222222222222fffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222ff2222222222222222ffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222ff22222222222222fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffffffbfffffff222222222222222222222222222222ff22222222222fffffffffffffffffff
    dddddadddddddffffffffffffffffffbfffffffffffffffffffffffffffffbbbffffffffffffffffffffffffffbffffffff222222222222222222222222222222ff222222222ffffffffffffffffffff
    dddddadddddddffffffffffffffffffbbffffffffffffffffffffffffffffbbbfffffffffffffffffffffffffbbbffffffff222222222222222222222222222222ff2222222fffffffffffffffffffff
    dddddadddddddffffffffffffffffffbbffffffffffffffffffffffffffffbbbbffffffffffffffffffffffffbbbfffffffff222222222222222222222222222222f222222ffffffffffffffffffffff
    dddddadddddddfffffffffffffffffbbbbffffffffffffffffffffffffffbbbbbfffffffffffffffffffffffbbbbbfffffffff22222222222222222222222222222222222fffffffffffffffffffffff
    dddddadddddddffffffffffffffffbbbbbbffffffffffffffffffffffffbbbbbbbffffffffffffffffffffffbbbbbffffffffff222222222222222222222222222222222ffffffffffffffffffffffff
    dddddadddddddffffffffffffffffbbbbbbffffffffffffffffffffffffbbbbbbbfffffffffffffffffffffbbbdbbbffffffffff222222222222222222222222222222ffffffffffffffffffffffffff
    dddddadddddddfffffffffffffffbbdbbbbbffffffffffffffffffffffbbbdbbbbbffffffffffffffffffffbbbdbbbfffffffffff2222222222222222222222222222fffffffffffffffffffffffffff
    dddddadddddddffffffffffffffbbdbbbbbbffffffffffffffffffffffbbbdbbbbbbffffffffffffffffffbbbdbbbbffffffffffff22222222222222222222222222ffffffffffffffffffffffffffff
    dddddadddddddffffffffffffffbbdbbbbbbbffffffffffffffffffffbbbdbbbbbbbffffffffffffffffffbbbdbbbbbffffffffffff222222222222222222222222fffffffffffffffffffffffffffff
    aaaaaaaaaaaaafffffffffffffbbdbbbbbbbbffffffffffffffffffffbbdbbbbbbbbbffffffffffffffffbbbdbbbbbbfffffffffffff2222222222222222222222ffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffffffffffffbbdbbbbbbbbbbffffffffffffffffffbbbdbbbbbbbbbffffffffffffffffbbbdbbbbbbbfffffffffffff22222222222222222222fffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffffffffffffbbdbbbbbbbbbbbffffffffffffffffbbbdbbbbbbbbbbbffffffffffffffbbbdbbbbbbbbffffffffffffff222222222222222222ffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbfffffffffffbbdbbbbbbbbbbbbffffffffffffffffbbdbbbbbbbbbbbbffffffffffffffbbbdbbbbbbbbbffffffffffffff2222222222222222fffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffffffffffbbdbbbbbbbbbbbbbbffffffffffffffbbbdbbbbbbbbbbbbbfffffffffffffbbdbbbbbbbbbbfffffffffffffff2222222222222fffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffffffffffbbdbbbbbbbbbbbbbbffffffffffffffbbdbbbbbbbbbbbbbbffffffffffffbbbdbbbbbbbbbbbfffffffffffffff22222222222ffffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbfffffffffbbdbbbbbbbbbbbbbbbbffffffffffffbbbdbbbbbbbbbbbbbbbfffffffffffbbdbbbbbbbbbbbbffffffffffffffff222222222fffffffffffffffffffffffffffffffffffff
    aaaaaaaaaaaaaffffffffbbdbbbbbbbbbbbbbbbbbbfffffffffffbbdbbbbbbbbbbbbbbbbffffffffffbbbdbbbbbbbbbbbbbffffffffffffffff2222222ffffffffffffffffffffffffffffffffffffff
    bbbbbabbbbbbbffffffffbbdbbbbbbbbbbbbbbbbbbffffffffffbbdbbbbbbbbbbbbbbbbbbfffffffffbbdbbbbbbbbbbbbbbfffffffffffffffff22222fffffffffffffffffffffffffffffffffffffff
    bbbbbabbbbbbbfffffffbbdbbbbbbbbbbbbbbbbbbbbffffffffbbbdbbbbbbbbbbbbbbbbbbffffffffbbbdbbbbbbbbbbbbbbbfffffffffffffffff22fffffffffffffffffffffffffffffffffffffffff
    bbbbbabbbbbbbffffffbbdbbbbbbbbbbbbbbbbbbbbbffffffffbbdbbbbbbbbbbbbbbbbbbbbfffffffbbdbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbabbbbbbbffffffbbdbbbbbbbbbbbbbbbbbbbbbbffffffbbbdbbbbbbbbbbbbbbbbbbbbbfffffbbbdbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbabbbbbbbfffffbbdbbbbbbbbbbbbbbbbbbbbbbbffffffbbdbbbbbbbbbbbbbbbbbbbbbbfffffbbdbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    aaaaaaaaaaaaaffffbbdbbbbbbbbbbbbbbbbbbbbbbbbbffffbbdbbbbbbbbbbbbbbbbbbbbbbbbfffbbbdbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffffbbdbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbdbbbbbbbbbbbbbbbbbbbbbbbbfffbbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbfffbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbdbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbdbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbabbbbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
tiles.setTilemap(tilemap`level1`)
mySprite2 = sprites.create(img`
    . . . . . f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Start)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.LAVAMAKER)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
timer.after(500, function () {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile`)
})
game.onUpdateInterval(5000, function () {
    if (mySprite5.tileKindAt(TileDirection.Center, sprites.castle.rock0)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
            . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
            . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
            . . . 2 4 4 4 4 4 4 4 4 2 . . . 
            . . . 2 4 4 4 4 4 4 4 4 2 . . . 
            . . . . 2 5 5 5 5 5 5 2 . . . . 
            . . . . 2 5 5 5 5 5 5 2 . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, 0, -50)
        projectile2 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
            . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
            . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
            . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
            . . . 2 4 4 4 4 4 4 4 4 2 . . . 
            . . . 2 4 4 4 4 4 4 4 4 2 . . . 
            . . . . 2 5 5 5 5 5 5 2 . . . . 
            . . . . 2 5 5 5 5 5 5 2 . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, 0, -50)
        tiles.placeOnRandomTile(projectile, sprites.dungeon.hazardLava0)
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.hazardLava1)
        timer.after(2000, function () {
            projectile.setVelocity(0, 50)
            projectile2.setVelocity(0, 50)
            projectile.setImage(img`
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . 2 5 5 5 5 5 5 2 . . . . 
                . . . . 2 5 5 5 5 5 5 2 . . . . 
                . . . 2 4 4 4 4 4 4 4 4 2 . . . 
                . . . 2 4 4 4 4 4 4 4 4 2 . . . 
                . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
                . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
                . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
                . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
                . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                `)
            projectile2.setImage(img`
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . 2 5 5 5 5 5 5 2 . . . . 
                . . . . 2 5 5 5 5 5 5 2 . . . . 
                . . . 2 4 4 4 4 4 4 4 4 2 . . . 
                . . . 2 4 4 4 4 4 4 4 4 2 . . . 
                . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
                . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
                . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
                . . 2 4 f 4 4 4 4 4 4 f 4 2 . . 
                . . 2 4 4 4 4 4 4 4 4 4 4 2 . . 
                . . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                `)
        })
    }
})
forever(function () {
    if (mySprite2.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        music.playMelody("C D E A E F E D ", 300)
        music.playMelody("D F A F B - C5 D ", 300)
        music.playMelody("E A D G B D - A ", 300)
    } else {
        music.playMelody("C5 B G A C5 B C5 G ", 200)
        music.playMelody("A B G C5 A B G C5 ", 200)
        music.playMelody("A C5 G B C5 A C5 B ", 200)
    }
})
forever(function () {
    if (!(controller.up.isPressed()) && mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
        mySprite.vy = 60
    }
    if (!(controller.up.isPressed()) && mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile3`)) {
        mySprite.vy = 60
    }
})
