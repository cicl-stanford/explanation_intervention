/*
* File: disj_pos_short.js
* -----
* Information for putting the pages for the DP trial together.
* This is the variation in which the participant runs through the CP trial first, then the DP trial. 
*/

// DP short instructions
let dp_arr_short = [];
let dp_len_short = trialData["disjunctive_positive"]["instructions_short"].length;
for (let i = 0; i < dp_len_short; i++) {
    dp_arr_short.push(
        trialData["disjunctive_positive"]["instructions_short"][i]
    );
}

var instruction_pages_short = [];
for (var i = 0; i < dp_len_short; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_short/setup_' + i + '.png"></img>' +
        '<p>' + dp_arr_short[i] + '</p></div>';
    instruction_pages_short.push(slide);
}

const dp_instructions_short = {
    type: jsPsychInstructions,
    pages: instruction_pages_short,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.4375);
    },
    on_finish: function() { 
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// setup comprehension checks
dp_arr_short = [];
dp_len_short = trialData["disjunctive_positive"]["instructions_comp"].length;
for (let i = 0; i < dp_len_short; i++) {
    dp_arr_short.push({
        name: 'dp_instructions_comp_' + [i],
        prompt: trialData["disjunctive_positive"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_positive"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dp_instructions_comp_short = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dp_arr_short,
    on_start: function() {
        jsPsych.setProgressBar(0.5);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};



// round one
dp_arr_short = [];
dp_len_short = trialData["disjunctive_positive"]["round_one_short"].length;
for (let i = 0; i < dp_len_short; i++) {
    dp_arr_short.push(
        trialData["disjunctive_positive"]["round_one_short"][i]
    );
}

var round_one_pages_short = [];
for (var i = 0; i < dp_len_short; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_short/round_one_' + i + '.png"></img>' +
        '<p>' + dp_arr_short[i] + '</p></div>';
    round_one_pages_short.push(slide);
}
const dp_round_one_short = {
    type: jsPsychInstructions,
    pages: round_one_pages_short,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.5625);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// round one comprehension checks
const dp_round_one_comp_q1_short = {
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
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.625);
    }
};
const dp_round_one_comp_q2_short = {
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
    ],
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// round two
dp_arr_short = [];
dp_len_short = trialData["disjunctive_positive"]["round_two_short"].length;
for (let i = 0; i < dp_len_short; i++) {
    dp_arr_short.push(
        trialData["disjunctive_positive"]["round_two_short"][i]
    );
}

var round_two_pages_short = [];
for (var i = 0; i < dp_len_short; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_short/round_two_' + i + '.png"></img>' +
        '<p>' + dp_arr_short[i] + '</p></div>';
    round_two_pages_short.push(slide);
}
const dp_round_two_short = {
    type: jsPsychInstructions,
    pages: round_two_pages_short,
    show_clickable_nav: true,
    on_start: function () {
        jsPsych.setProgressBar(0.6875);
    },
    on_finish: function () {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


const dp_selection_task_short = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "In the next round of the game, \
        Alice gets to turn one of the switches <strong>ON</strong>. \
        The other switch will turn <strong>ON</strong> or <strong>OFF</strong> \
        based on its probability. Before she decides which switch to turn <strong>ON</strong>, \
        you can explain why your team scored a point in the last round.<br></br>" +
        "<img class='dp_image' src='media/dp_short/explanation_selection.png'></img>",
    questions: [
        {
            name: 'dp_selection_task',
            prompt: trialData["disjunctive_positive"]["selection_task"]["question"],
            options: trialData["disjunctive_positive"]["selection_task"]["options"],
            required: true,
        },
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.75);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
}

const dp_loop_node_instructions_short = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_instructions_short,
        dp_instructions_comp_short
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

const dp_conditional_node_instructions_short = {
    timeline: [
        dp_loop_node_instructions_short
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


const dp_loop_node_round_one_q1_short = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_round_one_short,
        dp_round_one_comp_q1_short,
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

const dp_conditional_node_round_one_q1_short = {
    timeline: [
        dp_loop_node_round_one_q1_short
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

const dp_loop_node_round_one_q2_short = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_round_one_short,
        dp_round_one_comp_q2_short,
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

const dp_conditional_node_round_one_q2_short = {
    timeline: [
        dp_loop_node_round_one_q2_short
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

const dp_intervention_task_short = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; max-width:900px;">` +
        "Now, imagine you had one trial round in which you were given the chance to turn one of the switches <strong>ON</strong> manually. \
        The other switch will turn <strong>ON</strong> or <strong>OFF</strong> based on its probability." +
        "<img class='dp_image' src='media/dp_short/intervention_task.png'></img>",
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

const dp_short = [
    dp_instructions_short,
    dp_instructions_comp_short,
    dp_conditional_node_instructions_short,
    dp_intervention_task_short,
    dp_round_one_short,
    dp_round_one_comp_q1_short,
    dp_conditional_node_round_one_q1_short,
    dp_round_one_comp_q2_short,
    dp_conditional_node_round_one_q2_short,
    dp_round_two_short,
    dp_selection_task_short
]