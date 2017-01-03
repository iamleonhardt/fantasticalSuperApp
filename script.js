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


