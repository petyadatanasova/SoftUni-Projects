class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        return Math.sqrt((p2.x-p1.x)**2+(p2.y-p1.y)**2);
    }
}
//d=√((x_2-x_1)²+(y_2-y_1)²) 
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));