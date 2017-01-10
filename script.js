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

$(document).ready(function(){
    $('.addStudentBtn').click(addStudent);
    buildStudentsInCohort(c11_16Arr, '#c1116studentList');
    buildStudentsInCohort(c1_17Arr, '#c117studentList');

});

// CREATES COHORTS
// Input field that creates an array - cohort
// Ability to add students to an array

function Student (name, leader){
    this.name = name;
    this.leader = leader;
}

var c11_16Arr = [
    {name: 'Brian', leader: true},
    {name: 'Cung', leader: false},
    {name: 'Jason', leader: true},
    {name: 'Mike', leader: false},
    {name: 'Miles', leader: false},
    {name: 'Sean D.', leader: false},
    {name: 'Sean G.', leader: true},
    {name: 'Sloan', leader: true},
    {name: 'Tammy', leader: true},
    {name: 'Patrick', leader: false}
];

var c1_17Arr = [
    {name: 'Andy', leader: false},
    {name: 'Brock', leader: false},
    {name: 'Charles', leader: false},
    {name: 'Daniel', leader: false},
    {name: 'Darin', leader: false},
    {name: 'Derrick', leader: false},
    {name: 'Gwenever', leader: false},
    {name: 'John', leader: false},
    {name: 'Jorge', leader: false},
    {name: 'Ken', leader: false},
    {name: 'Mark', leader: false},
    {name: 'Michael', leader: false},
    {name: 'Tim', leader: false}
];

function addStudent(){
    var studentName = $('#c1116addStudentInput').val();
    var leaderCheck = $('#c1116leaderCheckbox').prop('checked');
    var thisStudent = new Student(studentName, leaderCheck);

    c11_16Arr.push(thisStudent);

    c11_16Arr.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1
        if (nameA > nameB)
            return 1
        return 0 //default return value (no sorting)
    })


    $('#c1116studentList').html('');
    buildStudentsInCohort(c11_16Arr, '#c1116studentList');
    $('#c1116addStudentInput').val('');
    $('#c1116leaderCheckbox').prop('checked', false);
}


// function the builds student list in Dom from studentArr
function buildStudentsInCohort(array, appendTarget){
    var nameSpan;
    for(var i = 0; i < array.length; i++){

        if(array[i].leader){
            nameSpan = $('<span>', {
                class: "label label-student label-primary",
                text:array[i].name
            });
        } else {
            nameSpan = $('<span>', {
                class: "label label-student label-default",
                text:array[i].name
            });
        }

        var deleteIcon = $('<span>', {
            class: "glyphicon glyphicon-remove-circle"
        });

        $(deleteIcon).click(removeStudent);
        nameSpan.append('\n', deleteIcon);
        $(appendTarget).append(nameSpan, '\n');
    }
}

function removeStudent(){
    $(this).parent().remove()
}

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