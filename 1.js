let a = [];
let m = -3;
let n = -10;
let count = 42;

for ( let i = m; i < count; ++i ) 
{
    a.push( Math.round(Math.random() * n) );
}
    console.log(a);