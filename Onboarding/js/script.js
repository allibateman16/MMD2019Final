const background = document.getElementById('bg');
const next = document.querySelector(".arrow");
const bottom = document.getElementById("bottom");

// Stickers
const keaStickerLecture = document.getElementById("kea-sticker-lecture");
const keaStickerBoard = document.getElementById("kea-sticker-board");
const keaStickerDraw = document.getElementById("kea-sticker-draw");
const keaStickerCode = document.getElementById("kea-sticker-code");
const keaStickerMember = document.getElementById("kea-sticker-member");


// Sounds
const talkingSounds = document.getElementById("talking-sounds");
const paperSounds = document.getElementById("paper-sounds");
const mouseSounds = document.getElementById("mouse-sounds");
const keyboardSounds = document.getElementById("keyboard-sounds");
const skeyboardSounds = document.getElementById("skeyboard-sounds");
const clapSounds = document.getElementById("clap-sounds");
const stickerSounds = document.getElementById("sticker-sounds");
const endingSounds = document.getElementById("ending-sounds");
const fireworkSounds = document.getElementById("fireworks-sounds");


// Bottom

const bot = document.getElementById("bottom");
const dayOne = document.getElementById("day-one");
const dayTwo = document.getElementById("day-two");
const dayThree = document.getElementById("day-three");
const dayFour = document.getElementById("day-four");
const dayFive = document.getElementById("day-five");
const lectureBottom = document.getElementById("lecture-bottom");
const groupsBottom = document.getElementById("groups-bottom");
const rolesBottom = document.getElementById("roles-bottom");
const workBottom = document.getElementById("work-bottom");
const feedbackBottom = document.getElementById("feedback-bottom");
const submitBottom = document.getElementById("submit-bottom");
const presentationBottom = document.getElementById("presentation-bottom");
const approvedBottom = document.getElementById("approved-bottom");

// Calendar

const mon = document.getElementById("mon");
const tues = document.getElementById("tues");
const wed = document.getElementById("wed");
const thur = document.getElementById("thur");
const fri = document.getElementById("fri");

// Lecture

const lecture1 = document.getElementById("teacher1");
const lecture2 = document.getElementById("teacher2");
const lecture3 = document.getElementById("teacher3");
const schedule = document.getElementById("schedule");

// Pick a group

const hat = document.getElementById("hat");

// Pick a role

const board = document.getElementById("board");
const facilitator = document.getElementById("facilitator");
const decider = document.getElementById("decider");
const teamworker = document.getElementById("teamworker");

// Pick work

const code = document.getElementById("coding");
const design = document.getElementById("designing");
const draw = document.getElementById("drawing");
const lines = document.querySelectorAll(".drawing-line");
const write = document.getElementById("writing");

// Feedback

const member1 = document.getElementById("member1");
const member2 = document.getElementById("member2");
const member3 = document.getElementById("member3");
const member4 = document.getElementById("member4");
const feedback1 = document.getElementById("feedback1");
const feedback2 = document.getElementById("feedback2");
const feedback3 = document.getElementById("feedback3");
const feedback4 = document.getElementById("feedback4");

// Submit
const submitBtn = document.getElementById("submit")

// Presentation
const present = document.getElementById("present");

// Approved
const bell = document.getElementById("bell");
const approved = document.getElementById("approved")

// Ending
const ending = document.getElementById("ending");
const badgebg = document.getElementById("badgebg");

next.addEventListener("click", addMon);

function addMon(e) {
    background.classList.add("animation");
    bottom.classList.add("bottom");
    dayOne.classList.remove("dn");
    background.classList.remove("tutorial");
    background.classList.add("fade");
    mon.classList.remove("dn");
    mon.classList.add("mon");
    next.removeEventListener("click", addMon);
    next.addEventListener("click", addLecture);
}

function addLecture(e) {
    background.classList.remove("animation")
    schedule.classList.remove("dn");
    schedule.classList.add("schedule");
    mon.remove();
    background.classList.remove("fade");
    talkingSounds.play();
    background.classList.add("lecture");
    dayOne.remove();
    lectureBottom.classList.remove("dn");
    next.removeEventListener("click", addLecture);
    next.addEventListener("click", addLectureTalk);
}

// Lecture

function addLectureTalk(e) {
    lecture1.classList.remove("dn");
    lecture1.classList.add("lecture-talk1", "animation");
    next.removeEventListener("click", addLectureTalk);
    next.addEventListener("click", addLectureTalkTwo);
}

function addLectureTalkTwo(e) {
    lecture2.classList.remove("dn");
    lecture2.classList.add("lecture-talk2", "animation");
    next.removeEventListener("click", addLectureTalkTwo);
    next.addEventListener("click", addLectureTalkThree);
}

function addLectureTalkThree(e) {
    lecture3.classList.remove("dn");
    lecture3.classList.add("lecture-talk3", "animation");
    next.removeEventListener("click", addLectureTalkThree);
    next.addEventListener("click", addTues);
}

