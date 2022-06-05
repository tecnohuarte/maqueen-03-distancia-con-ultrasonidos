let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(distancia)
})
