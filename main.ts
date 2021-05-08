while (true) {
    console.log("Temperature" + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 90) {
        light.setAll(color.rgb(132, 132, 132))
        music.setVolume(15)
        music.playMelody("C     D     F     D     C     D", 35)
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
