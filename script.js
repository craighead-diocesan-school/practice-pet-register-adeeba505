let pets = [
    {name: 'Bryson', age: 7, species: 'Lamb'},
    {name: 'Frank', age: 3, species: 'Fish'},
    {name: 'Brent', age: 2, species: 'Cat'},
]
function displayPet(){
    for (let pet of pets) {
        alert(pet.name)
    }
}

function newPet() {
    let addName = prompt('What name would you like to add?')
    let addAge = prompt('How old is your pet?')
    let addSpecies = prompt('What species is your pet?')

    let pet = {
        addName: addName, 
        addAge: addAge, 
        addSpecies: addSpecies
    }
    animal.push(pet)
}

function removePet() {
    let index = prompt('Choose a number between 0 & 2')
    animal.splice(index, 1)
}