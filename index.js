//refactorUsingAfunction
function newImage(url, left, bottom){
    let object = document.createElement('img', `gif`)
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
//url, left, bottom? Where does it come from need further clarfication?

//5.addAitem
function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
    object.remove()
    })
}

//2.AddApineTree+greenCharacter
newImage(`assets/green-character.gif`, 100, 100)
newImage(`assets/pine-tree.png`, 450, 200)

//4.addMoreimages
newImage(`assets/tree.png`, 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//6.addMoreitems
newItem('assets/sword.png', 500, 405)
newItem(`assets/sheild.png`, 165, 185)
newItem(`assets/staff.png`, 600, 100)

//7.updateThenewItemfunction


