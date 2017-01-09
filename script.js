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
var name_array = ['Jason', 'Bill', 'Dan', 'Mike', 'Cung', 'Tammy'];
function group_order(num_of_groups){
    var up_next = [];
    var temp = null;
    for(var i = 1; i <= num_of_groups; i++){
        temp = getRandNum(1, num_of_groups);
        for(var k=1; k=1; k++){
            if(up_next[k] !== temp){
                up_next.push(temp)
            }
        }
    }
    console.log(up_next)
}
function funny_names(){
    var group_name = adj_array[getRandNum(0,adj_array.length-1)] +' '+ noun_array[getRandNum(0,noun_array.length-1)];
    console.log(group_name)
}
function pick_name(name){
    var rando_name = name[getRandNum(0,name.length-1)];
    console.log(rando_name);
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


var adj_array = [ 'Busy', 'Lazy', 'Careless', 'Clumsy', 'Nimble', 'Brave', 'Mighty', 'Meek', 'Clever', 'Dull', 'Afraid', 'Scared', 'Cowardly',
    'Bashful', 'Proud', 'Fair', 'Greedy', 'Wise', 'Foolish', 'Tricky', 'Truthful', 'Loyal', 'Happy', 'Cheerful', 'Joyful', 'Carefree', 'Friendly',
    'Moody', 'Crabby', 'Cranky', 'Awful', 'Gloomy', 'Angry', 'Worried', 'Excited', 'Calm', 'Bored', 'Hardworking', 'Silly', 'Wild', 'Crazy', 'Fussy',
    'Still', 'Odd', 'Starving', 'Stuffed', 'Alert', 'Sleepy', 'Surprised', 'Tense', 'Rude', 'Selfish', 'Strict', 'Tough', 'Polite', 'Amusing', 'Kind',
    'Gentle', 'Quiet', 'Caring', 'Hopeful', 'Rich', 'Thrifty', 'Stingy', 'Spoiled', 'Generous', 'Quick', 'Speedy', 'Swift', 'Hasty', 'Rapid',
    'Good', 'Fantastic', 'Splendid', 'Wonderful', 'Hard', 'Difficult', 'Challenging', 'Easy', 'Simple', 'Chilly', 'Freezing', 'Icy', 'Steaming',
    'Sizzling', 'Muggy', 'Cozy', 'Huge', 'Great', 'Vast', 'Sturdy', 'Grand', 'Heavy', 'Plump', 'Deep', 'Puny', 'Small', 'Tiny', 'Petite', 'Long',
    'Endless', 'Beautiful', 'Adorable', 'Shining', 'Sparkling', 'Glowing', 'Fluttering', 'Soaring', 'Crawling', 'Creeping', 'Sloppy', 'Messy',
    'Slimy', 'Grimy', 'Crispy', 'Spiky', 'Rusty', 'Smelly', 'Foul', 'Stinky', 'Curly', 'Fuzzy', 'Plush', 'Lumpy', 'Wrinkly', 'Smooth', 'Glassy',
    'Snug', 'Stiff', 'Ugly', 'Hideous', 'Horrid', 'Dreadful', 'Nasty', 'Cruel', 'Creepy', 'Loud', 'Shrill', 'Muffled', 'Creaky'];

var noun_array = [ 'Addendums', 'Aircraft', 'Alumni', 'Aalyses', 'Antennae', 'Antitheses', 'Apices', 'Appendices', 'Axes', 'Bacilli', 'Bacteria',
    'Bases', 'Bison', 'Bureaux', 'Cacti', 'Châteaux', 'Children', 'Codices', 'Concertos', 'Corpora', 'Crises', 'Deer', 'Diagnoses', 'Dice',
    'Dwarves', 'Ellipses', 'Errata', 'Fezzes', 'Fish', 'Foci', 'Feet', 'Formulas', 'Fungi', 'genera', 'geese', 'graffiti', 'grouses', 'halves',
    'hooves', 'hypotheses', 'indices', 'larvae', 'librettos', 'loaves', 'loci', 'lice', 'men', 'matrices', 'memorandums', 'moose', 'mice',
    'nebulae', 'nuclei', 'oases', 'offspring', 'ova', 'oxen', 'parentheses', 'phenomena', 'phyla', 'prognoses', 'quizzes', 'radii',
    'referendums', 'salmon', 'scarves', 'selves', 'series', 'sheep', 'shrimp', 'species', 'stimuli', 'strata', 'swine', 'syllabi',
    'symposiums', 'synopses', 'tableaus', 'theses', 'thieves', 'teeth', 'trout', 'tunas', 'vertebras', 'vertexes', 'vitae', 'vortexes',
    'wharfs', 'wives', 'wolves', 'women'];