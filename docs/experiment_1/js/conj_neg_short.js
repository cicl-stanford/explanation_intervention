/*
* File: conj_neg_short.js
* -----
* Information for putting the pages for the CN trial together.
* This is the variation in which the participant runs through the DN trial first, then the CN trial. 
*/

// CN short instructions
let cn_arr_short = [];
let cn_len_short = trialData["conjunctive_negative"]["instructions_short"].length;
for (let i = 0; i < cn_len_short; i++) {
    cn_arr_short.push(
        trialData["conjunctive_negative"]["instructions_short"][i]
    );
}

var instruction_pages_short = [];
for (var i = 0; i < cn_len_short; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_short/setup_' + i + '.jpeg"></img>' +
        '<p>' + cn_arr_short[i] + '</p></div>';
    instruction_pages_short.push(slide);
}

const cn_instructions_short = {
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
cn_arr_short = [];
cn_len_short = trialData["conjunctive_negative"]["instructions_comp"].length;
for (let i = 0; i < cn_len_short; i++) {
    cn_arr_short.push({
        name: 'cn_instructions_comp_' + [i],
        prompt: trialData["conjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["conjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const cn_instructions_comp_short = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: cn_arr_short,
    on_start: function() {
        jsPsych.setProgressBar(0.5);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};



// round one
cn_arr_short = [];
cn_len_short = trialData["conjunctive_negative"]["round_one_short"].length;
for (let i = 0; i < cn_len_short; i++) {
    cn_arr_short.push(
        trialData["conjunctive_negative"]["round_one_short"][i]
    );
}

var round_one_pages_short = [];
for (var i = 0; i < cn_len_short; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_short/round_one_' + i + '.jpeg"></img>' +
        '<p>' + cn_arr_short[i] + '</p></div>';
    round_one_pages_short.push(slide);
}
const cn_round_one_short = {
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
const cn_round_one_comp_q1_short = {
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
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.625);
    }
};
const cn_round_one_comp_q2_short = {
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
    ],
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.0625); 
    }
};


// round two
cn_arr_short = [];
cn_len_short = trialData["conjunctive_negative"]["round_two_short"].length;
for (let i = 0; i < cn_len_short; i++) {
    cn_arr_short.push(
        trialData["conjunctive_negative"]["round_two_short"][i]
    );
}

var round_two_pages_short = [];
for (var i = 0; i < cn_len_short; i++) {
    let slide = '<div><img class="cn_image" src="media/cn_short/round_two_' + i + '.jpeg"></img>' +
        '<p>' + cn_arr_short[i] + '</p></div>';
    round_two_pages_short.push(slide);
}
const cn_round_two_short = {
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


const cn_selection_task_short = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "In the next round of the game, \
        Zarah gets to turn one of the switches <strong>OFF</strong>. \
        The other switch will turn <strong>ON</strong> or <strong>OFF</strong> \
        based on its probability. Before she decides which switch to turn <strong>OFF</strong>, \
        you can explain why your team scored a point in the last round.<br></br>" +
        "<img class='cn_image' src='media/cn_short/explanation_selection.jpeg'></img>",
    questions: [
        {
            name: 'cn_selection_task',
            prompt: trialData["conjunctive_negative"]["selection_task"]["question"],
            options: trialData["conjunctive_negative"]["selection_task"]["options"],
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

const cn_loop_node_instructions_short = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_instructions_short,
        cn_instructions_comp_short
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

const cn_conditional_node_instructions_short = {
    timeline: [
        cn_loop_node_instructions_short
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


const cn_loop_node_round_one_q1_short = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_round_one_short,
        cn_round_one_comp_q1_short,
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

const cn_conditional_node_round_one_q1_short = {
    timeline: [
        cn_loop_node_round_one_q1_short
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

const cn_loop_node_round_one_q2_short = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_round_one_short,
        cn_round_one_comp_q2_short,
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

const cn_conditional_node_round_one_q2_short = {
    timeline: [
        cn_loop_node_round_one_q2_short
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

const cn_intervention_task_short = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "Now, imagine you had one trial round in which you were given the chance to turn one of the switches <strong>OFF</strong> manually. \
        The other switch will turn <strong>ON</strong> or <strong>OFF</strong> based on its probability.<br></br>" +
        "<img class='cp_image' src='media/cn_short/intervention_task.jpeg'></img>",
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

const cn_short = [
    cn_instructions_short,
    cn_instructions_comp_short,
    cn_conditional_node_instructions_short,
    cn_intervention_task_short,
    cn_round_one_short,
    cn_round_one_comp_q1_short,
    cn_conditional_node_round_one_q1_short,
    cn_round_one_comp_q2_short,
    cn_conditional_node_round_one_q2_short,
    cn_round_two_short,
    cn_selection_task_short
]