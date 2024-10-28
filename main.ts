basic.forever(function on_forever() {
    if (input.temperature() > 22) {
        basic.showString("Calor!")
    } else {
        basic.showString("Fred!")
    }
    
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)
    } else if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
    }
    
})
