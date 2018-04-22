
const func1 = (i) => {
    console.log(`Func1(${i})`)
    if(i < 10) {
        const nextCall = () => func1(i+1)
        setTimeout(nextCall, 1000)
    } else {
        console.log('Func1 reached end')
    }
}

console.log('calling func1')
func1(1)
console.log('called func1')
