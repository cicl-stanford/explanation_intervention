/*
* File: conj_neg_long.js
* -----
* Information for putting the pages for the CN trial together.
* This is the variation in which the participant runs through the CN trial first, then the DN trial. 
*/

// CN long instructions
let cn_arr_long = [];
let cn_len_long = trialData["conjunctive_negative"]["instructions_long"].length;
for (let i = 0; i < cn_len_long; i++) {
    cn_arr_long.push(
        trialData["conjunctive_negative"]["instructions_long"][i]
    );
}

var instruction_pages_long = [];
for (var i = 0; i < cn_len_long; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_long/setup_' + i + '.jpg"></img>' +
        '<p>' + cn_arr_long[i] + '</p></div>';
    instruction_pages_long.push(slide);
}

const cn_instructions_long = {
    type: jsPsychInstructions,
    pages: instruction_pages_long,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.0625);
    },
    on_finish: function() { 
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// setup comprehension checks
cn_arr_long = [];
cn_len_long = trialData["conjunctive_negative"]["instructions_comp"].length;

for (let i = 0; i < cn_len_long; i++) {
    cn_arr_long.push({
        name: 'cn_instructions_comp_' + [i],
        prompt: trialData["conjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["conjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const cn_instructions_comp_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: cn_arr_long,
    on_start: function() {
        jsPsych.setProgressBar(0.125);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};



// round one
cn_arr_long = [];
cn_len_long = trialData["conjunctive_negative"]["round_one_long"].length;
for (let i = 0; i < cn_len_long; i++) {
    cn_arr_long.push(
        trialData["conjunctive_negative"]["round_one_long"][i]
    );
}

var round_one_pages_long = [];
for (var i = 0; i < cn_len_long; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_long/round_one_' + i + '.jpg"></img>' +
        '<p>' + cn_arr_long[i] + '</p></div>';
    round_one_pages_long.push(slide);
}
const cn_round_one_long = {
    type: jsPsychInstructions,
    pages: round_one_pages_long,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.1875);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// round one comprehension checks
const cn_round_one_comp_q1_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please respond with whether or not the following statements are true.",
    questions: [
        {
            name: 'cn_round_one_comp_q1_0',
            prompt: trialData["conjunctive_negative"]["round_one_comp_q1"][0]["question"],
            options: trialData["conjunctive_negative"]["round_one_comp_q1"][0]["options"],
            required: true,
        },
        {
            name: 'cn_round_one_comp_q1_1',
            prompt: trialData["conjunctive_negative"]["round_one_comp_q1"][1]["question"],
            options: trialData["conjunctive_negative"]["round_one_comp_q1"][1]["options"],
            required: true,
        },
        {
            name: 'cn_round_one_comp_q1_2',
            prompt: trialData["conjunctive_negative"]["round_one_comp_q1"][2]["question"],
            options: trialData["conjunctive_negative"]["round_one_comp_q1"][2]["options"],
            required: true,
        },
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.25);
    }
};
const cn_round_one_comp_q2_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please respond with whether or not the following statements are true.",
    questions: [
        {
            name: 'cn_round_two_comp_q2_0',
            prompt: trialData["conjunctive_negative"]["round_one_comp_q2"][0]["question"],
            options: trialData["conjunctive_negative"]["round_one_comp_q2"][0]["options"],
            required: true,
        },
        {
            name: 'cn_round_two_comp_q2_1',
            prompt: trialData["conjunctive_negative"]["round_one_comp_q2"][1]["question"],
            options: trialData["conjunctive_negative"]["round_one_comp_q2"][1]["options"],
            required: true,
        },
        {
            name: 'cn_round_two_comp_q2_2',
            prompt: trialData["conjunctive_negative"]["round_one_comp_q2"][2]["question"],
            options: trialData["conjunctive_negative"]["round_one_comp_q2"][2]["options"],
            required: true,
        },
    ],
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// round two
cn_arr_long = [];
cn_len_long = trialData["conjunctive_negative"]["round_two_long"].length;
for (let i = 0; i < cn_len_long; i++) {
    cn_arr_long.push(
        trialData["conjunctive_negative"]["round_two_long"][i]
    );
}

var round_two_pages_long = [];
for (var i = 0; i < cn_len_long; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_long/round_two_' + i + '.jpg"></img>' +
        '<p>' + cn_arr_long[i] + '</p></div>';
    round_two_pages_long.push(slide);
}
const cn_round_two_long = {
    type: jsPsychInstructions,
    pages: round_two_pages_long,
    show_clickable_nav: true,
    on_start: function () {
        jsPsych.setProgressBar(0.3125);
    },
    on_finish: function () {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};



const cn_selection_task_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "In the next round of the game, Zarah gets to press one of the two buttons and make a switch 10% likely to turn on. The other switch will turn <strong>ON</strong> or <strong>OFF</strong> based on its usual probability. Before Zarah decides which button to press, you can explain why your team lost a point in the first round.<br></br>" +
        "<img class='cn_image' src='media/cn_long/explanation_selection.jpg'></img>",
    questions: [
        {
            name: 'cn_selection_task',
            prompt: trialData["conjunctive_negative"]["selection_task"]["question"],
            options: trialData["conjunctive_negative"]["selection_task"]["options"],
            required: true,
        },
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.375);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};

const cn_loop_node_instructions_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_instructions_long,
        cn_instructions_comp_long
    ],
    loop_function: function (data) {
        var trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cn_instructions_key = trialData["conjunctive_negative"]["cn_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(cn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const cn_conditional_node_instructions_long = {
    timeline: [
        cn_loop_node_instructions_long
    ],
    conditional_function: function(){
        // get the data from the previous trial
        var trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const cn_instructions_key = trialData["conjunctive_negative"]["cn_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(cn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}


const cn_loop_node_round_one_q1_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_round_one_long,
        cn_round_one_comp_q1_long,
    ],
    loop_function: function (data) {
        const participant_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cn_participant_key = trialData["conjunctive_negative"]["cn_gameplay_q1_key"];

        // if participant and teammate responses match the key, return false, do not loop
        if (!!(JSON.stringify(participant_response) === JSON.stringify(cn_participant_key))) {
            return false;
        } else {
            return true;
        }
    },
}

const cn_conditional_node_round_one_q1_long = {
    timeline: [
        cn_loop_node_round_one_q1_long
    ],
    conditional_function: function(){
        const participant_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cn_participant_key = trialData["conjunctive_negative"]["cn_gameplay_q1_key"];

        // if participant and teammate responses DO NOT match the key, return true to run the loop node
        if (!(JSON.stringify(participant_response) === JSON.stringify(cn_participant_key))) {
            return true;
        } else {
            return false;
        }
    },
}

const cn_loop_node_round_one_q2_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_round_one_long,
        cn_round_one_comp_q2_long,
    ],
    loop_function: function (data) {
        const teammate_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cn_teammate_key = trialData["conjunctive_negative"]["cn_gameplay_q2_key"];

        // if participant and teammate responses match the key, return false, do not loop
        if (!!(JSON.stringify(teammate_response) === JSON.stringify(cn_teammate_key))) {
            return false;
        } else {
            return true;
        }
    },
}

const cn_conditional_node_round_one_q2_long = {
    timeline: [
        cn_loop_node_round_one_q2_long
    ],
    conditional_function: function(){
        const teammate_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cn_teammate_key = trialData["conjunctive_negative"]["cn_gameplay_q2_key"];

        // if participant and teammate responses DO NOT match the key, return true to run the loop node
        if (!(JSON.stringify(teammate_response) === JSON.stringify(cn_teammate_key))) {
            return true;
        } else {
            return false;
        }
    },
}

const cn_intervention_task_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "Now, imagine you were given the choice of pressing one of the buttons in order to maximize your chances of avoiding losing a point. Pressing the button will decrease the probability that the connected switch will turn <strong>ON</strong> to 10%. The other switch will turn <strong>ON</strong> or <strong>OFF</strong> based on its usual probability. <br></br>" +
        "<img class='cp_image' src='media/cn_long/intervention_task.jpg'></img>",
    questions: [
        {
            name: 'cn_intervention_task',
            prompt: trialData["conjunctive_negative"]["intervention_task"]["question"],
            options: trialData["conjunctive_negative"]["intervention_task"]["options"],
            required: true,
        },
    ],
    // on_start: function() {
    //     jsPsych.setProgressBar(0.25);
    // }
};
// CN extra long instructions for additional button
let cn_arr_long_button = [];
let cn_len_long_button = trialData["conjunctive_negative"]["instructions_long_button"].length;
for (let i = 0; i < cn_len_long_button; i++) {
    cn_arr_long_button.push(
        trialData["conjunctive_negative"]["instructions_long_button"][i]
    );
}

var instruction_pages_long_button = [];
for (var i = 0; i < cn_len_long_button; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_long/buttonsetup_' + i + '.jpg"></img>' +
        '<p>' + cn_arr_long_button[i] + '</p></div>';
    instruction_pages_long_button.push(slide);
}

const cn_instructions_long_button = {
    type: jsPsychInstructions,
    pages: instruction_pages_long_button,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.0625);
    },
    on_finish: function() { 
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};

const cn_long = [
    cn_instructions_long,
    cn_instructions_comp_long,
    cn_conditional_node_instructions_long,
    cn_instructions_long_button,
    cn_intervention_task_long,
    cn_round_one_long,
    cn_round_one_comp_q1_long,
    cn_conditional_node_round_one_q1_long,
    cn_round_one_comp_q2_long,
    cn_conditional_node_round_one_q2_long,
    cn_round_two_long,
    cn_selection_task_long
]