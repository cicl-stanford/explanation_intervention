/*
* File: condition_two.js
* -----
* Condition 2: DP, CP, DN, CN
*/

// DP start instructions
let dp_1 = [];
let dp_start_length = trialData["disjunctive_positive"]["instructions_long_first"].length;
for (let i = 0; i < dp_start_length; i++) {
    dp_1.push(
        trialData["disjunctive_positive"]["instructions_long_first"][i]
    );
}

let dp_1_instructions_setup = [];
for (let i = 0; i < dp_start_length; i++) {
    let slide = '<div><img class="dp_image" src="media/dp_long/setup_' + i + '.png"></img>' +
        '<p>' + dp_1[i] + '</p></div>';
        dp_1_instructions_setup.push(slide);
}

const dp_1_instruction_pages = {
    type: jsPsychInstructions,
    pages: dp_1_instructions_setup,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.1);
    },
    on_finish: function() { 
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};


// setup comprehension checks
dp_1 = [];
dp_start_length = trialData["disjunctive_positive"]["instructions_comp"].length;

for (let i = 0; i < dp_start_length; i++) {
    dp_1.push({
        name: 'dp_instructions_comp_' + [i],
        prompt: trialData["disjunctive_positive"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_positive"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dp_1_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dp_1,
    on_start: function() {
        jsPsych.setProgressBar(0.2);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const dp_1_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dp_image" src="media/dp_long/probability_task_one.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["disjunctive_positive"]["probability_task_one"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["disjunctive_positive"]["probability_task_one"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["disjunctive_positive"]["probability_task_one"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['disjunctive_positive']['probability_task_one']['labels'],
    slider_width: 600,
    step: 10
};

// probability task 2
const dp_1_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dp_image" src="media/dp_long/probability_task_two.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["disjunctive_positive"]["probability_task_two"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["disjunctive_positive"]["probability_task_two"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["disjunctive_positive"]["probability_task_two"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['disjunctive_positive']['probability_task_two']['labels'],
    slider_width: 600,
    step: 10
};

// loop node
const dp_1_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_1_instruction_pages,
        dp_1_instructions_comp
    ],
    loop_function: function (data) {
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dp_instructions_key = trialData["disjunctive_positive"]["dp_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(dp_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const dp_1_conditional_node_instructions = {
    timeline: [
        dp_1_loop_node_instructions
    ],
    conditional_function: function(){
        // get the data from the previous trial
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const dp_instructions_key = trialData["disjunctive_positive"]["dp_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(dp_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

// CP
let cp_2 = [];
dp_start_length = trialData["conjunctive_positive"]["instructions_short"].length;
for (let i = 0; i < dp_start_length; i++) {
    cp_2.push(
        trialData["conjunctive_positive"]["instructions_short"][i]
    );
}

let cp_2_instructions_setup = [];
for (let i = 0; i < dp_start_length; i++) {
    let slide = '<div><img class="cp_image" src="media/cp_short/setup_' + i + '.png"></img>' +
        '<p>' + cp_2[i] + '</p></div>';
        cp_2_instructions_setup.push(slide);
}

const cp_2_instructions_pages = {
    type: jsPsychInstructions,
    pages: cp_2_instructions_setup,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.3);
    },
    on_finish: function() { 
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};


// setup comprehension checks
cp_2 = [];
dp_start_length = trialData["conjunctive_positive"]["instructions_comp"].length;

for (let i = 0; i < dp_start_length; i++) {
    cp_2.push({
        name: 'cp_instructions_comp_' + [i],
        prompt: trialData["conjunctive_positive"]["instructions_comp"][i]["question"],
        options: trialData["conjunctive_positive"]["instructions_comp"][i]["options"],
        required: true
    });
}
const cp_2_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: cp_2,
    on_start: function() {
        jsPsych.setProgressBar(0.4);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const cp_2_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="cp_image" src="media/cp_short/probability_task_one.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["conjunctive_positive"]["probability_task_one"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["conjunctive_positive"]["probability_task_one"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["conjunctive_positive"]["probability_task_one"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['conjunctive_positive']['probability_task_one']['labels'],
    slider_width: 600,
    step: 10
};

// probability task 2
const cp_2_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="cp_image" src="media/cp_short/probability_task_two.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["conjunctive_positive"]["probability_task_two"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["conjunctive_positive"]["probability_task_two"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["conjunctive_positive"]["probability_task_two"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['conjunctive_positive']['probability_task_two']['labels'],
    slider_width: 600,
    step: 10
};

// loop node
const cp_2_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cp_2_instructions_pages,
        cp_2_instructions_comp
    ],
    loop_function: function (data) {
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cp_instructions_key = trialData["conjunctive_positive"]["cp_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(cp_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const cp_2_conditional_node_instructions = {
    timeline: [
        cp_2_loop_node_instructions
    ],
    conditional_function: function(){
        // get the data from the previous trial
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const cp_instructions_key = trialData["conjunctive_positive"]["cp_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(cp_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

// DN
let dn_3 = [];
dp_start_length = trialData["disjunctive_negative"]["instructions_long_second"].length;
for (let i = 0; i < dp_start_length; i++) {
    dn_3.push(
        trialData["disjunctive_negative"]["instructions_long_second"][i]
    );
}

let dn_3_instructions_setup = [];
for (let i = 0; i < dp_start_length; i++) {
    let slide = '<div><img class="dn_image" src="media/dn_long/setup_' + i + '.png"></img>' +
        '<p>' + dn_3[i] + '</p></div>';
    dn_3_instructions_setup.push(slide);
}

const dn_3_instructions_pages = {
    type: jsPsychInstructions,
    pages: dn_3_instructions_setup,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.5);
    },
    on_finish: function() { 
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};


// setup comprehension checks
dn_3 = [];
dp_start_length = trialData["disjunctive_negative"]["instructions_comp"].length;

for (let i = 0; i < dp_start_length; i++) {
    dn_3.push({
        name: 'dn_instructions_comp_' + [i],
        prompt: trialData["disjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dn_3_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dn_3,
    on_start: function() {
        jsPsych.setProgressBar(0.6);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const dn_3_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dn_image" src="media/dn_long/probability_task_one.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["disjunctive_negative"]["probability_task_one"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["disjunctive_negative"]["probability_task_one"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["disjunctive_negative"]["probability_task_one"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['disjunctive_negative']['probability_task_one']['labels'],
    slider_width: 600,
    step: 10
};

// probability task 2
const dn_3_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dn_image" src="media/dn_long/probability_task_two.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["disjunctive_negative"]["probability_task_two"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["disjunctive_negative"]["probability_task_two"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["disjunctive_negative"]["probability_task_two"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['disjunctive_negative']['probability_task_two']['labels'],
    slider_width: 600,
    step: 10
};

// loop node
const dn_3_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dn_3_instructions_pages,
        dn_3_instructions_comp
    ],
    loop_function: function (data) {
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const dn_instructions_key = trialData["disjunctive_negative"]["dn_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(dn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const dn_3_conditional_node_instructions = {
    timeline: [
        dn_3_loop_node_instructions
    ],
    conditional_function: function(){
        // get the data from the previous trial
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const dn_instructions_key = trialData["disjunctive_negative"]["dn_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(dn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

// CN
let cn_4 = [];
dp_start_length = trialData["conjunctive_negative"]["instructions_short"].length;
for (let i = 0; i < dp_start_length; i++) {
    cn_4.push(
        trialData["conjunctive_negative"]["instructions_short"][i]
    );
}

let cn_4_instructions_setup = [];
for (let i = 0; i < dp_start_length; i++) {
    let slide = '<div><img class="cp_image" src="media/cn_short/setup_' + i + '.png"></img>' +
        '<p>' + cn_4[i] + '</p></div>';
    cn_4_instructions_setup.push(slide);
}

const cn_4_instructions_pages = {
    type: jsPsychInstructions,
    pages: cn_4_instructions_setup,
    show_clickable_nav: true,
    on_start: function() {
        jsPsych.setProgressBar(0.7);
    },
    on_finish: function() { 
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};


// setup comprehension checks
cn_4 = [];
dp_start_length = trialData["conjunctive_negative"]["instructions_comp"].length;

for (let i = 0; i < dp_start_length; i++) {
    cn_4.push({
        name: 'cn_instructions_comp_' + [i],
        prompt: trialData["conjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["conjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const cn_4_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: cn_4,
    on_start: function() {
        jsPsych.setProgressBar(0.8);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const cn_4_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="cn_image" src="media/cn_short/probability_task_one.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["conjunctive_negative"]["probability_task_one"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["conjunctive_negative"]["probability_task_one"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["conjunctive_negative"]["probability_task_one"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['conjunctive_negative']['probability_task_one']['labels'],
    slider_width: 600,
    step: 10
};

// probability task 2
const cn_4_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="cn_image" src="media/cn_short/probability_task_two.png"></img>' +
    '<div class="probability_prompt_0">' + trialData["conjunctive_negative"]["probability_task_two"]["prompt"][0] + '</div>' +
    '<div class="probability_prompt_1">' + trialData["conjunctive_negative"]["probability_task_two"]["prompt"][1] + '</div><br>' +
    '<div class="probability_prompt_2">' + trialData["conjunctive_negative"]["probability_task_two"]["prompt"][2] + '</div>' +
    '<br></div>',
    require_movement: true,
    labels: trialData['conjunctive_negative']['probability_task_two']['labels'],
    slider_width: 600,
    step: 10
};


// loop node
const cn_4_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_4_instructions_pages,
        cn_4_instructions_comp
    ],
    loop_function: function (data) {
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];
        const cn_instructions_key = trialData["conjunctive_negative"]["cn_instructions_key"];

        if (JSON.stringify(trial_data) === JSON.stringify(cn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const cn_4_conditional_node_instructions = {
    timeline: [
        cn_4_loop_node_instructions
    ],
    conditional_function: function(){
        // get the data from the previous trial
        let trial_data = jsPsych.data.getLastTrialData().filter({ trial_type: 'survey-multi-choice' }).trials[0]["response"];

        const cn_instructions_key = trialData["conjunctive_negative"]["cn_instructions_key"];
        
        // if the participant's respone doesn't match the key, replay the instructions and comp checks
        if (JSON.stringify(trial_data) === JSON.stringify(cn_instructions_key)) {
            return false;
        } else {
            return true;
        }
    },
}

const condition_two = [
    dp_1_instruction_pages,
    dp_1_instructions_comp,
    dp_1_conditional_node_instructions,
    dp_1_probability_task_one,
    dp_1_probability_task_two,
    cp_2_instructions_pages,
    cp_2_instructions_comp,
    cp_2_conditional_node_instructions,
    cp_2_probability_task_one,
    cp_2_probability_task_two,
    dn_3_instructions_pages,
    dn_3_instructions_comp,
    dn_3_conditional_node_instructions,
    dn_3_probability_task_one,
    dn_3_probability_task_two,
    cn_4_instructions_pages,
    cn_4_instructions_comp,
    cn_4_conditional_node_instructions,
    cn_4_probability_task_one,
    cn_4_probability_task_two
]