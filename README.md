# Explanations Communicate Optimal Interventions


This repository contains the experiment, data, analyses and figured for the  CogSci 2024 paper <a href="https://psyarxiv.com/XXX/">"Do as I explain" Explanations communiate optimal interventions"</a> by Lara Kirfel, Jacqueline Harding, Jeong Shin, Cindy Wu, Thomas Icard and Tobias Gerstenberg.

## Abstract

People often select only a few events when explaining what happened. What drives people's explanation selection? Prior research argued that people's explanation choices are affected by event normality and causal structure. Here, we propose a new model of these existing findings and test its predictions in a novel experiment. The model predicts that speakers value accuracy and relevance. They choose explanations that are true, and that communicate useful information to the listener. We test the model's predictions empirically by manipulating what goals a listener has and what actions they can take. Across twelve experimental conditions, we find that our model accurately predicts that people like to choose explanations that communicate optimal interventions.

## Pre-registrations

- the pre-registrations for all experiments may be accessed via the Open Science Framework [here](https://osf.io/fpyst/)
- separate links for each experiment:
  - [Condition "Hard Intervention / Negative Outcome"](https://osf.io/8k9sy)
  - [Condition "Hard Intervention / Positive Outcome"](https://osf.io/7qzu9)
  - [Condition "Soft Intervention / Negative Outcome"](https://osf.io/aw286)
  - [Condition "Soft Intervention / Positive Outcome"](https://osf.io/dmgcw)
  - [Condition "Fixed Intervention / Negative Outcome"](https://osf.io/49bfq)
  - [Condition "Fixed Intervention / Positive Outcome"](https://osf.io/rbu7y)

## Repository structure

```
.
├── code
│   └── R
├── data
├── docs
│   ├── analyses
│   ├── experiment_1
│   ├── experiment_2
│   └── experiment_3
├── figures
│   └── plots
└── writeup
    └── cogsci
```

### code

This folder contains two types of R scripts. 

- The model predictions can be seen [here](https://cicl-stanford.github.io/explanation_intervention/analyses/model/index.html) 

- The analyses and plots can be seen [here](https://cicl-stanford.github.io/explanation_intervention/analyses/experiments/index.html)

<ul>
  <li><code>R/optimal_intervention_model</code>
    <ul>
      <li> <code>R/optimal_intervention.rmd</code> creates the model predictions for the intervention model, the truth model and a combined model.</li>
          <ul>
      <li><code>explanation_predictions_truth_only.csv</code>, for example, contains the predictions for a "Truth Only" model.</li>
           </ul>
    </ul>
  </li>
  <li><code>R/experiments</code>
    <ul>
      <li> This folder contains all raw data from all experimental conditions.
        <ul>
          <li><code>[...]study_X-responses.csv</code> contains the response data (i.e., intervention and explanation selection).</li>
          <li><code>[...]study_X-participants.csv</code> contains demographic information and post-experiment feedback/comments from participants.</li>
          <li><code>Experiment.rmd</code> reads in the response data from each experimental condition (e.g., fixed intervention / negative), calculates average responses and outputs these in a new data file (e.g., <code>fixedint_negative.csv</code>).
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

### docs

Contains all the experiment code. You can preview the experiments below:

- [Condition "Hard Intervention / Positive Outcome"](https://cicl-stanford.github.io/explanation_intervention/experiment_1/index.html?condition=1)

- [Condition "Hard Intervention / Negative Outcome"](https://cicl-stanford.github.io/explanation_intervention/experiment_1/index.html?condition=3)

- [Condition "Soft Intervention / Positive Outcome"](https://cicl-stanford.github.io/explanation_intervention/experiment_2/index.html?condition=1)

- [Condition "Soft Intervention / Negative Outcome"](https://cicl-stanford.github.io/explanation_intervention/experiment_2/index.html?condition=3)

- [Condition "Fixed Intervention / Positive Outcome"](https://cicl-stanford.github.io/explanation_intervention/experiment_3/index.html?condition=1)

- [Condition "Fixed Intervention / Negative Outcome"](https://cicl-stanford.github.io/explanation_intervention/experiment_3/index.html?condition=3)


### data

Contains anonymized combined data for all experimental conditions (hard / soft / fixed intervention x positive / negative outcome) (for raw data and how these were computed, see <code>code/R/</code>). 

For example, <code>fixedint_negative.csv</code> contains the average percentage of choice selection (abnormal switch, normal switch, no preference) in the intervention and explanation task. 

<code>data_int.csv</code> combines all four dataframes (hardint_pos, hardint_neg, softint_pos, softint_neg, fixedint_pos, fixedint_neg)


### figures

contains all the figures from the paper (generated using the script in <code>code/R/experiments</code>).

### writeup

contains a pdf of the CogSci 2024 paper.

## CRediT

Please see [here](https://www.elsevier.com/researcher/author/policies-and-guidelines/credit-author-statement) for definitions of the different terms. 

|                        | Lara | Jacqueline | Jeong | Cindy | Thomas | Tobias |
|----------------------------|------|------------|-------|-------|--------|--------|
| Conceptualization          | X    |            |       |       | X      | X      |
| Methodology                | X    | X          | X     |       |        | X      |
| Software                   | X    | X          | X     | X     |        | X      |
| Validation                 | X    |            |       |       |        | X      |
| Formal analysis            | X    | X          |       |       |        | X      |
| Investigation              | X    |            | X     |       |        |        |
| Resources                  |      |            |       |       |        |        |
| Data Curation              | X    |            |       |       |        | X      |
| Writing - Original Draft   | X    | X          |       |       |        |        |
| Writing - Review & Editing | X    | X          | X     | X     | X      | X      |
| Visualization              |      |            |       |       |        | X      |
| Supervision                |      |            |       |       | X      | X      |
| Project administration     |      |            |       |       |        | X      |
| Funding acquisition        |      |            |       |       |        | X      |