// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]
function  destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat(Ralph)
function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat(Bob);
function destructivelyRemoveLastCat(){
    cats.pop(name);
}
destructivelyRemoveLastCat();
function destructivelyRemoveFirstCat(){
    cats.shift(name);
}
destructivelyRemoveFirstCat();
function  appendCat(name){
    return[...cats, name]
}
function prependCat(name){
    return[name,...cats]
}
function removeLastCat(){
    return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}