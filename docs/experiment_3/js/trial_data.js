
const trialData = {
    "conjunctive_positive":
    {
        "instructions_long":
        [
            "In this game show, participants play in teams of two. Teams start off with 0 points. The goal of the game is to win points.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn <strong>ON</strong> or <strong>OFF</strong>.",
            "In this game, the team wins a point <em>only if both switches are <strong>ON</strong></em>.",
            "If <em>one switch is <strong>ON</strong> and the other one is <strong>OFF</strong></em>, the team <em>does not</em> win a point.",
            "If <em>both switches are <strong>OFF</strong></em>, the team also <em>does not</em> win a point.",
            "Each switch has a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning <strong>ON</strong>, and a 20% chance of turning <strong>OFF</strong>.",
            "The <strong style='color:orange;'>orange</strong> switch has an 20% chance of turning <strong>ON</strong>, and a 80% chance of turning <strong>OFF</strong>.",
            "Hence, both switches have a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_long_button":
        [
            "There is a button attached to each of the switches.",
            "Pressing a button will increase the probability for that switch to turn ON to 90%.",
            "Pressing the button linked to the blue switch will increase its probability of turning ON to 90%.",
            "Pressing the button linked to the orange switch will increase its probability of turning ON to 90%.",
        ],
        "instructions_short":
        [
            "Now, imagine you play <em><strong>Flip or Flop</em></strong> with another player, Zarah. You and Zarah play a slightly different version of the game.",
            "In this version of the game, the team wins a point <em>only if both switches are <strong>ON</strong></em>.<br>If <em>one switch is <strong>ON</strong> and the other one is <strong>OFF</strong></em>, the team <em>does not</em> win a point.",
            "Everything else remains the same, including how likely each switch turns <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned <strong>ON</strong>, the team wins a point.", options: ["True", "False"] },
            { question: "If only one switch is turned <strong>ON</strong> and the other one is turned <strong>OFF</strong>, the team wins a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
        ],
        "round_one_long":
        [
            "As a participant of <em><strong>Flip or Flop</em></strong>, you play together in a team with Zarah.<br>You have more information about the game than Zarah.",
            "You know that both switches need to be <strong>ON</strong> in order to score a point. <br> You know that pressing a button will make the connected switch 90% to turn <strong>ON</strong>. <br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Zarah knows that both switches need to be <strong>ON</strong> in order to score a point. <br> Zarah also knows that pressing a button will make the connected switch 90% more likely to turn <strong>ON</strong>. <br> However, Zarah does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_short":
        [
            "You know that both switches need to be <strong>ON</strong> in order to score a point. <br> You know that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>. <br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Zarah knows that both switches need to be <strong>ON</strong> in order to score a point. <br> Zarah also knows that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>. <br> However, Zarah does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_comp_q1":
        [
            { question: "You know that both switches need to be <strong>ON</strong> in order to score a point.", options: ["True", "False"] },
            { question: "You know that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "You know the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_one_comp_q2":
        [
            { question: "Zarah knows that both switches need to be <strong>ON</strong> in order to score a point.", options: ["True", "False"] },
            { question: "Zarah knows that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "Zarah knows the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_two_long": 
        [
            "The first round of the game begins. Both switches turn <strong>ON</strong>, so your team scores a point!",
        ],
        "round_two_short": 
        [
            "As before, in the first round of the game, both switches turn <strong>ON</strong>, so your team scores a point!",
        ],
        "selection_task":
        { 
            question: ['If you had to choose, which of the two explanations would you give to Zarah?'], 
            options: [
                "Because the <strong style='color:blue;'>blue</strong> switch turned <strong>ON</strong>.",
                "Because the <strong style='color:orange;'>orange</strong> switch turned <strong>ON</strong>.",
                "Both explanations would be equally good." 
            ]
        },
        "button_task":
        { 
            question: ['Which button would you press?'], 
            options: [
               "I would press the <strong style='color:blue;'>blue</strong> button so that the probability of the <strong style='color:blue;'>blue</strong> switch turning <strong>ON</strong> increases to 90%.", 
               "I would press the <strong style='color:orange;'>orange</strong> button so that the probability of the <strong style='color:orange;'>orange</strong> switch turning <strong>ON</strong> increases to 90%.",
               "It does not matter. Pressing either button would be equally good."
            ]
        },
        "cp_instructions_key": {
            "cp_instructions_comp_0": "True",
            "cp_instructions_comp_1": "False",
            "cp_instructions_comp_2": "80%",
            "cp_instructions_comp_3": "20%",
        },
        "cp_gameplay_q1_key": {
            "cp_round_one_comp_q1_0": "True",
            "cp_round_one_comp_q1_1": "True",
            "cp_round_one_comp_q1_2": "True",
        },
        "cp_gameplay_q2_key": {
            "cp_round_two_comp_q2_0": "True",
            "cp_round_two_comp_q2_1": "True",
            "cp_round_two_comp_q2_2": "False",
        },
    },
    "disjunctive_positive":
    {
        "instructions_long":
        [
            "In this game show, participants play in teams of two. Teams start off with 0 points. The goal of the game is to win points.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn <strong>ON</strong> or <strong>OFF</strong>.",
            "In this game, the team wins a point <em>if at least one of the switches is <strong>ON</strong></em>.",
            "If <em>both switches are <strong>ON</strong></em>, the team also wins a point.",
            "If <em>both switches are <strong>OFF</strong></em>, the team <em>does not</em> win a point.",
            "Each switch has a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning <strong>ON</strong>, and a 20% chance of turning <strong>OFF</strong>.",
            "The <strong style='color:orange;'>orange</strong> switch has an 20% chance of turning <strong>ON</strong>, and a 80% chance of turning <strong>OFF</strong>.",
            "Hence, both switches have a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_short":
        [
            "Now, imagine you play <em><strong>Flip or Flop</em></strong> with another player, Alice. You and Alice play a slightly different version of the game.",
            "In this version of the game, the team wins a point <em>if at least one of the switches is <strong>ON</strong></em>.",
            "Everything else remains the same, including how likely each switch turns <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned <strong>ON</strong>, the team wins a point.", options: ["True", "False"] },
            { question: "If only one switch is turned <strong>ON</strong> and the other one is turned <strong>OFF</strong>, the team wins a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
        ],
        "round_one_long":
        [
            "As a participant of <em><strong>Flip or Flop</em></strong>, you play together in a team with Alice.<br>You have more information about the game than Alice.",
            "You know that at least one switch needs to be <strong>ON</strong> in order to score a point. <br> You know that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>. <br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Alice knows that at least one switch needs to be <strong>ON</strong> in order to score a point. <br> Alice also knows that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>. <br> However, Alice does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_short":
        [
            "You know that at least one switch needs to be <strong>ON</strong> in order to score a point. <br> You know that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>. <br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Alice knows that at least one switch needs to be <strong>ON</strong> in order to score a point. <br> Alice also knows that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>. <br> However, Alice does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>.",
        ],
        "round_one_comp_q1":
        [
            { question: "You know that at least one of the switches needs to be <strong>ON</strong> in order to score a point.", options: ["True", "False"] },
            { question: "You know that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "You know the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_one_comp_q2":
        [
            { question: "Alice knows that at least one of the switches needs to be <strong>ON</strong> in order to score a point.", options: ["True", "False"] },
            { question: "Alice knows that pressing a button will make the connected switch 90% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "Alice knows the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_two_long": 
        [
            "The first round of the game begins. Both switches turn <strong>ON</strong>, so your team scores a point!",
        ],
        "round_two_short": 
        [
            "As before, in the first round of the game, both switches turn <strong>ON</strong>, so your team scores a point!",
        ],
        "selection_task":
        { 
            question: ['If you had to choose, which of the two explanations would you give to Alice?'], 
            options: [
                "Because the <strong style='color:blue;'>blue</strong> switch turned <strong>ON</strong>.",
                "Because the <strong style='color:orange;'>orange</strong> switch turned <strong>ON</strong>.",
                "Both explanations would be equally good." 
            ]
        },
        "intervention_task":
        { 
            question: ['Which button would you press?'], 
            options: [
                "I would press the <strong style='color:blue;'>blue</strong> button so that the probability of the <strong style='color:blue;'>blue</strong> switch turning <strong>ON</strong> increases to 90%.", 
                "I would press the <strong style='color:orange;'>orange</strong> button so that the probability of the <strong style='color:orange;'>orange</strong> switch turning <strong>ON</strong> increases to 90%.",
                "It does not matter. Pressing either button would be equally good."
             ]
        },
        "dp_instructions_key": {
            "dp_instructions_comp_0": "True",
            "dp_instructions_comp_1": "True",
            "dp_instructions_comp_2": "80%",
            "dp_instructions_comp_3": "20%",
        },
        "dp_gameplay_q1_key": {
            "dp_round_one_comp_q1_0": "True",
            "dp_round_one_comp_q1_1": "True",
            "dp_round_one_comp_q1_2": "True",
        },
        "dp_gameplay_q2_key": {
            "dp_round_two_comp_q2_0": "True",
            "dp_round_two_comp_q2_1": "True",
            "dp_round_two_comp_q2_2": "False",
        },
    },
    "conjunctive_negative":
    {
        "instructions_long":
        [
            "In this game show, participants play in teams of two. Teams start off with 10 points. The goal of the game is not to lose points.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn <strong>ON</strong> or <strong>OFF</strong>.",
            "In this game, the team loses a point <em>only if both switches are <strong>ON</strong></em>.",
            "If <em>one switch is <strong>ON</strong> and the other one is <strong>OFF</strong></em>, the team <em>does not</em> lose a point.",
            "If <em>both switches are <strong>OFF</strong></em>, the team also <em>does not</em> lose a point.",
            "Each switch has a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning <strong>ON</strong>, and a 20% chance of turning <strong>OFF</strong>.",
            "The <strong style='color:orange;'>orange</strong> switch has an 20% chance of turning <strong>ON</strong>, and a 80% chance of turning <strong>OFF</strong>.",
            "Hence, both switches have a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_short":
        [
            "Now, imagine you play <em><strong>Flip or Flop</em></strong> with another player, Zarah. You and Zarah play a slightly different version of the game.",
            "In this version of the game, the team loses a point <em>only if both switches are <strong>ON</strong></em>.<br>If <em>one switch is <strong>ON</strong> and the other one is <strong>OFF</strong></em>, the team <em>does not</em> lose a point.",
            "Everything else remains the same, including how likely each switch turns <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned <strong>ON</strong>, the team loses a point.", options: ["True", "False"] },
            { question: "If only one switch is turned <strong>ON</strong> and the other one is turned <strong>OFF</strong>, the team loses a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
        ],
        "round_one_long":
        [
            "As a participant of <em><strong>Flip or Flop</em></strong>, you play together in a team with Zarah.<br>You have more information about the game than Zarah.",
            "You know that both switches need to be <strong>ON</strong> in order to lose a point. <br> You know that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>. <br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Zarah knows that both switches need to be <strong>ON</strong> in order to lose a point. <br>Zarah also knows that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.<br> However, Zarah does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_short":
        [
            "You know that both switches need to be <strong>ON</strong> in order to lose a point. <br> You know that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.<br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Zarah knows that both switches need to be <strong>ON</strong> in order to lose a point. <br>Zarah also knows that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>. <br>However, Zarah does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_comp_q1":
        [
            { question: "You know that both switches need to be <strong>ON</strong> in order to lose a point.", options: ["True", "False"] },
            { question: "You know that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "You know the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_one_comp_q2":
        [
            { question: "Zarah knows that both switches need to be <strong>ON</strong> in order to lose a point.", options: ["True", "False"] },
            { question: "Zarah knows that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "Zarah knows the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_two_long": 
        [
            "The first round of the game begins. Both switches turn <strong>ON</strong>, so your team loses a point.",
        ],
        "round_two_short": 
        [
            "As before, in the first round of the game, both switches turn <strong>ON</strong>, so your team loses a point.",
        ],
        "instructions_long_button":
        [
            "There is a button attached to each of the switches.",
            "Pressing a button will decrease the probability for that switch to turn ON to 10%.",
            "Pressing the button linked to the blue switch will decrease its probability of turning ON to 10%.",
            "Pressing the button linked to the orange switch will decrease its probability of turning ON to 10%.",
        ],
        "selection_task":
        { 
            question: ['If you had to choose, which of the two explanations would you give to Zarah?'], 
            options: [
                "Because the <strong style='color:blue;'>blue</strong> switch turned <strong>ON</strong>.",
                "Because the <strong style='color:orange;'>orange</strong> switch turned <strong>ON</strong>.", 
                "Both explanations would be equally good." 
            ]
        },
        "intervention_task":
        { 
            question: ['Which button would you press?'], 
            options: [
                "I would press the <strong style='color:blue;'>blue</strong> button so that the probability of the <strong style='color:blue;'>blue</strong> switch turning <strong>ON</strong> decreases to 10%.", 
                "I would press the <strong style='color:orange;'>orange</strong> button so that the probability of the <strong style='color:orange;'>orange</strong> switch turning <strong>ON</strong> decreases to 10%.",
                "It does not matter. Pressing either button would be equally good."
             ]
        },
        "cn_instructions_key": {
            "cn_instructions_comp_0": "True",
            "cn_instructions_comp_1": "False",
            "cn_instructions_comp_2": "80%",
            "cn_instructions_comp_3": "20%",
        },
        "cn_gameplay_q1_key": {
            "cn_round_one_comp_q1_0": "True",
            "cn_round_one_comp_q1_1": "True",
            "cn_round_one_comp_q1_2": "True",
        },
        "cn_gameplay_q2_key": {
            "cn_round_two_comp_q2_0": "True",
            "cn_round_two_comp_q2_1": "True",
            "cn_round_two_comp_q2_2": "False",
        },
    },
    "disjunctive_negative":
    {
        "instructions_long":
        [
            "In this game show, participants play in teams of two. Teams start off with 10 points. The goal of the game is not to lose points.",
            "There are two switches in this game: the <strong style='color:blue;'>blue</strong> switch and \
            the <strong style='color:orange;'>orange</strong> switch. Each switch can turn <strong>ON</strong> or <strong>OFF</strong>.",
            "In this game, the team loses a point <em>if at least one of the switches is <strong>ON</strong></em>.",
            "If <em>both switches are <strong>ON</strong></em>, the team also loses a point.",
            "If <em>both switches are <strong>OFF</strong></em>, the team <em>does not</em> lose a point.",
            "Each switch has a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
            "The <strong style='color:blue;'>blue</strong> switch has an 80% chance of turning <strong>ON</strong>, and a 20% chance of turning <strong>OFF</strong>.",
            "The <strong style='color:orange;'>orange</strong> switch has an 20% chance of turning <strong>ON</strong>, and a 80% chance of turning <strong>OFF</strong>.",
            "Hence, both switches have a different chance of turning <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_short":
        [
            "Now, imagine you play <em><strong>Flip or Flop</em></strong> with another player, Alice. You and Alice play a slightly different version of the game.",
            "In this version of the game, the team loses a point <em>if at least one of the switches is <strong>ON</strong></em>.",
            "Everything else remains the same, including how likely each switch turns <strong>ON</strong> or <strong>OFF</strong>.",
        ],
        "instructions_comp":
        [
            { question: "If both switches are turned <strong>ON</strong>, the team loses a point.", options: ["True", "False"] },
            { question: "If only one switch is turned <strong>ON</strong> and the other one is turned <strong>OFF</strong>, the team loses a point.", options: ["True", "False"] },
            { question: "How likely is the <strong style='color:blue;'>blue</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
            { question: "How likely is the <strong style='color:orange;'>orange</strong> switch to turn <strong>ON</strong>?", options: ["80%", "20%"] },
        ],
        "round_one_long":
        [
            "As a participant of <em><strong>Flip or Flop</em></strong>, you play together in a team with Alice.<br>You have more information about the game than Alice.",
            "You know that at least one switch needs to be <strong>ON</strong> in order to lose a point.<br> You know that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.<br> Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Alice knows that at least one switch needs to be <strong>ON</strong> in order to lose a point. <br>Alice also knows that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>. <br>However, Alice does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_short":
        [
            "You know that at least one switch needs to be <strong>ON</strong> in order to lose a point. <br>You know that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>. <br>Finally, you also know how likely the <strong style='color:blue;'>blue</strong> switch is to turn <strong>ON</strong> and how likely the <strong style='color:orange;'>orange</strong> switch is to turn <strong>ON</strong>.",
            "Alice knows that at least one switch needs to be <strong>ON</strong> in order to lose a point. <br>Alice also knows that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>. <br>However, Alice does not know whether the <strong style='color:blue;'>blue</strong> switch is more likely to turn <strong>ON</strong> or whether the <strong style='color:orange;'>orange</strong> switch is more likely to turn <strong>ON</strong>."
        ],
        "round_one_comp_q1":
        [
            { question: "You know that at least one of the switches needs to be <strong>ON</strong> in order to lose a point.", options: ["True", "False"] },
            { question: "You know that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "You know the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_one_comp_q2":
        [
            { question: "Alice knows that at least one of the switches needs to be <strong>ON</strong> in order to lose a point.", options: ["True", "False"] },
            { question: "Alice knows that pressing a button will make the connected switch 10% likely to turn <strong>ON</strong>.", options: ["True", "False"] },
            { question: "Alice knows the chance of each switch turning <strong>ON</strong>.", options: ["True", "False"] },
        ],
        "round_two_long": 
        [
            "The first round of the game begins. Both switches turn <strong>ON</strong>, so your team loses a point.",
        ],
        "round_two_short": 
        [
            "As before, in the first round of the game, both switches turn <strong>ON</strong>, so your team loses a point.",
        ],
        "selection_task":
        { 
            question: ['If you had to choose, which of the two explanations would you give to Alice?'], 
            options: [
                "Because the <strong style='color:blue;'>blue</strong> switch turned <strong>ON</strong>.",
                "Because the <strong style='color:orange;'>orange</strong> switch turned <strong>ON</strong>.", 
                "Both explanations would be equally good." 
            ]
        },
        "intervention_task":
        { 
            question: ['Which button would you press?'], 
            options: [
                "I would press the <strong style='color:blue;'>blue</strong> button so that the probability of the <strong style='color:blue;'>blue</strong> switch turning <strong>ON</strong> decreases to 10%.", 
                "I would press the <strong style='color:orange;'>orange</strong> button so that the probability of the <strong style='color:orange;'>orange</strong> switch turning <strong>ON</strong> decreases to 10%.",
                "It does not matter. Pressing either button would be equally good."
            ]
        },
        "dn_instructions_key": {
            "dn_instructions_comp_0": "True",
            "dn_instructions_comp_1": "True",
            "dn_instructions_comp_2": "80%",
            "dn_instructions_comp_3": "20%",
        },
        "dn_gameplay_q1_key": {
            "dn_round_one_comp_q1_0": "True",
            "dn_round_one_comp_q1_1": "True",
            "dn_round_one_comp_q1_2": "True",
        },
        "dn_gameplay_q2_key": {
            "dn_round_two_comp_q2_0": "True",
            "dn_round_two_comp_q2_1": "True",
            "dn_round_two_comp_q2_2": "False",
        },
    },
    "images": [
        "media/cp_long/explanation_selection.jpg",
        "media/cp_long/intervention_task.jpg",
        "media/cp_long/round_one_0.jpg",
        "media/cp_long/round_one_1.jpg",
        "media/cp_long/round_one_2.jpg",
        "media/cp_long/round_two_0.jpg",
        "media/cp_long/setup_0.jpg",
        "media/cp_long/setup_1.jpg",
        "media/cp_long/setup_2.jpg",
        "media/cp_long/setup_3.jpg",
        "media/cp_long/setup_4.jpg",
        "media/cp_long/setup_5.jpg",
        "media/cp_long/setup_6.jpg",
        "media/cp_long/setup_7.jpg",
        "media/cp_long/setup_8.jpg",
        "media/cp_long/buttonsetup_0.jpg",
        "media/cp_long/buttonsetup_1.jpg",
        "media/cp_long/buttonsetup_2.jpg",
        "media/cp_long/buttonsetup_3.jpg",
        

        "media/cp_short/explanation_selection.jpg",
        "media/cp_short/intervention_task.jpg",
        "media/cp_short/round_one_0.jpg",
        "media/cp_short/round_one_1.jpg",
        "media/cp_short/round_two_0.jpg",
        "media/cp_short/setup_0.jpg",
        "media/cp_short/setup_1.jpg",
        "media/cp_short/setup_2.jpg",

        "media/dp_long/explanation_selection.jpg",
        "media/dp_long/intervention_task.jpg",
        "media/dp_long/round_one_0.jpg",
        "media/dp_long/round_one_1.jpg",
        "media/dp_long/round_one_2.jpg",
        "media/dp_long/round_two_0.jpg",
        "media/dp_long/setup_0.jpg",
        "media/dp_long/setup_1.jpg",
        "media/dp_long/setup_2.jpg",
        "media/dp_long/setup_3.jpg",
        "media/dp_long/setup_4.jpg",
        "media/dp_long/setup_5.jpg",
        "media/dp_long/setup_6.jpg",
        "media/dp_long/setup_7.jpg",
        "media/dp_long/setup_8.jpg",

        "media/dp_short/explanation_selection.jpg",
        "media/dp_short/intervention_task.jpg",
        "media/dp_short/round_one_0.jpg",
        "media/dp_short/round_one_1.jpg",
        "media/dp_short/round_two_0.jpg",
        "media/dp_short/setup_0.jpg",
        "media/dp_short/setup_1.jpg",
        "media/dp_short/setup_2.jpg",

        "media/cn_long/explanation_selection.jpg",
        "media/cn_long/intervention_task.jpg",
        "media/cn_long/round_one_0.jpg",
        "media/cn_long/round_one_1.jpg",
        "media/cn_long/round_one_2.jpg",
        "media/cn_long/round_two_0.jpg",
        "media/cn_long/setup_0.jpg",
        "media/cn_long/setup_1.jpg",
        "media/cn_long/setup_2.jpg",
        "media/cn_long/setup_3.jpg",
        "media/cn_long/setup_4.jpg",
        "media/cn_long/setup_5.jpg",
        "media/cn_long/setup_6.jpg",
        "media/cn_long/setup_7.jpg",
        "media/cn_long/setup_8.jpg",
        "media/cn_long/buttonsetup_0.jpg",
        "media/cn_long/buttonsetup_1.jpg",
        "media/cn_long/buttonsetup_2.jpg",
        "media/cn_long/buttonsetup_3.jpg",

        "media/cn_short/explanation_selection.jpg",
        "media/cn_short/intervention_task.jpg",
        "media/cn_short/round_one_0.jpg",
        "media/cn_short/round_one_1.jpg",
        "media/cn_short/round_two_0.jpg",
        "media/cn_short/setup_0.jpg",
        "media/cn_short/setup_1.jpg",
        "media/cn_short/setup_2.jpg",

        "media/dn_long/explanation_selection.jpg",
        "media/dn_long/intervention_task.jpg",
        "media/dn_long/round_one_0.jpg",
        "media/dn_long/round_one_1.jpg",
        "media/dn_long/round_one_2.jpg",
        "media/dn_long/round_two_0.jpg",
        "media/dn_long/setup_0.jpg",
        "media/dn_long/setup_1.jpg",
        "media/dn_long/setup_2.jpg",
        "media/dn_long/setup_3.jpg",
        "media/dn_long/setup_4.jpg",
        "media/dn_long/setup_5.jpg",
        "media/dn_long/setup_6.jpg",
        "media/dn_long/setup_7.jpg",
        "media/dn_long/setup_8.jpg",

        "media/dn_short/explanation_selection.jpg",
        "media/dn_short/intervention_task.jpg",
        "media/dn_short/round_one_0.jpg",
        "media/dn_short/round_one_1.jpg",
        "media/dn_short/round_two_0.jpg",
        "media/dn_short/setup_0.jpg",
        "media/dn_short/setup_1.jpg",
        "media/dn_short/setup_2.jpg"
    ]
};