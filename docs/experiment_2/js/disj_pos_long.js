/*
* File: disj_pos_long.js
* -----
* Information for putting the pages for the DP trial together.
* This is the variation in which the participant runs through the DP trial first, then the CP trial. 
*/

// DP long instructions
let dp_arr_long = [];
let dp_len_long = trialData["disjunctive_positive"]["instructions_long"].length;
for (let i = 0; i < dp_len_long; i++) {
    dp_arr_long.push(
        trialData["disjunctive_positive"]["instructions_long"][i]
    );
}

var instruction_pages_long = [];
for (var i = 0; i < dp_len_long; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_long/setup_' + i + '.jpg"></img>' +
        '<p>' + dp_arr_long[i] + '</p></div>';
    instruction_pages_long.push(slide);
}

const dp_instructions_long = {
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
dp_arr_long = [];
dp_len_long = trialData["disjunctive_positive"]["instructions_comp"].length;

for (let i = 0; i < dp_len_long; i++) {
    dp_arr_long.push({
        name: 'dp_instructions_comp_' + [i],
        prompt: trialData["disjunctive_positive"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_positive"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dp_instructions_comp_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dp_arr_long,
    on_start: function() {
        jsPsych.setProgressBar(0.125);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};



// round one
dp_arr_long = [];
dp_len_long = trialData["disjunctive_positive"]["round_one_long"].length;
for (let i = 0; i < dp_len_long; i++) {
    dp_arr_long.push(
        trialData["disjunctive_positive"]["round_one_long"][i]
    );
}

var round_one_pages_long = [];
for (var i = 0; i < dp_len_long; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_long/round_one_' + i + '.jpg"></img>' +
        '<p>' + dp_arr_long[i] + '</p></div>';
    round_one_pages_long.push(slide);
}
const dp_round_one_long = {
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
const dp_round_one_comp_q1_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please respond with whether or not the following statements are true.",
    questions: [
        {
            name: 'dp_round_one_comp_q1_0',
            prompt: trialData["disjunctive_positive"]["round_one_comp_q1"][0]["question"],
            options: trialData["disjunctive_positive"]["round_one_comp_q1"][0]["options"],
            required: true,
        },
        {
            name: 'dp_round_one_comp_q1_1',
            prompt: trialData["disjunctive_positive"]["round_one_comp_q1"][1]["question"],
            options: trialData["disjunctive_positive"]["round_one_comp_q1"][1]["options"],
            required: true,
        },
        {
            name: 'dp_round_one_comp_q1_2',
            prompt: trialData["disjunctive_positive"]["round_one_comp_q1"][2]["question"],
            options: trialData["disjunctive_positive"]["round_one_comp_q1"][2]["options"],
            required: true,
        },
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.25);
    }
};
const dp_round_one_comp_q2_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please respond with whether or not the following statements are true.",
    questions: [
        {
            name: 'dp_round_two_comp_q2_0',
            prompt: trialData["disjunctive_positive"]["round_one_comp_q2"][0]["question"],
            options: trialData["disjunctive_positive"]["round_one_comp_q2"][0]["options"],
            required: true,
        },
        {
            name: 'dp_round_two_comp_q2_1',
            prompt: trialData["disjunctive_positive"]["round_one_comp_q2"][1]["question"],
            options: trialData["disjunctive_positive"]["round_one_comp_q2"][1]["options"],
            required: true,
        },
        {
            name: 'dp_round_two_comp_q2_2',
            prompt: trialData["disjunctive_positive"]["round_one_comp_q2"][2]["question"],
            options: trialData["disjunctive_positive"]["round_one_comp_q2"][2]["options"],
            required: true,
        },
    ],
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// round two
dp_arr_long = [];
dp_len_long = trialData["disjunctive_positive"]["round_two_long"].length;
for (let i = 0; i < dp_len_long; i++) {
    dp_arr_long.push(
        trialData["disjunctive_positive"]["round_two_long"][i]
    );
}

var round_two_pages_long = [];
for (var i = 0; i < dp_len_long; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_long/round_two_' + i + '.jpg"></img>' +
        '<p>' + dp_arr_long[i] + '</p></div>';
    round_two_pages_long.push(slide);
}
const dp_round_two_long = {
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



const dp_selection_task_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "In the next round of the game, Alice gets to press one of the two buttons and make a switch 20% more likely to turn on. The other switch will turn <strong>ON</strong> or <strong>OFF</strong> based on its usual probability. Before Alice decides which button to press, you can explain why your team scored a point in the first round. <br></br>" +
        "<img class='dp_image' src='media/dp_long/explanation_selection.jpg'></img>",
    questions: [
        {
            name: 'dp_selection_task',
            prompt: trialData["disjunctive_positive"]["selection_task"]["question"],
            options: trialData["disjunctive_positive"]["selection_task"]["options"],
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

const dp_loop_node_instructions_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_instructions_long,
        dp_instructions_comp_long
    ],
    loop_function: function (data) {
        var trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dp_instructions_key = trialData["disjunctive_positive"]["dp_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(dp_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const dp_conditional_node_instructions_long = {
    timeline: [
        dp_loop_node_instructions_long
    ],
    conditional_function: function(){
        // get the data from the previous trial
        var trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const dp_instructions_key = trialData["disjunctive_positive"]["dp_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(dp_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}


const dp_loop_node_round_one_q1_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_round_one_long,
        dp_round_one_comp_q1_long,
    ],
    loop_function: function (data) {
        const participant_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dp_participant_key = trialData["disjunctive_positive"]["dp_gameplay_q1_key"];

        // if participant and teammate responses match the key, return false, do not loop
        if (!!(JSON.stringify(participant_response) === JSON.stringify(dp_participant_key))) {
            return false;
        } else {
            return true;
        }
    },
}

const dp_conditional_node_round_one_q1_long = {
    timeline: [
        dp_loop_node_round_one_q1_long
    ],
    conditional_function: function(){
        const participant_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dp_participant_key = trialData["disjunctive_positive"]["dp_gameplay_q1_key"];

        // if participant and teammate responses DO NOT match the key, return true to run the loop node
        if (!(JSON.stringify(participant_response) === JSON.stringify(dp_participant_key))) {
            return true;
        } else {
            return false;
        }
    },
}

const dp_loop_node_round_one_q2_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_round_one_long,
        dp_round_one_comp_q2_long,
    ],
    loop_function: function (data) {
        const teammate_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dp_teammate_key = trialData["disjunctive_positive"]["dp_gameplay_q2_key"];

        // if participant and teammate responses match the key, return false, do not loop
        if (!!(JSON.stringify(teammate_response) === JSON.stringify(dp_teammate_key))) {
            return false;
        } else {
            return true;
        }
    },
}

const dp_conditional_node_round_one_q2_long = {
    timeline: [
        dp_loop_node_round_one_q2_long
    ],
    conditional_function: function(){
        const teammate_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dp_teammate_key = trialData["disjunctive_positive"]["dp_gameplay_q2_key"];

        // if participant and teammate responses DO NOT match the key, return true to run the loop node
        if (!(JSON.stringify(teammate_response) === JSON.stringify(dp_teammate_key))) {
            return true;
        } else {
            return false;
        }
    },
}

const dp_intervention_task_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; max-width:900px;">` +
        "Now, imagine you were given the choice of pressing one of the buttons in order to maximize your chances of winning a point. Pressing the button will increase the probability that the connected switch will turn <strong>ON</strong>  by 20%. The other switch will turn <strong>ON</strong> or <strong>OFF</strong> based on its usual probability.<br></br>" +
        "<img class='dp_image' src='media/dp_long/intervention_task.jpg'></img>",
    questions: [
        {
            name: 'dp_intervention_task',
            prompt: trialData["disjunctive_positive"]["intervention_task"]["question"],
            options: trialData["disjunctive_positive"]["intervention_task"]["options"],
            required: true,
        },
    ],
    // on_start: function() {
    //     jsPsych.setProgressBar(0.25);
    // }
};

// extra long instructions for additional button, copied from CP long
let dp_arr_long_button = [];
let dp_len_long_button = trialData["conjunctive_positive"]["instructions_long_button"].length;
for (let i = 0; i < dp_len_long_button; i++) {
    dp_arr_long_button.push(
        trialData["conjunctive_positive"]["instructions_long_button"][i]
    );
}

var instruction_pages_long_button = [];
for (var i = 0; i < dp_len_long_button; i++) {
    let slide = '<div><img class="cp_image" src="media/cp_long/buttonsetup_' + i + '.jpg"></img>' +
        '<p>' + dp_arr_long_button[i] + '</p></div>';
    instruction_pages_long_button.push(slide);
}

const dp_instructions_long_button = {
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

const dp_long = [
    dp_instructions_long,
    dp_instructions_comp_long,
    dp_conditional_node_instructions_long,
    dp_instructions_long_button,
    dp_intervention_task_long,
    dp_round_one_long,
    dp_round_one_comp_q1_long,
    dp_conditional_node_round_one_q1_long,
    dp_round_one_comp_q2_long,
    dp_conditional_node_round_one_q2_long,
    dp_round_two_long,
    dp_selection_task_long
]