function addTues(e) {
    schedule.remove();
    talkingSounds.pause();
    lecture1.remove();
    lecture2.remove();
    lecture3.remove();
    lectureBottom.remove();
    dayTwo.classList.remove("dn");
    background.classList.remove("lecture");
    background.classList.add("fade", "animation");
    tues.classList.remove("dn");
    tues.classList.add("tues");
    next.removeEventListener("click", addTues);
    next.addEventListener("click", addPickGroups);
}

// Pick a group

function addPickGroups(e) {
    next.classList.add("dn");
    background.classList.remove("fade", "animation");
    background.classList.add("white");
    tues.remove();
    dayTwo.remove();
    groupsBottom.classList.remove("dn");
    hat.classList.remove("dn");
    hat.classList.add("hat");
    next.removeEventListener("click", addPickGroups);
    hat.addEventListener("click", addAnimation);
}

function addAnimation(e) {
    next.classList.remove("dn");
    paperSounds.play();
    hat.classList.add("hat-animation");
    hat.removeEventListener("click", addAnimation);
    next.addEventListener("click", addPickRole);
}

// Pick a role

function addPickRole(e) {
    next.classList.add("dn");
    hat.remove();
    groupsBottom.remove();
    board.classList.remove("dn");
    board.classList.add("board");
    rolesBottom.classList.remove("dn");
    next.removeEventListener("click", addPickRole);
    facilitator.addEventListener("click", addHighlight);
    decider.addEventListener("click", addHighlight);
    teamworker.addEventListener("click", addHighlight);
    facilitator.addEventListener("click", addActiveF);
    decider.addEventListener("click", addActiveD);
    teamworker.addEventListener("click", addActiveT);
}

function addActiveF(e) {
    facilitator.classList.toggle("facilitatorActive");
    decider.classList.remove("deciderActive");
    teamworker.classList.remove("teamworkerActive");
}

function addActiveD(e) {
    decider.classList.toggle("deciderActive");
    facilitator.classList.remove("facilitatorActive");
    teamworker.classList.remove("teamworkerActive");
}

function addActiveT(e) {
    teamworker.classList.toggle("teamworkerActive");
    decider.classList.remove("deciderActive");
    facilitator.classList.remove("facilitatorActive");
}

function addHighlight(e) {
    next.classList.remove("dn");
    next.addEventListener("click", addWed);
}

function addWed(e) {
    board.remove();
    rolesBottom.remove();
    background.classList.remove("white");
    facilitator.remove();
    decider.remove();
    teamworker.remove();
    background.classList.add("fade", "animation");
    dayThree.classList.remove("dn");
    wed.classList.remove("dn");
    wed.classList.add("wed");
    next.addEventListener("click", addWork);
}

// Pick work

function addWork(e) {
    wed.remove();
    dayThree.remove();
    next.classList.add("dn");
    background.classList.add("work");
    background.classList.remove("fade", "animation")
    workBottom.classList.remove("dn");
    code.classList.remove("dn");
    design.classList.remove("dn");
    code.classList.add("choice1");
    design.classList.add("choice2");
    design.addEventListener("click", addDesign);
    code.addEventListener("click", addCode);
    next.removeEventListener("click", addWork);
}

// Coding
function addCode(e) {
    keyboardSounds.play();
    next.classList.remove("dn");
    background.classList.remove("work");
    background.classList.add("white");
    background.classList.add("computer-code");
    code.remove();
    design.remove();
    workBottom.remove();
    write.classList.remove("dn");
    write.classList.add("code-writing");
    next.addEventListener("click", addThur);
}

// Designing

function addDesign(e) {
    next.classList.remove("dn");
    background.classList.remove("work");
    background.classList.add("white");
    background.classList.add("computer-design");
    code.remove();
    design.remove();
    workBottom.remove();
    draw.classList.remove("dn");
    draw.classList.add("drawing");
    lines.forEach(drawThis);

    function drawThis(line, i) {
        setTimeout(function(i) {
            line.classList.add("drawing-draw");
        }, i * 1000);
    }
    next.addEventListener("click", addThur);
}

function addThur(e) {
    keyboardSounds.pause();
    next.classList.remove("dn");
    background.classList.remove("work");
    draw.remove();
    write.remove();
    background.classList.remove("computer-design");
    background.classList.remove("computer-code");
    background.classList.remove("white");
    background.classList.add("fade", "animation");
    dayFour.classList.remove("dn");
    thur.classList.remove("dn");
    thur.classList.add("thur");
    next.removeEventListener("click", addThur);
    next.addEventListener("click", addTeamwork);
}

// Feedback

