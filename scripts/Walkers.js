//importing Walkers from database.js

import { getWalkers } from "./database.js"
import { getWalkerCities} from "./database.js"
import { getCities} from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()




// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (assignment) => {
    // Define an empty array to store all of the assignment objects
    const assignmentArray = []
    // Iterate the array value of walkerCities
    for (assignment of walkerCities) {
    // Check if the primary key of the walker equals the foreign key on the assignment
        if (walkerObject.id === assignment.walkerId) {
    // If it does, add the current object to the array of assignments
            assignmentArray.push(assignment)
    // After the loop is done, return the assignments array
        }
    }
    return assignmentArray
}

// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = () => {
    // Define an empty string that will get appended with matching cities
    let assignedCities = ""
    // Iterate the array of assignment objects
    for (const assignment of assignmentArray) {
    // For each assignment, iterate the cities array to find the match
        for (city of cities) {
            if (city.id ===assignmentArray.cityId) {
                if (assignedCities === ""){
                    assignedCities += `${city.name}`
                }
                // Add the name of the matching city to the array of city names
                else {assignedCities += `and ${city.name}`}
            }
        }

        
    }
    // After the loop is done, return the string
    return assignedCities
}








//creating and exporting "walkers" function 
export const Walkers = () => {

    //creating variable to home unordered list in HTML
    let walkerHTML = "<ul>"
    //iterating through the array of walkers
    for (const walker of walkers) {
    // adding the walker name to the ul in the HTML 
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    //closing ul
    walkerHTML += "</ul>"
    //return walkerHTML to invoke the "Walkers" function in HTML
    return walkerHTML

}

