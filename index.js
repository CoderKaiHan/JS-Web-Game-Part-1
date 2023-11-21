function newImage(src, position , left, bottom){
    let image = document.createElement('img')
    image.src = src
    image.style.position = position
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)

    return image
}

function newItem(src, position, left, bottom){
    let newItemImage = newImage(src, position , left, bottom)

    newItemImage.addEventListener('dblclick', function(){
        newItemImage.remove()
    })
}

function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)
document.querySelectorAll('*').forEach(function(element){
    element.style.margin = '0'
})

newImage('/assets/green-character.gif', 'fixed', '100px', '100px')
newImage('/assets/pine-tree.png', 'fixed', '450px', '200px')
newImage('/assets/tree.png','fixed', '200px', '300px')
newImage('assets/pillar.png', 'fixed', '350px', '100px')
newImage('assets/crate.png', 'fixed', '150px', '200px')
newImage('assets/well.png','fixed', '500px', '425px')


newItem('/assets/sword.png', 'fixed', '500px', '405px')
newItem('/assets/shield.png', 'fixed', '165px', '185px')
newItem('/assets/staff.png','fixed', '600px','100px')