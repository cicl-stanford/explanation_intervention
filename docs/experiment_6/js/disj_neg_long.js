/*
* File: disj_neg_long.js
* -----
* Information for putting the pages for the DN trial together.
* This is the variation in which the participant runs through the DN trial first, then the CN trial. 
*/

// DN long instructions
let dn_arr_long = [];
let dn_len_long = trialData["disjunctive_negative"]["instructions_long"].length;
for (let i = 0; i < dn_len_long; i++) {
    dn_arr_long.push(
        trialData["disjunctive_negative"]["instructions_long"][i]
    );
}

var instruction_pages_long = [];
for (var i = 0; i < dn_len_long; i++) {
    let slide = '<div><img class="dn_image" src="media/dn_long/setup_' + i + '.jpg"></img>' +
        '<p>' + dn_arr_long[i] + '</p></div>';
    instruction_pages_long.push(slide);
}

const dn_instructions_long = {
    type: jsPsychInstructions,
    pages: instruction_pages_long,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0);
    },
    on_finish: function() { 
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.125); 
    }
};


// setup comprehension checks
dn_arr_long = [];
dn_len_long = trialData["disjunctive_negative"]["instructions_comp"].length;

for (let i = 0; i < dn_len_long; i++) {
    dn_arr_long.push({
        name: 'dn_instructions_comp_' + [i],
        prompt: trialData["disjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dn_instructions_comp_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dn_arr_long,
    on_start: function() {
        jsPsych.setProgressBar(0.125);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.125); 
    }
};



// round one
dn_arr_long = [];
dn_len_long = trialData["disjunctive_negative"]["round_one_long"].length;
for (let i = 0; i < dn_len_long; i++) {
    dn_arr_long.push(
        trialData["disjunctive_negative"]["round_one_long"][i]
    );
}

var round_one_pages_long = [];
for (var i = 0; i < dn_len_long; i++) {
    let slide = '<div><img class="dn_image" src="media/dn_long/round_one_' + i + '.jpg"></img>' +
        '<p>' + dn_arr_long[i] + '</p></div>';
    round_one_pages_long.push(slide);
}
const dn_round_one_long = {
    type: jsPsychInstructions,
    pages: round_one_pages_long,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.5);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.625); 
    }
};


// round one comprehension checks
const dn_round_one_comp_q1_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please respond with whether or not the following statements are true.",
    questions: [
        {
            name: 'dn_round_one_comp_q1_0',
            prompt: trialData["disjunctive_negative"]["round_one_comp_q1"][0]["question"],
            options: trialData["disjunctive_negative"]["round_one_comp_q1"][0]["options"],
            required: true,
        },
        {
            name: 'dn_round_one_comp_q1_1',
            prompt: trialData["disjunctive_negative"]["round_one_comp_q1"][1]["question"],
            options: trialData["disjunctive_negative"]["round_one_comp_q1"][1]["options"],
            required: true,
        },
        {
            name: 'dn_round_one_comp_q1_2',
            prompt: trialData["disjunctive_negative"]["round_one_comp_q1"][2]["question"],
            options: trialData["disjunctive_negative"]["round_one_comp_q1"][2]["options"],
            required: true,
        },
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.625);
    }
};
const dn_round_one_comp_q2_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please respond with whether or not the following statements are true.",
    questions: [
        {
            name: 'dn_round_two_comp_q2_0',
            prompt: trialData["disjunctive_negative"]["round_one_comp_q2"][0]["question"],
            options: trialData["disjunctive_negative"]["round_one_comp_q2"][0]["options"],
            required: true,
        },
        {
            name: 'dn_round_two_comp_q2_1',
            prompt: trialData["disjunctive_negative"]["round_one_comp_q2"][1]["question"],
            options: trialData["disjunctive_negative"]["round_one_comp_q2"][1]["options"],
            required: true,
        },
        {
            name: 'dn_round_two_comp_q2_2',
            prompt: trialData["disjunctive_negative"]["round_one_comp_q2"][2]["question"],
            options: trialData["disjunctive_negative"]["round_one_comp_q2"][2]["options"],
            required: true,
        },
    ],
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.125); 
    }
};


// round two
dn_arr_long = [];
dn_len_long = trialData["disjunctive_negative"]["round_two_long"].length;
for (let i = 0; i < dn_len_long; i++) {
    dn_arr_long.push(
        trialData["disjunctive_negative"]["round_two_long"][i]
    );
}

var round_two_pages_long = [];
for (var i = 0; i < dn_len_long; i++) {
    let slide = '<div><img class="dn_image" src="media/dn_long/round_two_' + i + '.jpg"></img>' +
        '<p>' + dn_arr_long[i] + '</p></div>';
    round_two_pages_long.push(slide);
}
const dn_round_two_long = {
    type: jsPsychInstructions,
    pages: round_two_pages_long,
    show_clickable_nav: true,
    on_start: function () {
        jsPsych.setProgressBar(0.625);
    },
    on_finish: function () {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.125); 
    }
};



