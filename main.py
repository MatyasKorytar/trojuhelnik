p = 0
x = [2, 0]
y = [4, 2]
z = [2, 4]
ž = [0, 2]
list = [x, y, z, ž]
list2 = [ž, z, y, x]
def on_button_pressed_a():
    global p
    led.plot_brightness(2, 2, 125)
    led.plot(x[0], x[1])
    led.plot(y[0], y[1])
    led.plot(z[0], z[1])
    led.plot(ž[0], ž[1])
    led.unplot(list[p][0], list[p][1])
    p += 1
    if p == 4:
        p = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global p
    led.plot_brightness(2, 2, 125)
    led.plot(x[0], x[1])
    led.plot(y[0], y[1])
    led.plot(z[0], z[1])
    led.plot(ž[0], ž[1])
    led.unplot(list2[p][0], list2[p][1])
    p += 1
    if p == 4:
        p = 0
input.on_button_pressed(Button.B, on_button_pressed_b)