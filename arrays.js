const friends = ['Faizan', 'Rafey', 'Bakir']
console.log(friends)
console.log(friends[1])
console.log(friends.pop())
console.log(friends.push('Faiz'))
console.log(friends)
console.log(friends[1] = 'Zain')
console.log(friends)
// console.log(friends.splice(1,1))
// console.log(friends)
console.log(friends.length)
console.log(friends.sort())
console.log(friends.unshift('Umair'))
console.log(friends)
console.log(friends.splice(1, 0, 'Fahad', 'Mahad'))
console.log(friends)
// const list2 = friends.toSpliced(1, 0, 'Fahad', 'Mahad')
// console.log(list2)
console.log(friends.slice(4))
console.log(friends.slice(4,5))
console.log(friends.indexOf('Zain'))
console.log(friends.includes('Zain'))

for(let i=0; i<friends.length; i++){
    console.log(friends[i])
}

console.log(friends.toReversed())