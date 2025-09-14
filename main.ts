namespace SpriteKind {
    export const nightguard = SpriteKind.create()
    export const brown_toy_duck = SpriteKind.create()
    export const blue_toy_duck = SpriteKind.create()
    export const yellow_toy_duck = SpriteKind.create()
    export const pink_toy_duck = SpriteKind.create()
    export const balloon_duck = SpriteKind.create()
    export const withered_brown_duck = SpriteKind.create()
    export const withered_blue_duck = SpriteKind.create()
    export const withered_yellow_duck = SpriteKind.create()
    export const withered_brown_black_duck = SpriteKind.create()
    export const puppet_duck = SpriteKind.create()
    export const withered_golden_duck = SpriteKind.create()
    export const cursor = SpriteKind.create()
    export const check = SpriteKind.create()
    export const box_wind = SpriteKind.create()
    export const blue_toy_ducks_moving = SpriteKind.create()
    export const blue_toy_ducks_moving2 = SpriteKind.create()
    export const blue_ducks_moving3 = SpriteKind.create()
    export const blue_toy_ducks_moving4 = SpriteKind.create()
    export const blue_toy_ducks_moving5 = SpriteKind.create()
    export const blue_toy_ducks_kill_phase = SpriteKind.create()
    export const blue_toy_ducks_moving3 = SpriteKind.create()
    export const monitor = SpriteKind.create()
    export const monitor2 = SpriteKind.create()
    export const E1 = SpriteKind.create()
    export const brown_toy_ducks_movement_block = SpriteKind.create()
    export const brown_toy_ducks_movement_block2 = SpriteKind.create()
    export const brown_toy_ducks_movement_block3 = SpriteKind.create()
    export const brown_toy_ducks_killphase = SpriteKind.create()
    export const brown_toy_ducks_kill_phase2 = SpriteKind.create()
    export const kill_meter = SpriteKind.create()
    export const kill_meter2 = SpriteKind.create()
    export const kill_meter3 = SpriteKind.create()
    export const yellow_toy_ducks_moving_block1 = SpriteKind.create()
    export const yellow_toy_ducks_moving_block2 = SpriteKind.create()
    export const yellow_toy_ducks_moving_block3 = SpriteKind.create()
    export const yellow_toy_ducks_moving_block4 = SpriteKind.create()
    export const yellow_toy_ducks_moving_block5 = SpriteKind.create()
    export const yellow_toy_ducks_moving_block6 = SpriteKind.create()
    export const yellow_toy_ducks_kill_phase = SpriteKind.create()
    export const pink_toy_ducks_moving_block = SpriteKind.create()
    export const pink_toy_ducks_moving_block2 = SpriteKind.create()
    export const pink_toy_ducks_moving_block3 = SpriteKind.create()
    export const pink_toy_ducks_moving_block4 = SpriteKind.create()
    export const pink_toy_ducks_moving_block5 = SpriteKind.create()
    export const pink_toy_ducks_moving_block6 = SpriteKind.create()
    export const pink_toy_ducks_moving_block7 = SpriteKind.create()
    export const pink_toy_ducks_kill_phase = SpriteKind.create()
    export const withered_brown_ducks_moving_block = SpriteKind.create()
    export const withered_brown_ducks_moving_block2 = SpriteKind.create()
    export const withered_brown_ducks_moving_block3 = SpriteKind.create()
    export const withered_brown_ducks_moving_block4 = SpriteKind.create()
    export const withered_blue_ducks_moving_block = SpriteKind.create()
    export const withered_blue_ducks_moving_block2 = SpriteKind.create()
    export const withered_blue_ducks_moving_block3 = SpriteKind.create()
    export const withered_blue_ducks_moving_block4 = SpriteKind.create()
    export const withered_blue_ducks_moving_block5 = SpriteKind.create()
    export const withered_blue_ducks_moving_block6 = SpriteKind.create()
    export const withered_yellow_ducks_moving_block = SpriteKind.create()
    export const withered_yellow_ducks_moving_block2 = SpriteKind.create()
    export const withered_yellow_ducks_moving_block3 = SpriteKind.create()
    export const withered_yellow_ducks_moving_block4 = SpriteKind.create()
    export const withered_yellow_ducks_moving_block5 = SpriteKind.create()
    export const him = SpriteKind.create()
    export const dark = SpriteKind.create()
    export const dark_destroyer = SpriteKind.create()
    export const hallway = SpriteKind.create()
    export const if_you_are_reading_this_i_want_to_say_that_making_this_game_was_annoying = SpriteKind.create()
    export const baldi = SpriteKind.create()
    export const will = SpriteKind.create()
    export const beback = SpriteKind.create()
    export const foxygetsrekt = SpriteKind.create()
}
namespace StatusBarKind {
    export const box = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.blue_toy_duck, SpriteKind.blue_toy_ducks_moving2, function (sprite, otherSprite) {
    pause(4000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(16, 18))
    }
})
sprites.onOverlap(SpriteKind.blue_toy_duck, SpriteKind.blue_toy_ducks_moving3, function (sprite, otherSprite) {
    pause(4000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(19, 50))
    }
})
sprites.onOverlap(SpriteKind.brown_toy_duck, SpriteKind.brown_toy_ducks_movement_block2, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 54))
    }
})
function music_box () {
    statusbar = statusbars.create(20, 4, StatusBarKind.box)
    statusbar.attachToSprite(mySprite24)
    statusbar.setColor(7, 2)
}
sprites.onOverlap(SpriteKind.withered_brown_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.withered_yellow_duck, SpriteKind.withered_yellow_ducks_moving_block2, function (sprite, otherSprite) {
    pause(6500)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(24, 49))
    }
})
sprites.onOverlap(SpriteKind.withered_brown_black_duck, SpriteKind.foxygetsrekt, function (sprite, otherSprite) {
    pause(500)
    if (Math.percentChance(40)) {
        sprites.destroy(mySprite9)
        mySprite9 = sprites.create(img`
            . . . . . . . . . . b e b . . . 
            . . . . . . . . . b f b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b e e e e e b . . . 
            . . . . b b e f f f e e e f . . 
            . . . . b f e f f f e f 4 c . . 
            . . . . b e e f f f e e 4 4 . . 
            . b b b e f e e e e 4 4 4 4 4 b 
            b f f e b b e f e 4 4 4 4 4 b . 
            b b e f e e b e e e e e e b . . 
            c e c f f f e b e f e e e e b . 
            c b e c e e e b e f f e f e b . 
            . c e e c c b e e e f e e e b . 
            . . c b e e e e e e e e b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.withered_brown_black_duck)
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(0, 6))
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 59))
    tiles.placeOnTile(mySprite13, tiles.getTileLocation(9, 57))
})
function brown_toy_ducks_movement_blocks () {
    mySprite25 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brown_toy_ducks_movement_block)
    tiles.placeOnTile(mySprite25, tiles.getTileLocation(50, 3))
    mySprite26 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brown_toy_ducks_movement_block2)
    tiles.placeOnTile(mySprite26, tiles.getTileLocation(50, 14))
    mySprite27 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brown_toy_ducks_movement_block3)
    tiles.placeOnTile(mySprite27, tiles.getTileLocation(9, 54))
    mySprite28 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brown_toy_ducks_killphase)
    tiles.placeOnTile(mySprite28, tiles.getTileLocation(9, 56))
}
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
function him1 () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite12)
    mySprite12 = sprites.create(img`
        . . . . . . . . . . b 4 b . . . 
        . . . . . . . . . b f b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 4 4 4 4 4 b . . . 
        . . . . b b 4 f f f 4 f 4 f . . 
        . . . . b 4 4 f f f 4 4 5 c . . 
        . . . . b f 4 f f f 4 4 5 5 b . 
        . b b b 4 4 f 4 4 4 5 5 5 5 5 b 
        b f f 4 b b 4 f 4 5 5 5 5 5 b . 
        b b f 4 f 4 b 4 f 4 4 4 4 b . . 
        c 4 c 4 4 f 4 b f 4 f 4 4 4 b . 
        c b 4 c 4 4 4 b 4 4 f 4 f 4 b . 
        . c f 4 c c b 4 4 4 f f 4 4 b . 
        . . c b 4 4 4 f 4 4 4 4 f b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_golden_duck)
    tiles.placeOnTile(mySprite12, tiles.getTileLocation(0, 0))
    pause(1000)
    info.player2.setScore(100)
}
sprites.onOverlap(SpriteKind.cursor, SpriteKind.monitor2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite15)
        mySprite29 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.kill_meter)
        tiles.placeOnTile(mySprite29, tiles.getTileLocation(9, 58))
        effects.blizzard.startScreenEffect()
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.LoopingInBackground)
        pause(6500)
        sprites.destroy(mySprite29)
        effects.blizzard.endScreenEffect()
        music.stopAllSounds()
        mySprite15 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . c c c c c c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.box_wind)
        tiles.placeOnTile(mySprite15, tiles.getTileLocation(12, 57))
    }
})
function withered_golden_ducks_movement_blocks () {
    mySprite60 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.him)
    tiles.placeOnTile(mySprite60, tiles.getTileLocation(0, 0))
}
sprites.onOverlap(SpriteKind.blue_toy_duck, SpriteKind.blue_toy_ducks_moving4, function (sprite, otherSprite) {
    pause(4000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(20, 59))
    }
})
function office_stand_for_yellow_toy_duck () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite4)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 3 1 f 5 5 3 f . . 
        . . . . b 5 5 1 f f 5 3 4 c . . 
        . . . . b 5 5 3 f b 3 3 4 4 . . 
        . b b b 3 5 5 5 5 5 4 4 4 4 4 b 
        b 3 3 3 b b 3 5 5 4 4 4 4 4 b . 
        b b 3 5 5 5 b 5 5 5 5 5 5 b . . 
        c 3 c 5 5 5 5 3 5 5 5 5 5 5 b . 
        c b 3 c 3 5 5 b 5 5 5 5 5 5 b . 
        . c 3 3 c c b 3 5 5 5 5 5 3 b . 
        . . c b 3 3 3 3 3 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_duck)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(54, 3))
    pause(1000)
    info.player2.setScore(100)
}
sprites.onOverlap(SpriteKind.withered_brown_black_duck, SpriteKind.beback, function (sprite, otherSprite) {
    pause(15000)
    if (Math.percentChance(40)) {
        mySprite7.follow(mySprite14)
    }
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block7, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(14, 59))
    }
})
sprites.onOverlap(SpriteKind.cursor, SpriteKind.monitor, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        story.showPlayerChoices("cam 1", "cam 2", "cam 3", "next")
        if (story.checkLastAnswer("cam 1")) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 49))
            tiles.placeOnTile(mySprite13, tiles.getTileLocation(2, 49))
        }
        if (story.checkLastAnswer("cam 2")) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(18, 49))
            tiles.placeOnTile(mySprite13, tiles.getTileLocation(18, 49))
        }
        if (story.checkLastAnswer("cam 3")) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 17))
            tiles.placeOnTile(mySprite13, tiles.getTileLocation(4, 17))
        }
        if (story.checkLastAnswer("next")) {
            story.showPlayerChoices("cam 4", "cam 5", "cam 6", "next")
            if (story.checkLastAnswer("cam 4")) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 17))
                tiles.placeOnTile(mySprite13, tiles.getTileLocation(15, 17))
            }
            if (story.checkLastAnswer("cam 5")) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 54))
                tiles.placeOnTile(mySprite13, tiles.getTileLocation(0, 54))
            }
            if (story.checkLastAnswer("cam 6")) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(20, 59))
                tiles.placeOnTile(mySprite13, tiles.getTileLocation(20, 59))
            }
            if (story.checkLastAnswer("next")) {
                story.showPlayerChoices("cam 7", "cam 8", "cam 9", "next")
                if (story.checkLastAnswer("cam 7")) {
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(13, 7))
                    tiles.placeOnTile(mySprite13, tiles.getTileLocation(13, 7))
                }
                if (story.checkLastAnswer("cam 8")) {
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 5))
                    tiles.placeOnTile(mySprite13, tiles.getTileLocation(2, 5))
                }
                if (story.checkLastAnswer("cam 9")) {
                    tiles.placeOnTile(mySprite, tiles.getTileLocation(53, 3))
                    tiles.placeOnTile(mySprite13, tiles.getTileLocation(53, 3))
                }
                if (story.checkLastAnswer("next")) {
                    story.showPlayerChoices("cam 10", "cam 11", "cam 12", "back")
                    if (story.checkLastAnswer("cam 10")) {
                        tiles.placeOnTile(mySprite, tiles.getTileLocation(50, 18))
                        tiles.placeOnTile(mySprite13, tiles.getTileLocation(50, 18))
                    }
                    if (story.checkLastAnswer("cam 11")) {
                        tiles.placeOnTile(mySprite, tiles.getTileLocation(57, 31))
                        tiles.placeOnTile(mySprite13, tiles.getTileLocation(57, 31))
                    }
                    if (story.checkLastAnswer("cam 12")) {
                        tiles.placeOnTile(mySprite, tiles.getTileLocation(50, 55))
                        tiles.placeOnTile(mySprite13, tiles.getTileLocation(50, 55))
                    }
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.withered_golden_duck, SpriteKind.him, function (sprite, otherSprite) {
    pause(10000)
    if (Math.percentChance(20)) {
        tiles.placeOnTile(mySprite12, tiles.getTileLocation(9, 58))
        him1()
    }
})
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(47, 15))
    }
})
function withered_brown_ducks_kill_stand () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite7)
    mySprite7 = sprites.create(img`
        . . . . . . . . . . b e b . . . 
        . . . . . . . . . b e b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b e e e e f b . . . 
        . . . . b b e e 1 f e e e f . . 
        . . . . b f e 1 f f e e 4 c . . 
        . . . . b f e e f b e e 4 4 . . 
        . b b b e e f e e e 4 4 4 4 4 b 
        b f f e b b e e e 4 4 4 4 4 b . 
        b b f e e f b e f e e f e b . . 
        c e c e f e e b e e e e e e b . 
        c b f c e e e b e e f e f e b . 
        . c f e c c b e e e f e e e b . 
        . . c b e e e f f e e e b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_brown_duck)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(0, 6))
    pause(1000)
    info.player2.setScore(100)
}
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_moving_block5, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(0, 54))
    }
})
function office_stand_for_blue_toy_duck () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite3)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . b 9 b . . . 
        . . . . . . . . . b 9 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 9 9 9 9 9 b . . . 
        . . . . b b 9 9 1 f 9 9 9 f . . 
        . . . . b 9 9 1 f f 9 9 4 c . . 
        . . . . b 9 9 9 f b 9 9 4 4 . . 
        . b b b 9 9 9 9 9 9 4 4 4 4 4 b 
        b 9 9 9 b b 9 9 9 4 4 4 4 4 b . 
        b b 9 9 9 9 b 9 9 9 9 9 9 b . . 
        c 9 c 9 9 9 9 b 9 9 9 9 9 9 b . 
        c b 9 c 9 9 9 b 9 9 9 9 9 9 b . 
        . c 9 9 c c b 9 9 9 9 9 9 9 b . 
        . . c b 9 9 9 9 9 9 9 9 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_duck)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(52, 3))
    pause(1000)
    info.player2.setScore(100)
}
function office_stand_for_pink_toy_duck () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite5)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . b 3 b . . . 
        . . . . . . . . . b 3 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 3 3 3 3 3 b . . . 
        . . . . b b 3 3 1 f 3 3 3 f . . 
        . . . . b 3 3 1 f f 3 3 4 c . . 
        . . . . b 3 3 3 f b 3 3 4 4 . . 
        . b b b 3 3 3 3 3 3 4 4 4 4 4 b 
        b 3 3 3 b b 3 3 3 4 4 4 4 4 b . 
        b b 3 3 3 3 b 3 3 3 3 3 3 b . . 
        c 3 c 3 3 3 3 b 3 3 3 3 3 3 b . 
        c b 3 c 3 3 3 b 3 3 3 3 3 3 b . 
        . c 3 3 c c b 3 3 3 3 3 3 3 b . 
        . . c b 3 3 3 3 3 3 3 3 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_duck)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(51, 56))
    pause(1000)
    info.player2.setScore(100)
}
sprites.onOverlap(SpriteKind.withered_yellow_duck, SpriteKind.withered_yellow_ducks_moving_block5, function (sprite, otherSprite) {
    pause(7500)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(9, 58))
        withered_yellow_ducks_office_stand()
    }
})
sprites.onOverlap(SpriteKind.withered_brown_black_duck, SpriteKind.baldi, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(10, 7))
    }
})
function blue_toy_ducks_movement_blocks () {
    mySprite16 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_ducks_moving)
    tiles.placeOnTile(mySprite16, tiles.getTileLocation(52, 3))
    mySprite17 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_ducks_moving2)
    tiles.placeOnTile(mySprite17, tiles.getTileLocation(3, 18))
    mySprite18 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_ducks_moving3)
    tiles.placeOnTile(mySprite18, tiles.getTileLocation(16, 18))
    mySprite19 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_ducks_moving4)
    tiles.placeOnTile(mySprite19, tiles.getTileLocation(19, 50))
    mySprite20 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_ducks_moving5)
    tiles.placeOnTile(mySprite20, tiles.getTileLocation(20, 59))
    mySprite21 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.blue_toy_ducks_kill_phase)
    tiles.placeOnTile(mySprite21, tiles.getTileLocation(14, 59))
}
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_moving_block3, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(10, 55))
    }
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
statusbars.onZero(StatusBarKind.box, function (status) {
    statusbar.value = 100
    sprites.destroy(statusbar)
    tiles.placeOnTile(mySprite11, tiles.getTileLocation(9, 56))
    pause(1000)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
    pause(5000)
    mySprite11.follow(mySprite14)
})
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_moving_block6, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(5, 59))
    }
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.withered_blue_ducks_moving_block2, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(10, 54))
    }
})
function withered_brown_black_ducks_movement_blocks () {
    mySprite63 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.baldi)
    tiles.placeOnTile(mySprite63, tiles.getTileLocation(0, 6))
    mySprite64 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.will)
    tiles.placeOnTile(mySprite64, tiles.getTileLocation(10, 7))
    mySprite65 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.beback)
    tiles.placeOnTile(mySprite65, tiles.getTileLocation(9, 55))
}
sprites.onOverlap(SpriteKind.withered_yellow_duck, SpriteKind.withered_yellow_ducks_moving_block3, function (sprite, otherSprite) {
    pause(6500)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(20, 59))
    }
})
function withered_blue_duck_movement_blocks () {
    mySprite49 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_ducks_moving_block)
    tiles.placeOnTile(mySprite49, tiles.getTileLocation(2, 4))
    mySprite50 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_ducks_moving_block2)
    tiles.placeOnTile(mySprite50, tiles.getTileLocation(7, 5))
    mySprite51 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_ducks_moving_block3)
    tiles.placeOnTile(mySprite51, tiles.getTileLocation(10, 54))
    mySprite52 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_ducks_moving_block4)
    tiles.placeOnTile(mySprite52, tiles.getTileLocation(0, 49))
    mySprite53 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_ducks_moving_block5)
    tiles.placeOnTile(mySprite53, tiles.getTileLocation(0, 56))
    mySprite54 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_ducks_moving_block6)
    tiles.placeOnTile(mySprite54, tiles.getTileLocation(5, 59))
}
sprites.onOverlap(SpriteKind.withered_brown_duck, SpriteKind.withered_brown_ducks_moving_block, function (sprite, otherSprite) {
    pause(7000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(7, 6))
    }
})
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_moving_block1, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(13, 7))
    }
})
sprites.onOverlap(SpriteKind.withered_brown_black_duck, SpriteKind.will, function (sprite, otherSprite) {
    pause(10000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(9, 55))
    }
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block4, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(12, 55))
    }
})
sprites.onOverlap(SpriteKind.brown_toy_duck, SpriteKind.brown_toy_ducks_movement_block3, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 56))
    }
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block3, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(16, 16))
    }
})
function withered_yellow_ducks_office_stand () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite9)
    mySprite9 = sprites.create(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b f b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 f b . . . 
        . . . . b b 5 4 5 4 5 5 d f . . 
        . . . . b 5 5 5 5 5 5 d 4 c . . 
        . . . . b f f 5 5 5 d d 4 4 . . 
        . b b b d 5 f 5 5 5 4 4 4 4 4 b 
        b f f d b b d f 5 4 4 4 4 4 b . 
        b b f 5 f 5 b f f 5 5 5 5 b . . 
        c d c 5 f f 5 d 5 f 5 5 f 5 b . 
        c b f c d 5 5 b 5 f f 5 f f b . 
        . c f d c c b d 5 5 f 5 5 f b . 
        . . c b f f f d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_yellow_duck)
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(5, 5))
    pause(1000)
    info.player2.setScore(100)
}
function withered_yellow_ducks_movement () {
    mySprite55 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_yellow_ducks_moving_block)
    tiles.placeOnTile(mySprite55, tiles.getTileLocation(5, 5))
    mySprite56 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_yellow_ducks_moving_block2)
    tiles.placeOnTile(mySprite56, tiles.getTileLocation(19, 20))
    mySprite57 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_yellow_ducks_moving_block3)
    tiles.placeOnTile(mySprite57, tiles.getTileLocation(24, 49))
    mySprite58 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_yellow_ducks_moving_block4)
    tiles.placeOnTile(mySprite58, tiles.getTileLocation(20, 59))
    mySprite59 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_yellow_ducks_moving_block5)
    tiles.placeOnTile(mySprite59, tiles.getTileLocation(14, 59))
}
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block2, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(12, 5))
    }
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.withered_blue_ducks_moving_block6, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(9, 58))
        withered_brown_ducks_kill_stand()
    }
})
sprites.onOverlap(SpriteKind.brown_toy_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_moving_block4, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(2, 50))
    }
})
sprites.onOverlap(SpriteKind.blue_toy_duck, SpriteKind.blue_toy_ducks_moving5, function (sprite, otherSprite) {
    pause(4000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(14, 59))
        pause(2000)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(9, 58))
        office_stand_for_blue_toy_duck()
    }
})
function office_stand () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite2)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . b e b . . . 
        . . . . . . . . . b e b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b e e e e e b . . . 
        . . . . b b e e 1 f e e e f . . 
        . . . . b e e 1 f f e e 4 c . . 
        . . . . b 3 e e f b e 3 4 4 . . 
        . b b b e e e e e e 4 4 4 4 4 b 
        b e e e b b e e e 4 4 4 4 4 b . 
        b b e e e e b e e e e e e b . . 
        c e c e e e e b e e e e e e b . 
        c b e c e e e b e e e e e e b . 
        . c e e c c b e e e e e e e b . 
        . . c b e e e e e e e e b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brown_toy_duck)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(50, 3))
    pause(1000)
    info.player2.setScore(100)
}
sprites.onOverlap(SpriteKind.cursor, SpriteKind.if_you_are_reading_this_i_want_to_say_that_making_this_game_was_annoying, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite61)
        sprites.destroy(mySprite62)
        info.changeScoreBy(-1)
        mySprite66 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.foxygetsrekt)
        tiles.placeOnTile(mySprite66, tiles.getTileLocation(9, 55))
        pause(5000)
        mySprite61 = sprites.create(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.hallway)
        tiles.placeOnTile(mySprite61, tiles.getTileLocation(9, 53))
        mySprite62 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.if_you_are_reading_this_i_want_to_say_that_making_this_game_was_annoying)
        tiles.placeOnTile(mySprite62, tiles.getTileLocation(7, 57))
        sprites.destroy(mySprite66)
    }
})
function pink_toy_ducks_movement () {
    mySprite37 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block)
    tiles.placeOnTile(mySprite37, tiles.getTileLocation(51, 56))
    mySprite38 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block2)
    tiles.placeOnTile(mySprite38, tiles.getTileLocation(47, 15))
    mySprite39 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block3)
    tiles.placeOnTile(mySprite39, tiles.getTileLocation(12, 5))
    mySprite40 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block4)
    tiles.placeOnTile(mySprite40, tiles.getTileLocation(16, 16))
    mySprite41 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block5)
    tiles.placeOnTile(mySprite41, tiles.getTileLocation(12, 55))
    mySprite42 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block6)
    tiles.placeOnTile(mySprite42, tiles.getTileLocation(22, 49))
    mySprite43 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_moving_block7)
    tiles.placeOnTile(mySprite43, tiles.getTileLocation(20, 59))
    mySprite44 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.pink_toy_ducks_kill_phase)
    tiles.placeOnTile(mySprite44, tiles.getTileLocation(14, 49))
}
sprites.onOverlap(SpriteKind.cursor, SpriteKind.box_wind, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        statusbar.value += 1
    }
})
sprites.onOverlap(SpriteKind.puppet_duck, SpriteKind.check, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.withered_golden_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.yellow_toy_ducks_moving_block4, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(0, 56))
    }
})
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_moving_block2, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(15, 18))
    }
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.withered_blue_ducks_moving_block5, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(5, 59))
    }
})
function withered_brown_ducks_movement_blocks () {
    mySprite45 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_brown_ducks_moving_block)
    tiles.placeOnTile(mySprite45, tiles.getTileLocation(0, 6))
    mySprite46 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_brown_ducks_moving_block2)
    tiles.placeOnTile(mySprite46, tiles.getTileLocation(7, 6))
    mySprite47 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_brown_ducks_moving_block3)
    tiles.placeOnTile(mySprite47, tiles.getTileLocation(1, 48))
    mySprite48 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_brown_ducks_moving_block4)
    tiles.placeOnTile(mySprite48, tiles.getTileLocation(12, 56))
}
sprites.onOverlap(SpriteKind.withered_brown_duck, SpriteKind.withered_brown_ducks_moving_block2, function (sprite, otherSprite) {
    pause(7000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(1, 48))
    }
})
sprites.onOverlap(SpriteKind.withered_yellow_duck, SpriteKind.withered_yellow_ducks_moving_block4, function (sprite, otherSprite) {
    pause(6500)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(14, 59))
    }
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_kill_phase, function (sprite, otherSprite) {
    pause(7000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(9, 58))
        office_stand_for_pink_toy_duck()
    }
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
function withered_bonnies_office_stand () {
    for (let index = 0; index < 51; index++) {
        pause(100)
        info.player2.changeScoreBy(-5)
    }
    sprites.destroy(mySprite8)
    mySprite8 = sprites.create(img`
        . . . . . . . . . . c 8 c . . . 
        . . . . . . . . . c f c . . . . 
        . . . . . . c c c c c c . . . . 
        . . . . . c c 8 8 8 8 8 c . . . 
        . . . . c c 8 f f f f f 8 f . . 
        . . . . c 8 8 f 2 f 2 f 8 c . . 
        . . . . c f 8 f f f f f 8 8 c . 
        . c c c 8 8 8 8 8 8 8 8 f 8 f c 
        c 8 f 8 b b f 8 f f 8 8 8 f c . 
        c b 8 8 8 8 b 8 8 8 8 f 8 c . . 
        c 8 c 8 f 8 8 b 8 f 8 8 8 8 c . 
        c b 8 c 8 8 8 b 8 f f 8 f 8 c . 
        . c 8 8 c c b 8 8 8 f 8 8 8 c . 
        . . c b 8 f 8 8 8 8 8 8 c c . . 
        . . . c c c c c c c c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.withered_blue_duck)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(2, 4))
    pause(1000)
    info.player2.setScore(100)
}
sprites.onOverlap(SpriteKind.withered_yellow_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block5, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(22, 49))
    }
})
function yellow_toy_ducks_movement_blocks () {
    mySprite30 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_moving_block1)
    tiles.placeOnTile(mySprite30, tiles.getTileLocation(54, 3))
    mySprite31 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_moving_block2)
    tiles.placeOnTile(mySprite31, tiles.getTileLocation(13, 7))
    mySprite32 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_moving_block3)
    tiles.placeOnTile(mySprite32, tiles.getTileLocation(15, 18))
    mySprite33 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_moving_block4)
    tiles.placeOnTile(mySprite33, tiles.getTileLocation(10, 55))
    mySprite34 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_moving_block5)
    tiles.placeOnTile(mySprite34, tiles.getTileLocation(2, 50))
    mySprite35 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_moving_block6)
    tiles.placeOnTile(mySprite35, tiles.getTileLocation(0, 54))
    mySprite36 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.yellow_toy_ducks_kill_phase)
    tiles.placeOnTile(mySprite36, tiles.getTileLocation(5, 59))
}
sprites.onOverlap(SpriteKind.withered_yellow_duck, SpriteKind.withered_yellow_ducks_moving_block, function (sprite, otherSprite) {
    pause(6500)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(19, 20))
    }
})
sprites.onOverlap(SpriteKind.brown_toy_duck, SpriteKind.brown_toy_ducks_killphase, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 58))
        office_stand()
    }
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.withered_blue_ducks_moving_block, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(7, 5))
    }
})
sprites.onOverlap(SpriteKind.pink_toy_duck, SpriteKind.pink_toy_ducks_moving_block6, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(20, 59))
    }
})
sprites.onOverlap(SpriteKind.blue_toy_duck, SpriteKind.kill_meter, function (sprite, otherSprite) {
    pause(100)
    info.player2.changeScoreBy(6)
})
sprites.onOverlap(SpriteKind.blue_toy_duck, SpriteKind.blue_toy_ducks_moving, function (sprite, otherSprite) {
    pause(4000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(3, 18))
    }
})
sprites.onOverlap(SpriteKind.withered_brown_duck, SpriteKind.withered_brown_ducks_moving_block3, function (sprite, otherSprite) {
    pause(7000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(12, 56))
    }
})
sprites.onOverlap(SpriteKind.withered_brown_duck, SpriteKind.withered_brown_ducks_moving_block4, function (sprite, otherSprite) {
    pause(8000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(9, 58))
        withered_brown_ducks_kill_stand()
    }
})
sprites.onOverlap(SpriteKind.withered_blue_duck, SpriteKind.withered_blue_ducks_moving_block3, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(0, 49))
    }
})
sprites.onOverlap(SpriteKind.withered_brown_black_duck, SpriteKind.check, function (sprite, otherSprite) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.brown_toy_duck, SpriteKind.brown_toy_ducks_movement_block, function (sprite, otherSprite) {
    pause(5000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(50, 14))
    }
})
sprites.onOverlap(SpriteKind.yellow_toy_duck, SpriteKind.yellow_toy_ducks_kill_phase, function (sprite, otherSprite) {
    pause(6000)
    if (Math.percentChance(40)) {
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(9, 58))
        office_stand_for_yellow_toy_duck()
    }
})
let mySprite36: Sprite = null
let mySprite35: Sprite = null
let mySprite34: Sprite = null
let mySprite33: Sprite = null
let mySprite32: Sprite = null
let mySprite31: Sprite = null
let mySprite30: Sprite = null
let mySprite48: Sprite = null
let mySprite47: Sprite = null
let mySprite46: Sprite = null
let mySprite45: Sprite = null
let mySprite44: Sprite = null
let mySprite43: Sprite = null
let mySprite42: Sprite = null
let mySprite41: Sprite = null
let mySprite40: Sprite = null
let mySprite39: Sprite = null
let mySprite38: Sprite = null
let mySprite37: Sprite = null
let mySprite66: Sprite = null
let mySprite59: Sprite = null
let mySprite58: Sprite = null
let mySprite57: Sprite = null
let mySprite56: Sprite = null
let mySprite55: Sprite = null
let mySprite54: Sprite = null
let mySprite53: Sprite = null
let mySprite52: Sprite = null
let mySprite51: Sprite = null
let mySprite50: Sprite = null
let mySprite49: Sprite = null
let mySprite65: Sprite = null
let mySprite64: Sprite = null
let mySprite63: Sprite = null
let mySprite21: Sprite = null
let mySprite20: Sprite = null
let mySprite19: Sprite = null
let mySprite18: Sprite = null
let mySprite17: Sprite = null
let mySprite16: Sprite = null
let mySprite60: Sprite = null
let mySprite29: Sprite = null
let mySprite28: Sprite = null
let mySprite27: Sprite = null
let mySprite26: Sprite = null
let mySprite25: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite62: Sprite = null
let mySprite61: Sprite = null
let mySprite24: Sprite = null
let mySprite15: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite14: Sprite = null
let mySprite13: Sprite = null
let mySprite: Sprite = null
game.showLongText("read controls and mechanics before playing!", DialogLayout.Full)
story.showPlayerChoices("play", "how to play")
if (story.checkLastAnswer("how to play")) {
    story.showPlayerChoices("controls", "mechanics")
    if (story.checkLastAnswer("mechanics")) {
        game.showLongText("brown toy duck: moves from the show stage to hallway and from there to your office. When he is at your office quickly put your mask on", DialogLayout.Full)
        game.showLongText("blue toy duck: he moves from show stage to your right vent. When he can be seen in the office put the mask on", DialogLayout.Full)
        game.showLongText("yellow toy duck: kind of same as blue toy duck expect appears in the hallway and goes on the left vent", DialogLayout.Full)
        game.showLongText("pink toy duck: goes from kids cove to hallway and from there to right vent. use mask to send \"yes\" away", DialogLayout.Full)
        game.showLongText("balloon duck: He doesn't want batteries. He goes from game area to left vent. use mask to send him away", DialogLayout.Full)
        game.showLongText("withered brown duck: kind of same as brown toy duck but instead spawns at parts and service room", DialogLayout.Full)
        game.showLongText("withered blue duck: he spawns in parts and service room and makes his way toward to hallway and from there to left vent and from there he spawns to your office. Put your mask on to avoid he killing you!", DialogLayout.Full)
        game.showLongText("withered brown/black eyed duck: appears in the hallway. Use flashlight to get rid of him!", DialogLayout.Full)
        game.showLongText("puppet duck: wind the music to avoid her attack!", DialogLayout.Full)
        game.showLongText("withered golden duck: sometimes appears to your office or hallway. Use your mask to get rid of him!", DialogLayout.Full)
        game.reset()
    }
    if (story.checkLastAnswer("controls")) {
        game.showLongText("use WASD or arrow keys to move the cursor and press spacebar (A) to use the button. Use X (B) to get out of cameras", DialogLayout.Full)
        game.reset()
    }
}
tiles.setCurrentTilemap(tilemap`level1`)
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
    `, SpriteKind.nightguard)
tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 59))
info.player2.setScore(100)
info.player2.setLife(0)
mySprite13 = sprites.create(img`
    ....................
    ....f...............
    ....ff..............
    ....f1f.............
    ....f11f............
    ....f111f...........
    ....f1111f..........
    ....f11111f.........
    ....f111111f........
    ....f1111111f.......
    ....f11111111f......
    ....f111111111f.....
    ....f1111111111f....
    ....f1111111fff.....
    ....f111111f........
    ....f111f111f.......
    ....f11f.f11f.......
    ....f1f...f11f......
    ....ff....f11f......
    ...........ff.......
    `, SpriteKind.cursor)
tiles.placeOnTile(mySprite13, tiles.getTileLocation(9, 57))
controller.moveSprite(mySprite13, 150, 150)
scene.cameraFollowSprite(mySprite)
mySprite13.setStayInScreen(true)
mySprite14 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.check)
tiles.placeOnTile(mySprite14, tiles.getTileLocation(9, 59))
mySprite2 = sprites.create(img`
    . . . . . . . . . . b e b . . . 
    . . . . . . . . . b e b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b e e e e e b . . . 
    . . . . b b e e 1 f e e e f . . 
    . . . . b e e 1 f f e e 4 c . . 
    . . . . b 3 e e f b e 3 4 4 . . 
    . b b b e e e e e e 4 4 4 4 4 b 
    b e e e b b e e e 4 4 4 4 4 b . 
    b b e e e e b e e e e e e b . . 
    c e c e e e e b e e e e e e b . 
    c b e c e e e b e e e e e e b . 
    . c e e c c b e e e e e e e b . 
    . . c b e e e e e e e e b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.brown_toy_duck)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(50, 3))
