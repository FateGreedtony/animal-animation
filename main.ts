input.onButtonPressed(Button.A, function on_button_pressed_a() {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Snake)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            # # . # #
            # # . . .
            `)
        basic.pause(500)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    for (let index2 = 0; index2 < 4; index2++) {
        basic.showIcon(IconNames.LeftTriangle)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            . # . . #
            . . # . #
            . . . # #
            . . . . #
            `)
        basic.pause(500)
    }
    basic.clearScreen()
})
