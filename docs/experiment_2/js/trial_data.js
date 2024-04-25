
const trialData = {
    "conjunctive_positive":
    {
        "instructions_long_first":
        [
            "In this game, you start off with 0 points. The goal of the game is to <strong><em>win points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you win a point only if both switches are on.",
            "If one switch is on and the other one is off, you do not win a point.",
            "If both switches are off, you also do not win a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_long_second":
        [
            "In this next version of the game, you start off with 0 points. The goal of the game is to <strong><em>win points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you win a point only if both switches are on.",
            "If one switch is on and the other one is off, you do not win a point.",
            "If both switches are off, you also do not win a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_short":
        [
            "Now, imagine you play a slightly different version of this game in which you start off with 0 points. The goal of the game is to <strong><em>win points</em></strong>.<br/>In this version of the game, you win a point only if both switches are on.",
            "Everything else remains the same, including how likely each switch turns on or off."
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned on, you win a point.", options: ["True", "False"] },
            { question: "If only one switch is turned on and the other one is turned off, you win a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn on?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn on?", options: ["80%", "20%"] },
        ],
        "probability_task_one": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:blue;'>blue</strong> switch has already been turned on.",
                "The <strong style='color:orange;'>orange</strong> switch will turn on or off based on its probability.",
                "How likely is it that you will score a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "probability_task_two": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:orange;'>orange</strong> switch has already been turned on.",
                "The <strong style='color:blue;'>blue</strong> switch will turn on or off based on its probability.", 
                "How likely is it that you will score a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "cp_instructions_key": {
            "cp_instructions_comp_0": "True",
            "cp_instructions_comp_1": "False",
            "cp_instructions_comp_2": "80%",
            "cp_instructions_comp_3": "20%",
        }
    },
    "disjunctive_positive":
    {
        "instructions_long_first":
        [
            "In this game, you start off with 0 points. The goal of the game is to <strong><em>win points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you win a point <em>if at least one of the switches</em> is on.",
            "If <em>both switches are on</em>, you also win a point.",
            "If <em>both switches are off</em>, you <em>do not</em> win a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_long_second":
        [
            "In this next version of the game, you start off with 0 points. The goal of the game is to <strong><em>win points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you win a point <em>if at least one of the switches</em> is on.",
            "If <em>both switches are on</em>, you also win a point.",
            "If <em>both switches are off</em>, you <em>do not</em> win a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_short":
        [
            "Now, imagine you play a slightly different version of this game in which you start off with 0 points. The goal of the game is to <strong><em>win points</em></strong>. <br/>In this version of the game, you win a point if <em>at least one</em> of the switches is on.",
            "Everything else remains the same, including how likely each switch turns on or off."
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned on, you win a point.", options: ["True", "False"] },
            { question: "If only one switch is turned on and the other one is turned off, you win a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn on?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn on?", options: ["80%", "20%"] },
        ],
        "probability_task_one": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:blue;'>blue</strong> switch has already been turned on.",
                "The <strong style='color:orange;'>orange</strong> switch will turn on or off based on its probability.",
                "How likely is it that you will score a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "probability_task_two": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:orange;'>orange</strong> switch has already been turned on.",
                "The <strong style='color:blue;'>blue</strong> switch will turn on or off based on its probability.", 
                "How likely is it that you will score a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "dp_instructions_key": {
            "dp_instructions_comp_0": "True",
            "dp_instructions_comp_1": "True",
            "dp_instructions_comp_2": "80%",
            "dp_instructions_comp_3": "20%",
        }
    },
    "conjunctive_negative":
    {
        "instructions_long_first":
        [
            "In this game, you start off with 10 points. The goal of the game is to <strong><em>avoid losing points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you lose a point only if both switches are on.",
            "If one switch is on and the other one is off, you do not lose a point.",
            "If both switches are off, you also do not lose a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_long_second":
        [
            "In this next version of the game, you start off with 10 points. The goal of the game is to <strong><em>avoid losing points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you lose a point only if both switches are on.",
            "If one switch is on and the other one is off, you do not lose a point.",
            "If both switches are off, you also do not lose a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_short":
        [
            "Now, imagine you play a slightly different version of this game in which you start off with 10 points. The goal of the game is to <strong><em>avoid losing points</em></strong>.<br/>In this version of the game, you lose a point only if <em>both switches are on.",
            "Everything else remains the same, including how likely each switch turns on or off."
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned on, you lose a point.", options: ["True", "False"] },
            { question: "If only one switch is turned on and the other one is turned off, you lose a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn on?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn on?", options: ["80%", "20%"] },
        ],
        "probability_task_one": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:blue;'>blue</strong> switch has already been turned off.",
                "The <strong style='color:orange;'>orange</strong> switch will turn on or off based on its probability.",
                "How likely is it that you will lose a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "probability_task_two": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:orange;'>orange</strong> switch has already been turned off.",
                "The <strong style='color:blue;'>blue</strong> switch will turn on or off based on its probability.", 
                "How likely is it that you will lose a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "cn_instructions_key": {
            "cn_instructions_comp_0": "True",
            "cn_instructions_comp_1": "False",
            "cn_instructions_comp_2": "80%",
            "cn_instructions_comp_3": "20%",
        }
    },
    "disjunctive_negative":
    {
        "instructions_long_first":
        [
            "In this game, you start off with 10 points. The goal of the game is to <strong><em>avoid losing points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you lose a point <em>if at least one of the switches</em> is on.",
            "If <em>both switches are on</em>, you also lose a point.",
            "If <em>both switches are off</em>, you <em>do not</em> lose a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_long_second":
        [
            "In this next version of the game, you start off with 10 points. The goal of the game is to <strong><em>avoid losing points</em></strong>.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn on or off.",
            "In this game, you lose a point <em>if at least one of the switches</em> is on.",
            "If <em>both switches are on</em>, you also lose a point.",
            "If <em>both switches are off</em>, you <em>do not</em> lose a point.",
            "Each switch has a different chance of turning on or off.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning on, and a 20% chance of turning off.",
            "The <strong style='color:orange;'>orange</strong> switch has a 20% chance of turning on, and a 80% chance of turning off.",
            "Hence, both switches have a different chance of turning on or off."
        ],
        "instructions_short":
        [
            "Now, imagine you play a slightly different version of this game in which you start off with 10 points. The goal of the game is to <strong><em>avoid losing points</em></strong>.<br/>In this version of the game, you lose a point if <em>at least one</em> of the switches is on.",
            "Everything else remains the same, including how likely each switch turns on or off."
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned on, you lose a point.", options: ["True", "False"] },
            { question: "If only one switch is turned on and the other one is turned off, you lose a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn on?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn on?", options: ["80%", "20%"] },
        ],
        "probability_task_one": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:blue;'>blue</strong> switch has already been turned off.",
                "The <strong style='color:orange;'>orange</strong> switch will turn on or off based on its probability.",
                "How likely is it that you will lose a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "probability_task_two": {
            prompt: [
                "Imagine that, in one round, the <strong style='color:orange;'>orange</strong> switch has already been turned off.",
                "The <strong style='color:blue;'>blue</strong> switch will turn on or off based on its probability.", 
                "How likely is it that you will lose a point in this round?"
            ],
            labels: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
        },
        "dn_instructions_key": {
            "dn_instructions_comp_0": "True",
            "dn_instructions_comp_1": "True",
            "dn_instructions_comp_2": "80%",
            "dn_instructions_comp_3": "20%",
        }
    },
    "images": [
        "media/cp_long/setup_0.png",
        "media/cp_long/setup_1.png",
        "media/cp_long/setup_2.png",
        "media/cp_long/setup_3.png",
        "media/cp_long/setup_4.png",
        "media/cp_long/setup_5.png",
        "media/cp_long/setup_6.png",
        "media/cp_long/setup_7.png",
        "media/cp_long/setup_8.png",
        "media/cp_long/probability_task_one.png",
        "media/cp_long/probability_task_two.png",

        "media/dp_long/setup_0.png",
        "media/dp_long/setup_1.png",
        "media/dp_long/setup_2.png",
        "media/dp_long/setup_3.png",
        "media/dp_long/setup_4.png",
        "media/dp_long/setup_5.png",
        "media/dp_long/setup_6.png",
        "media/dp_long/setup_7.png",
        "media/dp_long/setup_8.png",
        "media/dp_long/probability_task_one.png",
        "media/dp_long/probability_task_two.png",

        "media/cn_long/setup_0.png",
        "media/cn_long/setup_1.png",
        "media/cn_long/setup_2.png",
        "media/cn_long/setup_3.png",
        "media/cn_long/setup_4.png",
        "media/cn_long/setup_5.png",
        "media/cn_long/setup_6.png",
        "media/cn_long/setup_7.png",
        "media/cn_long/setup_8.png",
        "media/cn_long/probability_task_one.png",
        "media/cn_long/probability_task_two.png",

        "media/dn_long/setup_0.png",
        "media/dn_long/setup_1.png",
        "media/dn_long/setup_2.png",
        "media/dn_long/setup_3.png",
        "media/dn_long/setup_4.png",
        "media/dn_long/setup_5.png",
        "media/dn_long/setup_6.png",
        "media/dn_long/setup_7.png",
        "media/dn_long/setup_8.png",
        "media/dn_long/probability_task_one.png",
        "media/dn_long/probability_task_two.png",

        "media/cp_short/setup_0.png",
        "media/cp_short/setup_0.png",
        "media/cp_short/setup_0.png",
        "media/cp_short/probability_task_one.png",
        "media/cp_short/probability_task_two.png",

        "media/dp_short/setup_0.png",
        "media/dp_short/setup_0.png",
        "media/dp_short/setup_0.png",
        "media/dp_short/probability_task_one.png",
        "media/dp_short/probability_task_two.png",

        "media/cn_short/setup_0.png",
        "media/cn_short/setup_0.png",
        "media/cn_short/setup_0.png",
        "media/cn_short/probability_task_one.png",
        "media/cn_short/probability_task_two.png",

        "media/dn_short/setup_0.png",
        "media/dn_short/setup_0.png",
        "media/dn_short/setup_0.png",
        "media/dn_short/probability_task_one.png",
        "media/dn_short/probability_task_two.png"
    ]
};