mySprite3 = sprites.create(img`
    . . . . . . . . . . b 9 b . . . 
    . . . . . . . . . b 9 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 9 9 9 9 9 b . . . 
    . . . . b b 9 9 1 f 9 9 9 f . . 
    . . . . b 9 9 1 f f 9 9 4 c . . 
    . . . . b 9 9 9 f b 9 9 4 4 . . 
    . b b b 9 9 9 9 9 9 4 4 4 4 4 b 
    b 9 9 9 b b 9 9 9 4 4 4 4 4 b . 
    b b 9 9 9 9 b 9 9 9 9 9 9 b . . 
    c 9 c 9 9 9 9 b 9 9 9 9 9 9 b . 
    c b 9 c 9 9 9 b 9 9 9 9 9 9 b . 
    . c 9 9 c c b 9 9 9 9 9 9 9 b . 
    . . c b 9 9 9 9 9 9 9 9 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.blue_toy_duck)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(52, 3))
mySprite4 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 3 1 f 5 5 3 f . . 
    . . . . b 5 5 1 f f 5 3 4 c . . 
    . . . . b 5 5 3 f b 3 3 4 4 . . 
    . b b b 3 5 5 5 5 5 4 4 4 4 4 b 
    b 3 3 3 b b 3 5 5 4 4 4 4 4 b . 
    b b 3 5 5 5 b 5 5 5 5 5 5 b . . 
    c 3 c 5 5 5 5 3 5 5 5 5 5 5 b . 
    c b 3 c 3 5 5 b 5 5 5 5 5 5 b . 
    . c 3 3 c c b 3 5 5 5 5 5 3 b . 
    . . c b 3 3 3 3 3 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.yellow_toy_duck)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(54, 3))
mySprite5 = sprites.create(img`
    . . . . . . . . . . b 3 b . . . 
    . . . . . . . . . b 3 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 3 3 3 3 3 b . . . 
    . . . . b b 3 3 1 f 3 3 3 f . . 
    . . . . b 3 3 1 f f 3 3 4 c . . 
    . . . . b 3 3 3 f b 3 3 4 4 . . 
    . b b b 3 3 3 3 3 3 4 4 4 4 4 b 
    b 3 3 3 b b 3 3 3 4 4 4 4 4 b . 
    b b 3 3 3 3 b 3 3 3 3 3 3 b . . 
    c 3 c 3 3 3 3 b 3 3 3 3 3 3 b . 
    c b 3 c 3 3 3 b 3 3 3 3 3 3 b . 
    . c 3 3 c c b 3 3 3 3 3 3 3 b . 
    . . c b 3 3 3 3 3 3 3 3 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pink_toy_duck)
