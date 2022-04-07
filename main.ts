let p = 0
let x = [2, 0]
let y = [4, 2]
let z = [2, 4]
let ž = [0, 2]
let list = [x, y, z, ž]
let list2 = [ž, z, y, x]
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    led.plotBrightness(2, 2, 125)
    led.plot(x[0], x[1])
    led.plot(y[0], y[1])
    led.plot(z[0], z[1])
    led.plot(ž[0], ž[1])
    led.unplot(list[p][0], list[p][1])
    p += 1
    if (p == 4) {
        p = 0
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    led.plotBrightness(2, 2, 125)
    led.plot(x[0], x[1])
    led.plot(y[0], y[1])
    led.plot(z[0], z[1])
    led.plot(ž[0], ž[1])
    led.unplot(list2[p][0], list2[p][1])
    p += 1
    if (p == 4) {
        p = 0
    }
    
})
