def on_button_pressed_a():
    for index in range(2):
        basic.show_icon(IconNames.SNAKE)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            # # . # #
            # # . . .
            """)
        basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index2 in range(4):
        basic.show_icon(IconNames.LEFT_TRIANGLE)
        basic.pause(100)
        basic.show_leds("""
            # # # # #
            . # . . #
            . . # . #
            . . . # #
            . . . . #
            """)
        basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)
