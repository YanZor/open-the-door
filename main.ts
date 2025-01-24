function servo_motor_door (angle: number) {
    pins.servoWritePin(AnalogPin.P8, angle)
}