const dn_selection_task_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; padding:20px; max-width:900px;">` +
        "In the next round of the game, \
        Alice gets to turn one of the switches <strong>ON</strong> to try to win money for your team. \
        The other switch will turn <strong>ON</strong> or <strong>OFF</strong> \
        based on its probability. Before she decides which switch to turn <strong>OFF</strong>, \
        you can explain why your team won $5 in the last round.<br></br>" +
        "<img class='dn_image' src='media/dn_long/explanation_selection.jpg'></img>",
    questions: [
        {
            name: 'dn_selection_task',
            prompt: trialData["disjunctive_negative"]["selection_task"]["question"],
            options: trialData["disjunctive_negative"]["selection_task"]["options"],
            required: true,
        },
    ],
    on_start: function() {
        jsPsych.setProgressBar(0.75);
    },
    on_finish: function() {
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0.125); 
    }
};

const dn_loop_node_instructions_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dn_instructions_long,
        dn_instructions_comp_long
    ],
    loop_function: function (data) {
        var trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dn_instructions_key = trialData["disjunctive_negative"]["dn_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(dn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const dn_conditional_node_instructions_long = {
    timeline: [
        dn_loop_node_instructions_long
    ],
    conditional_function: function(){
        // get the data from the previous trial
        var trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const dn_instructions_key = trialData["disjunctive_negative"]["dn_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(dn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}


const dn_loop_node_round_one_q1_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dn_round_one_long,
        dn_round_one_comp_q1_long,
    ],
    loop_function: function (data) {
        const participant_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dn_participant_key = trialData["disjunctive_negative"]["dn_gameplay_q1_key"];

        // if participant and teammate responses match the key, return false, do not loop
        if (!!(JSON.stringify(participant_response) === JSON.stringify(dn_participant_key))) {
            return false;
        } else {
            return true;
        }
    },
}

const dn_conditional_node_round_one_q1_long = {
    timeline: [
        dn_loop_node_round_one_q1_long
    ],
    conditional_function: function(){
        const participant_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dn_participant_key = trialData["disjunctive_negative"]["dn_gameplay_q1_key"];

        // if participant and teammate responses DO NOT match the key, return true to run the loop node
        if (!(JSON.stringify(participant_response) === JSON.stringify(dn_participant_key))) {
            return true;
        } else {
            return false;
        }
    },
}

const dn_loop_node_round_one_q2_long = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dn_round_one_long,
        dn_round_one_comp_q2_long,
    ],
    loop_function: function (data) {
        const teammate_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dn_teammate_key = trialData["disjunctive_negative"]["dn_gameplay_q2_key"];

        // if participant and teammate responses match the key, return false, do not loop
        if (!!(JSON.stringify(teammate_response) === JSON.stringify(dn_teammate_key))) {
            return false;
        } else {
            return true;
        }
    },
}

const dn_conditional_node_round_one_q2_long = {
    timeline: [
        dn_loop_node_round_one_q2_long
    ],
    conditional_function: function(){
        const teammate_response = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dn_teammate_key = trialData["disjunctive_negative"]["dn_gameplay_q2_key"];

        // if participant and teammate responses DO NOT match the key, return true to run the loop node
        if (!(JSON.stringify(teammate_response) === JSON.stringify(dn_teammate_key))) {
            return true;
        } else {
            return false;
        }
    },
}

const dn_intervention_task_long = {
    type: jsPsychSurveyMultiChoice,
    preamble: `<div style="text-align:center; max-width:900px;">` +
        "Imagine that you had to choose one of the two switches to manually turn <strong>ON</strong>, with the other one turning <strong>ON</strong> or <strong>OFF</strong> based on its probability.<br></br>" +
        "<img class='dp_image' src='media/dn_long/intervention_task.jpg'></img>",
    questions: [
        {
            name: 'dn_intervention_task',
            prompt: trialData["disjunctive_negative"]["intervention_task"]["question"],
            options: trialData["disjunctive_negative"]["intervention_task"]["options"],
            required: true,
        },
    ],
    // on_start: function() {
    //     jsPsych.setProgressBar(0.25);
    // }
};
let dn_arr_long2 = [];
let dn_len_long2 = trialData["disjunctive_negative"]["instructions_long2"].length;
for (let i = 0; i < dn_len_long2; i++) {
    dn_arr_long2.push(
        trialData["disjunctive_negative"]["instructions_long2"][i]
    );
}

var instruction_pages_long2 = [];
for (var i = 0; i < dn_len_long2; i++) {
    let slide = '<div><img class="dn_image" src="media/dn_long/setup2_' + i + '.jpg"></img>' +
        '<p>' + dn_arr_long2[i] + '</p></div>';
    instruction_pages_long2.push(slide);
}

const dn_instructions_long2 = {
    type: jsPsychInstructions,
    pages: instruction_pages_long2,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.25);
    },
    on_finish: function() { 
        var prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + 0); 
    }
};
const dn_long = [
    dn_instructions_long,
    dn_instructions_comp_long,
    dn_conditional_node_instructions_long,
    dn_instructions_long2,
    dn_round_one_long,
    dn_round_one_comp_q1_long,
    dn_conditional_node_round_one_q1_long,
    dn_round_one_comp_q2_long,
    dn_conditional_node_round_one_q2_long,
    dn_round_two_long,
    dn_selection_task_long
]