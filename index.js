//3.refactorUsingAfunction
function newImage(url, left, bottom){
}

//Copy and paste the code for creating the character into the function body.
//Identify which parts of the code changed when you created the pine tree. 
//Replace those parts of the code in your function with parameters.
//Delete the code creating the character outside your function. 
//In its place, invoke newImage, passing the appropriate arguments.
//Delete the code creating the pine tree outside your function. 
//In its place, invoke newImage, passing the appropriate arguments.

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

//2.AddApineTree
let pineTree = document.createElement(`img`)
pineTree.src = `assets/pine-tree.png`
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

//3.refactorUsingAfunction
//url, left, bottom? Where does it come from?


//4.addMoreimages
//function newImage(url, left, bottom){
//}

let tree = document.createElement('img')
tree.src = 'assets/tree.png'
tree.style.position = 'fixed'
tree.style.left = '200px'
tree.style.bottom = '300px'
document.body.append(tree)

let pillar = document.createElement('img')
pillar.src = 'assets/pillar.png'
pillar.style.position = 'fixed'
pillar.style.left = '350px'
pillar.style.bottom = '100px'
document.body.append(pillar)

let crate = document.createElement('img')
crate.src = 'assets/crate.png'
crate.style.position = 'fixed'
crate.style.left = '150px'
crate.style.bottom = '200px'
document.body.append(crate)

let well = document.createElement('img')
well.src = 'assets/well.png'
well.style.position = 'fixed'
well.style.left = '500px'
well.style.bottom = '425px'
document.body.append(well)

//5.addAitem
let sword = document.createElement(`img`)
sword.src = `assets/sword.png`
sword.position = `fixed`
sword.left = `500px`
sword.bottom = `405px`
document.body.append (sword)
sword.addEventListener (`dbclick`, function(){sword.remove()
})

//function newItem(){
//}

//6.addMoreitems
let shield = document.createElement('img')
shield.src = 'assets/shield.png'
shield.style.position = 'fixed'
shield.style.left = '165px'
shield.style.bottom = '185px'
document.body.append(shield)

let staff = document.createElement('img')
staff.src = 'assets/staff.png'
staff.style.position = 'fixed'
staff.style.left = '600px'
staff.style.bottom = '100px'
document.body.append(staff)

//7.updateThenewItemfunction


