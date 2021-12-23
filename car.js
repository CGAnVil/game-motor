class Motor {
    _x;
    _y;
    _width;
    _height;
    _speed;
    _src

    constructor(x, y, width, height, src, speed) {
        this._height = height
        this._src = src
        this._x = x
        this._y = y
        this._width = width
        this._speed = speed
    }

    get x() {
        return this._x
    }

    set x(x) {
        this._x = x
    }

    get y() {
        return this._y
    }

    set y(y) {
        this._y = y
    }

    get width() {
        return this._width
    }

    set width(width) {
        this._width = width
    }

    get height() {
        return this._height
    }

    set height(height) {
        this._height = height
    }

    get speed() {
        return this._speed
    }

    set speed(speed) {
        this._speed = speed
    }

    get src() {
        return this._src
    }

    set src(src) {
        this._src = src
    }

    moveRight() {
        this._x = this._x + this._speed
    }

    moveLeft() {
        this._x = this._x - this._speed
    }

    moveUp() {
        this._y = this._y - this._speed
    }

    moveDown() {
        this._y = this._y + this._speed
    }

    drawMotor(ctx) {
        let image = new Image();
        image.src = this._src;
        image.onload = () => {
            ctx.drawImage(image, this._x, this._y, this._width, this._height)
        }
    }
}