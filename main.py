def on_forever():
    if input.temperature() > 22:
        basic.show_string("Calor!")
    else:
        basic.show_string("Fred!")
    if input.light_level() > 200:
        music.play(music.string_playable("G B A G C5 B A B ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
    elif input.light_level() < 50:
        music.play(music.string_playable("E B C5 A B G A F ", 120),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
basic.forever(on_forever)
