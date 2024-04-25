/*
* File: condition_three.js
* -----
* Condition 3: CN, DN, CP, DP
*/

// CN start instructions
let cn_1 = [];
let cn_start_length = trialData["conjunctive_negative"]["instructions_long_first"].length;
for (let i = 0; i < cn_start_length; i++) {
    cn_1.push(
        trialData["conjunctive_negative"]["instructions_long_first"][i]
    );
}

let cn_1_instructions_setup = [];
for (let i = 0; i < cn_start_length; i++) {
    let slide = '<div><img class="cp_image" src="media/cn_long/setup_' + i + '.png"></img>' +
        '<p>' + cn_1[i] + '</p></div>';
        cn_1_instructions_setup.push(slide);
}

const cn_1_instruction_pages = {
    type: jsPsychInstructions,
    pages: cn_1_instructions_setup,
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
cn_1 = [];
cn_start_length = trialData["conjunctive_negative"]["instructions_comp"].length;

for (let i = 0; i < cn_start_length; i++) {
    cn_1.push({
        name: 'cn_instructions_comp_' + [i],
        prompt: trialData["conjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["conjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const cn_1_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: cn_1,
    on_start: function() {
        jsPsych.setProgressBar(0.2);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const cn_1_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="cn_image" src="media/cn_long/probability_task_one.png"></img>' +
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
const cn_1_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="cn_image" src="media/cn_long/probability_task_two.png"></img>' +
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
const cn_1_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cn_1_instruction_pages,
        cn_1_instructions_comp
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

const cn_1_conditional_node_instructions = {
    timeline: [
        cn_1_loop_node_instructions
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

// DN
let dn_2 = [];
cn_start_length = trialData["disjunctive_negative"]["instructions_short"].length;
for (let i = 0; i < cn_start_length; i++) {
    dn_2.push(
        trialData["disjunctive_negative"]["instructions_short"][i]
    );
}

let dn_2_instructions_setup = [];
for (let i = 0; i < cn_start_length; i++) {
    let slide = '<div><img class="cp_image" src="media/dn_short/setup_' + i + '.png"></img>' +
        '<p>' + dn_2[i] + '</p></div>';
    dn_2_instructions_setup.push(slide);
}

const dn_2_instructions_pages = {
    type: jsPsychInstructions,
    pages: dn_2_instructions_setup,
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
dn_2 = [];
cn_start_length = trialData["disjunctive_negative"]["instructions_comp"].length;

for (let i = 0; i < cn_start_length; i++) {
    dn_2.push({
        name: 'dn_instructions_comp_' + [i],
        prompt: trialData["disjunctive_negative"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_negative"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dn_2_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dn_2,
    on_start: function() {
        jsPsych.setProgressBar(0.4);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const dn_2_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dn_image" src="media/dn_short/probability_task_one.png"></img>' +
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
const dn_2_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dn_image" src="media/dn_short/probability_task_two.png"></img>' +
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
const dn_2_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dn_2_instructions_pages,
        dn_2_instructions_comp
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

const dn_2_conditional_node_instructions = {
    timeline: [
        dn_2_loop_node_instructions
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

// CP
let cp_3 = [];
cn_start_length = trialData["conjunctive_positive"]["instructions_long_second"].length;
for (let i = 0; i < cn_start_length; i++) {
    cp_3.push(
        trialData["conjunctive_positive"]["instructions_long_second"][i]
    );
}

let cp_3_instructions_setup = [];
for (let i = 0; i < cn_start_length; i++) {
    let slide = '<div><img class="cp_image" src="media/cp_long/setup_' + i + '.png"></img>' +
        '<p>' + cp_3[i] + '</p></div>';
        cp_3_instructions_setup.push(slide);
}

const cp_3_instructions_pages = {
    type: jsPsychInstructions,
    pages: cp_3_instructions_setup,
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
cp_3 = [];
cn_start_length = trialData["conjunctive_positive"]["instructions_comp"].length;

for (let i = 0; i < cn_start_length; i++) {
    cp_3.push({
        name: 'cp_instructions_comp_' + [i],
        prompt: trialData["conjunctive_positive"]["instructions_comp"][i]["question"],
        options: trialData["conjunctive_positive"]["instructions_comp"][i]["options"],
        required: true
    });
}
const cp_3_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: cp_3,
    on_start: function() {
        jsPsych.setProgressBar(0.6);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const cp_3_probability_task_one = {
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
const cp_3_probability_task_two = {
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
const cp_3_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        cp_3_instructions_pages,
        cp_3_instructions_comp
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

const cp_3_conditional_node_instructions = {
    timeline: [
        cp_3_loop_node_instructions
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

// DP
let dp_4 = [];
cn_start_length = trialData["disjunctive_positive"]["instructions_short"].length;
for (let i = 0; i < cn_start_length; i++) {
    dp_4.push(
        trialData["disjunctive_positive"]["instructions_short"][i]
    );
}

let dp_4_instructions_setup = [];
for (let i = 0; i < cn_start_length; i++) {
    let slide = '<div><img class="cp_image" src="media/dp_short/setup_' + i + '.png"></img>' +
        '<p>' + dp_4[i] + '</p></div>';
        dp_4_instructions_setup.push(slide);
}

const dp_4_instructions_pages = {
    type: jsPsychInstructions,
    pages: dp_4_instructions_setup,
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
dp_4 = [];
cn_start_length = trialData["disjunctive_positive"]["instructions_comp"].length;

for (let i = 0; i < cn_start_length; i++) {
    dp_4.push({
        name: 'dp_instructions_comp_' + [i],
        prompt: trialData["disjunctive_positive"]["instructions_comp"][i]["question"],
        options: trialData["disjunctive_positive"]["instructions_comp"][i]["options"],
        required: true
    });
}
const dp_4_instructions_comp = {
    type: jsPsychSurveyMultiChoice,
    preamble: "Please answer the following comprehension check questions.",
    questions: dp_4,
    on_start: function() {
        jsPsych.setProgressBar(0.8);
    },
    on_finish: function() {
        let prog = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(prog + (0.1)); 
    }
};

// probability task 1
const dp_4_probability_task_one = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dp_image" src="media/dp_short/probability_task_one.png"></img>' +
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
const dp_4_probability_task_two = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<div><img class="dp_image" src="media/dp_short/probability_task_two.png"></img>' +
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
const dp_4_loop_node_instructions = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: 'Unfortunately, you missed some of the comprehension ' +
                'questions.</p> <p> Please review the instructions again.',
            choices: ['Review'],
        },
        dp_4_instructions_pages,
        dp_4_instructions_comp
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

const dp_4_conditional_node_instructions = {
    timeline: [
        dp_4_loop_node_instructions
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

const condition_three = [
    cn_1_instruction_pages,
    cn_1_instructions_comp,
    cn_1_conditional_node_instructions,
    cn_1_probability_task_one,
    cn_1_probability_task_two,
    dn_2_instructions_pages,
    dn_2_instructions_comp,
    dn_2_conditional_node_instructions,
    dn_2_probability_task_one,
    dn_2_probability_task_two,
    cp_3_instructions_pages,
    cp_3_instructions_comp,
    cp_3_conditional_node_instructions,
    cp_3_probability_task_one,
    cp_3_probability_task_two,
    dp_4_instructions_pages,
    dp_4_instructions_comp,
    dp_4_conditional_node_instructions,
    dp_4_probability_task_one,
    dp_4_probability_task_two
]