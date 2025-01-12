interface Point {
    x: number;
    y: number;
    z: number;
}

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
    console.log("The coordinate's z value is " + pt.z);
}

printCoord({ x: 3, y: 7, z: 1 });