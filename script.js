/**
 * Returns a random integer between minNum (inclusive) and maxNum (inclusive)
 *
 * @param minNum
 * @param maxNum
 * @returns {number}
 */

function getRandNum (minNum, maxNum){
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum );
}

// CREATES COHORTS
// Input field that creates an array - cohort
// Ability to add students to an array


// Assign groups for team projects and SAs
// Randomly splits students from array into selected amount of groups
// Creates divs per group
// Can drag drop students to groups
// Keeps history of chosen groups?


// Q&A
// Chooses group order
// Chooses random funny name for groups
// Chooses which student is called on for question
function group_order(num_of_groups){
    var up_next = [];
    var temp = null;
    for(var i = 1; i <= num_of_groups; i++){
        temp = (Math.floor(Math.random()*(num_of_groups - 1) + 1));
        for(var k=1; k=1; k++){
            if(up_next[k] !== temp){
                up_next.push(temp)
            }
        }
    }
    console.log(up_next)
}

// Random Volunteer
// Chooses a random student
// Can un-check which students it rolls


// Random Whiteboard
// 1-6
// Displays instructions



// Drunk cards
// Pulls random card



// Sound effect buttons
// Ding
// Buzz