tiles.placeOnTile(mySprite5, tiles.getTileLocation(51, 56))
let mySprite6 = sprites.create(img`
    . 2 2 2 . . . . . . b d b . . . 
    . 2 2 2 . . . . . b d b . . . . 
    . . f . . . b b b b b b . . . . 
    . . f . . b b d d d d d b . . . 
    . . f . b b d d 1 f d d 2 f . . 
    . . f . b d d 1 f f d 2 4 c . . 
    . . f . b d d d f b 2 2 4 4 . . 
    . b b b 2 d d d d d 4 4 4 4 4 b 
    b 2 2 2 b b 2 d d 4 4 4 4 4 b . 
    b b 2 d d d b d d d d d d b . . 
    c 2 c d d d d 2 d d d d d d b . 
    c b 2 c 2 d d b d d d d d d b . 
    . c 2 2 c c b 2 d d d d d 2 b . 
    . . c b 2 2 2 2 2 d d d b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.balloon_duck)
tiles.placeOnTile(mySprite6, tiles.getTileLocation(50, 18))
mySprite7 = sprites.create(img`
    . . . . . . . . . . b e b . . . 
    . . . . . . . . . b e b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b e e e e f b . . . 
    . . . . b b e e 1 f e e e f . . 
    . . . . b f e 1 f f e e 4 c . . 
    . . . . b f e e f b e e 4 4 . . 
    . b b b e e f e e e 4 4 4 4 4 b 
    b f f e b b e e e 4 4 4 4 4 b . 
    b b f e e f b e f e e f e b . . 
    c e c e f e e b e e e e e e b . 
    c b f c e e e b e e f e f e b . 
    . c f e c c b e e e f e e e b . 
    . . c b e e e f f e e e b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.withered_brown_duck)
