let roadMines = [true, false, false, false, false, false, false, false, false, true];
let dm = false
let i = 0
let  x = 0

while  ( i < roadMines.length) {
    if (roadMines[i]) { 
        if (dm) { 
            console.log('танк уничтожен');
            break;
        }
        else {
            dm = true; 
            console.log('танк поврежден');
        }
    } 
    else {
        console.log(`танк переместился на позицию ${i+1}`);
    }
    ++i
}