function addTeamwork(e) {
    keaStickerMember.classList.remove("dn");
    keaStickerMember.classList.add("kea-member");
    talkingSounds.play();
    skeyboardSounds.play();
    thur.remove();
    dayFour.remove();
    next.classList.remove("dn");
    background.classList.remove("work");
    background.classList.remove("fade", "animation");
    background.classList.add("team");
    member1.classList.remove("dn");
    member2.classList.remove("dn");
    member3.classList.remove("dn");
    member4.classList.remove("dn");
    member1.classList.add("member1");
    member2.classList.add("member2");
    member3.classList.add("member3");
    member4.classList.add("member4");
    feedbackBottom.classList.remove("dn");
    member1.addEventListener("click", addFeedbackOne);
    member2.addEventListener("click", addFeedbackTwo);
    member3.addEventListener("click", addFeedbackThree);
    member4.addEventListener("click", addFeedbackFour);
    next.removeEventListener("click", addTeamwork);
    next.addEventListener("click", addSubmit);
}

function addFeedbackOne(e) {
    feedback1.classList.remove("dn");
    feedback1.classList.add("feedback1");
    member1.removeEventListener("click", addFeedbackOne);
}

function addFeedbackTwo(e) {
    feedback2.classList.remove("dn");
    feedback2.classList.add("feedback2");
    member2.removeEventListener("click", addFeedbackTwo);
}

function addFeedbackThree(e) {
    feedback3.classList.remove("dn");
    feedback3.classList.add("feedback3");
    member3.removeEventListener("click", addFeedbackThree);
}

function addFeedbackFour(e) {
    feedback4.classList.remove("dn");
    feedback4.classList.add("feedback4");
    member4.removeEventListener("click", addFeedbackFour);
}

// Submit

function addSubmit(e) {
    next.classList.add("dn");
    keaStickerMember.classList.add("dn");
    keaStickerMember.classList.remove("kea-member");
    talkingSounds.pause();
    skeyboardSounds.pause();
    background.classList.remove("team");
    background.classList.remove("work");
    background.classList.add("submit");
    feedbackBottom.remove();
    member1.remove();
    member2.remove();
    member3.remove();
    member4.remove();
    feedback1.remove();
    feedback2.remove();
    feedback3.remove();
    feedback4.remove();
    submitBottom.classList.remove("dn");
    submitBtn.classList.remove("dn");
    submitBtn.classList.add("submit-btn");
    next.removeEventListener("click", addSubmit);
    submitBtn.addEventListener("click", addFri);
}

function addFri(e) {
    mouseSounds.play();
    next.classList.remove("dn");
    dayFive.classList.remove("dn");
    fri.classList.remove("dn");
    fri.classList.add("fri");
    background.classList.remove("submit");
    background.classList.add("fade", "animation");
    submitBtn.remove();
    submitBottom.remove();
    next.addEventListener("click", addPresentation);
}

// Presentation

function addPresentation(e) {
    talkingSounds.play();
    clapSounds.play();
    dayFive.remove();
    fri.remove();
    next.classList.remove("dn");
    background.classList.remove("fade", "animation");
    background.classList.remove("work");
    background.classList.add("presenting");
    presentationBottom.classList.remove("dn");
    present.classList.remove("dn");
    present.classList.add("present");
    next.removeEventListener("click", addPresentation);
    next.addEventListener("click", addFronter);
}

// Approved

function addFronter(e) {
    next.classList.add("dn");
    talkingSounds.pause();
    clapSounds.pause();
    background.classList.remove("presenting");
    presentationBottom.remove();
    present.remove();
    background.classList.add("fronter");
    approvedBottom.classList.remove("dn");
    bell.classList.remove("dn");
    bell.classList.add("bell");
    bell.addEventListener("click", addApproved);
    next.removeEventListener("click", addFronter);
}

function addApproved(e) {
    next.classList.remove("dn");
    fireworkSounds.play();
    next.classList.remove("dn");
    approved.classList.remove("dn");
    approved.classList.add("approved");
    next.addEventListener("click", addEnding);
}

// Ending

function addEnding(e) {
    fireworkSounds.pause();
    endingSounds.play();
    badgebg.classList.remove("dn");
    badgebg.classList.add("badgebg");
    bot.remove();
    bell.remove();
    approved.remove();
    background.classList.remove("fronter");
    background.classList.remove("work");
    ending.classList.remove("dn");
}

let calc = 0;

function addCalc() {
    calc = calc + 1;
    document.querySelector('.result').innerHTML = calc;
}

keaStickerLecture.addEventListener("click", addDelete);
keaStickerBoard.addEventListener("click", addDelete);
keaStickerDraw.addEventListener("click", addDelete);
keaStickerCode.addEventListener("click", addDelete);
keaStickerMember.addEventListener("click", addDelete);

function addDelete() {
    this.classList.add("animation2");
    this.classList.add("kea-cursor");
    if (stickerSounds.paused) {
        stickerSounds.play();
    } else {
        stickerSounds.currentTime = 0
    }
}