tiles.placeOnTile(mySprite7, tiles.getTileLocation(0, 6))
mySprite8 = sprites.create(img`
    . . . . . . . . . . c 8 c . . . 
    . . . . . . . . . c f c . . . . 
    . . . . . . c c c c c c . . . . 
    . . . . . c c 8 8 8 8 8 c . . . 
    . . . . c c 8 f f f f f 8 f . . 
    . . . . c 8 8 f 2 f 2 f 8 c . . 
    . . . . c f 8 f f f f f 8 8 c . 
    . c c c 8 8 8 8 8 8 8 8 f 8 f c 
    c 8 f 8 b b f 8 f f 8 8 8 f c . 
    c b 8 8 8 8 b 8 8 8 8 f 8 c . . 
    c 8 c 8 f 8 8 b 8 f 8 8 8 8 c . 
    c b 8 c 8 8 8 b 8 f f 8 f 8 c . 
    . c 8 8 c c b 8 8 8 f 8 8 8 c . 
    . . c b 8 f 8 8 8 8 8 8 c c . . 
    . . . c c c c c c c c c c . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.withered_blue_duck)
tiles.placeOnTile(mySprite8, tiles.getTileLocation(2, 4))
mySprite9 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b f b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 f b . . . 
    . . . . b b 5 4 5 4 5 5 d f . . 
    . . . . b 5 5 5 5 5 5 d 4 c . . 
    . . . . b f f 5 5 5 d d 4 4 . . 
    . b b b d 5 f 5 5 5 4 4 4 4 4 b 
    b f f d b b d f 5 4 4 4 4 4 b . 
    b b f 5 f 5 b f f 5 5 5 5 b . . 
    c d c 5 f f 5 d 5 f 5 5 f 5 b . 
    c b f c d 5 5 b 5 f f 5 f f b . 
    . c f d c c b d 5 5 f 5 5 f b . 
    . . c b f f f d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.withered_yellow_duck)
tiles.placeOnTile(mySprite9, tiles.getTileLocation(5, 5))
let mySprite10 = sprites.create(img`
    . . . . . . . . . . b e b . . . 
    . . . . . . . . . b f b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b e e e e e b . . . 
    . . . . b b e f f f e e e f . . 
    . . . . b f e f f f e f 4 c . . 
    . . . . b e e f f f e e 4 4 . . 
    . b b b e f e e e e 4 4 4 4 4 b 
    b f f e b b e f e 4 4 4 4 4 b . 
    b b e f e e b e e e e e e b . . 
    c e c f f f e b e f e e e e b . 
    c b e c e e e b e f f e f e b . 
    . c e e c c b e e e f e e e b . 
    . . c b e e e e e e e e b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.withered_brown_black_duck)
