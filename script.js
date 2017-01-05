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


var adj_array = [Busy, Lazy, Careless, Clumsy, Nimble, Brave, Mighty, Meek, Clever, Dull, Afraid, Scared, Cowardly, Bashful, Proud, Fair, Greedy, Wise, Foolish, Tricky, Truthful,
    Loyal, Happy, Cheerful, Joyful, Carefree, Friendly, Moody, Crabby, Cranky, Awful, Gloomy, Angry, Worried, Excited, Calm, Bored, Hardworking, Silly, Wild, Crazy, Fussy,
    Still, Odd, Starving, Stuffed, Alert, Sleepy, Surprised, Tense, Rude, Selfish, Strict, Tough, Polite, Amusing, Kind, Gentle, Quiet, Caring, Hopeful, Rich, Thrifty, Stingy,
    Spoiled, Generous, Quick, Speedy, Swift, Hasty, Rapid, Good, Fantastic, Splendid, Wonderful, Hard, Difficult, Challenging, Easy, Simple, Chilly, Freezing, Icy, Steaming,
    Sizzling, Muggy, Cozy, Huge, Great, Vast, Sturdy, Grand, Heavy, Plump, Deep, Puny, Small, Tiny, Petite, Long, Endless, Beautiful, Adorable, Shining, Sparkling, Glowing,
    Fluttering, Soaring, Crawling, Creeping, Sloppy, Messy, Slimy, Grimy, Crispy, Spiky, Rusty, Smelly, Foul, Stinky, Curly, Fuzzy, Plush, Lumpy, Wrinkly, Smooth, Glassy, Snug,
    Stiff, Ugly, Hideous, Horrid, Dreadful, Nasty, Cruel, Creepy, Loud, Shrill, Muffled, Creaky];

var noun_array = [	addenda or addendums
    aircraft	aircraft
    alumna	alumnae
    alumnus	alumni
    analysis	analyses
    antenna	antennae or antennas
    antithesis	antitheses
    apex	apices or apexes
    appendix	appendices or appendixes
    axis	axes

    bacillus	bacilli
    bacterium	bacteria
    basis	bases
    beau	beaux or beaus
    bison	bison
    bureau	bureaux or bureaus

    cactus	cacti or cactus or cactuses
    château	châteaux or châteaus
    child	children
    codex	codices
    concerto	concerti or concertos
    corpus	corpora
    crisis	crises
    criterion	criteria or criterions
    curriculum	curricula or curriculums

    datum	data
    deer	deer or deers
    diagnosis	diagnoses
    die	dice or dies
    dwarf	dwarves or dwarfs

    ellipsis	ellipses
    erratum	errata

    faux pas	faux pas
    fez	fezzes or fezes
    fish	fish or fishes
    focus	foci or focuses
    foot	feet or foot
    formula	formulae or formulas
    fungus	fungi or funguses

    genus	genera or genuses
    goose	geese
    graffito	graffiti
    grouse	grouse or grouses

    half	halves
    hoof	hooves or hoofs
    hypothesis	hypotheses

    index	indices or indexes

    larva	larvae or larvas
    libretto	libretti or librettos
    loaf	loaves
    locus	loci
    louse	lice

    man	men
    matrix	matrices or matrixes
    medium	media or mediums
    memorandum	memoranda or memorandums
    minutia	minutiae
    moose	moose
    mouse	mice

    nebula	nebulae or nebulas
    nucleus	nuclei or nucleuses

    oasis	oases
    offspring	offspring or offsprings
    opus	opera or opuses
    ovum	ova
    ox	oxen or ox
    parentheses, phenomena, phyla, prognoses, quizzes, radii, referendums, salmon, scarves, selves, series, sheep, shrimp, species, stimuli, strata, swine, syllabi, symposiums, synopses, tableaus, theses, thieves, teeth, trout, tunas, vertebras, vertexes, vitae, vortexes, wharfs, wives, wolves, women];