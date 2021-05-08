while True:
    print("Temperature" + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 90:
        light.set_all(color.rgb(132,132,132))
        music.set_volume(15)
        music.play_melody("C     D     F     D     C     D", 35)
    else:
        light.clear()
        music.stop_all_sounds()