tiles.placeOnTile(mySprite10, tiles.getTileLocation(3, 7))
mySprite11 = sprites.create(img`
    . . . . . . . . . . b f b . . . 
    . . . . . . . . . b f b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b f f f f f b . . . 
    . . . . b b f 1 1 1 1 1 f f . . 
    . . . . b f f 1 f 1 f 1 4 c . . 
    . . . . b f f 1 1 1 1 1 4 4 . . 
    . b b b d f f f f f 4 4 4 4 4 b 
    b f f f b b f f f 4 4 4 4 4 b . 
    b b f f f f b f f f f f f b . . 
    c f c f f f f b f f f f f f b . 
    c f f c f f f b f f f f f f b . 
    . c f f c c b f f f f f f f b . 
    . . c f f f f f f f f f b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.puppet_duck)
tiles.placeOnTile(mySprite11, tiles.getTileLocation(57, 33))
mySprite12 = sprites.create(img`
    . . . . . . . . . . b 4 b . . . 
    . . . . . . . . . b f b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 4 4 4 4 4 b . . . 
    . . . . b b 4 f f f 4 f 4 f . . 
    . . . . b 4 4 f f f 4 4 5 c . . 
    . . . . b f 4 f f f 4 4 5 5 b . 
    . b b b 4 4 f 4 4 4 5 5 5 5 5 b 
    b f f 4 b b 4 f 4 5 5 5 5 5 b . 
    b b f 4 f 4 b 4 f 4 4 4 4 b . . 
    c 4 c 4 4 f 4 b f 4 f 4 4 4 b . 
    c b 4 c 4 4 4 b 4 4 f 4 f 4 b . 
    . c f 4 c c b 4 4 4 f f 4 4 b . 
    . . c b 4 4 4 f 4 4 4 4 f b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.withered_golden_duck)
tiles.placeOnTile(mySprite12, tiles.getTileLocation(0, 0))
mySprite15 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.box_wind)
tiles.placeOnTile(mySprite15, tiles.getTileLocation(12, 57))
let mySprite22 = sprites.create(img`
    cccccccccccccccccccccccccccccc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccccccbbbbbbbbbbbbbbbbbcccccc
    cccccccbbbbbbbbbbbbbbbbbcccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccccccbbbbbbbbbbbbbbbbbcccccc
    cccccccbbbbbbbbbbbbbbbbbcccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccbbbbcccccccccccccccccbbbbcc
    cccccccbbbbbbbbbbbbbbbbbcccccc
    cccccccbbbbbbbbbbbbbbbbbcccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc
    `, SpriteKind.monitor)
tiles.placeOnTile(mySprite22, tiles.getTileLocation(11, 59))
let mySprite23 = sprites.create(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeeeeeebbbbbbbbbbbbbbbbbeeeeee
    eeeeeeebbbbbbbbbbbbbbbbbeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeeeeeebbbbbbbbbbbbbbbbbeeeeee
    eeeeeeebbbbbbbbbbbbbbbbbeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeebbbbeeeeeeeeeeeeeeeeebbbbee
    eeeeeeebbbbbbbbbbbbbbbbbeeeeee
    eeeeeeebbbbbbbbbbbbbbbbbeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `, SpriteKind.monitor2)
tiles.placeOnTile(mySprite23, tiles.getTileLocation(8, 59))
mySprite24 = sprites.create(img`
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
    `, SpriteKind.E1)
tiles.placeOnTile(mySprite24, tiles.getTileLocation(9, 58))
mySprite61 = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.hallway)
tiles.placeOnTile(mySprite61, tiles.getTileLocation(9, 53))
info.startCountdown(360)
mySprite62 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.if_you_are_reading_this_i_want_to_say_that_making_this_game_was_annoying)
tiles.placeOnTile(mySprite62, tiles.getTileLocation(7, 57))
info.setScore(100)
brown_toy_ducks_movement_blocks()
blue_toy_ducks_movement_blocks()
yellow_toy_ducks_movement_blocks()
pink_toy_ducks_movement()
music_box()
withered_brown_ducks_movement_blocks()
withered_blue_duck_movement_blocks()
withered_yellow_ducks_movement()
withered_golden_ducks_movement_blocks()
game.onUpdateInterval(1000, function () {
    statusbar.value += -3
})
game.onUpdateInterval(1, function () {
    if (info.player2.score() == 101) {
        info.player2.setScore(100)
    }
})
game.onUpdateInterval(1, function () {
    if (info.player2.score() <= 0) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 0) {
        sprites.destroy(mySprite62)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 0) {
        sprites.destroy(mySprite62)
    }
})
game.onUpdateInterval(100, function () {
    if (info.player2.score() < 1) {
        game.gameOver(false)
    }
})
