# Explanations Communiate Optimal Interventions


This repository contains the experiment, data, analyses and figured for the  CogSci 2024 paper <a href="https://psyarxiv.com/XXX/">"Do as I explain" Explanations communiate optimal interventions"</a> by Lara Kirfel, Jacqueline Harding, Jeong Shin, Cindy Wu, Thomas Icard and Tobias Gerstenberg.

## Abstract

People often select only a few events when explaining what happened. What drives people's explanation selection? Prior research argued that people's explanation choices are affected by event normality and causal structure. Here, we propose a new model of these existing findings and test its predictions in a novel experiment. The model predicts that speakers value accuracy and relevance. They choose explanations that are true, and that communicate useful information to the listener. We test the model's predictions empirically by manipulating what goals a listener has and what actions they can take. Across twelve experimental conditions, we find that our model accurately predicts that people like to choose explanations that communicate optimal interventions.

## Pre-registrations 

<ul>
  <li>the pre-registrations for all experiments may be accessed via the Open Science Framework <a href="https://osf.io/fpyst/">here</a>.</li> 
  <li>separate links for each experiment:</li>
   <ul>
      <li><a href="https://osf.io/8k9sy">Condition "Hard Intervention / Negative Outcome" </a></li>
      <li><a href="https://osf.io/7qzu9">Condition "Hard Intervention / Positive Outcome" </a></li>
      <li><a href="https://osf.io/aw286">Condition "Soft Intervention / Negative Outcome" </a></li>
      <li><a href="https://osf.io/dmgcw">Condition "Soft Intervention / Positive Outcome" </a></li>
      <li><a href="https://osf.io/49bfq">Condition "Fixed Intervention / Negative Outcome" </a></li>
      <li><a href="https://osf.io/rbu7y">Condition "Fixed Intervention / Positive Outcome" </a></li>
    </ul>
</ul> 


## Repository structure 

```
├── code
│   ├── R
├── data
├── docs
│   ├── experiment1 (Hard Intervention)
│   ├── experiment2 (Soft Intervention)
│   └── experiment3 (Fixed Intervention)
└── figures
    └── plots
```

### code 

Contains all code including the R code for analyzing data and generating figures, written in R. 
See the rendered file <a href="https://cicl-stanford.github.io/father-dont-forgive/">here</a>.

### docs

Contains all the experiment code. You can preview the experiments below:

Condition "Hard Intervention / Positive Outcome": <a href="https://cicl-stanford.github.io/explanation_intervention/experiment_1/index.html?condition=1">Click here!</a>

Condition "Hard Intervention / Negative Outcome": <a href="https://cicl-stanford.github.io/explanation_intervention/experiment_1/index.html?condition=3">Click here!</a>

Condition "Soft Intervention / Positive Outcome": <a href="https://cicl-stanford.github.io/explanation_intervention/experiment_2/index.html?condition=1">Click here!</a>

Condition "Soft Intervention / Negative Outcome": <a href="https://cicl-stanford.github.io/explanation_intervention/experiment_2/index.html?condition=3">Click here!</a>

Condition "Fixed Intervention / Positive Outcome": <a href="https://cicl-stanford.github.io/explanation_intervention/experiment_3/index.html?condition=1">Click here!</a>

Condition "Fixed Intervention / Negative Outcome": <a href="https://cicl-stanford.github.io/explanation_intervention/experiment_3/index.html?condition=3">Click here!</a>


### data 

Contains anonymized combined data for all experimental conditions (hard / soft / fixed intervention x positive / negative outcome) (for raw data and how these were computed, see <code>code/R/</code>). 

For example, <code>fixedint_negative.csv</code> contains the average percentage of choice selection (abnormal switch, normal switch, no preference) in the intervention and explanation task. 

<code>data_int.csv</code> combines all four dataframes (hardint_pos, hardint_neg, softint_pos, softint_neg, fixedint_pos, fixedint_neg)

### code

<ul>
  <li><code>R/experiments</code> contains all raw data from all experimental conditions.
    <ul>
      <li><code>[...]study_X-responses.csv</code> contains the response data (i.e., intervention and explanation selection).</li>
      <li><code>[...]study_X-participants.csv</code> contains demographic information and post-experiment feedback/comments from participants.</li>
      <li><code>Experiment.rmd</code> reads in the response data from each experimental condition (e.g., fixed intervention / negative), calculates average responses and outputs these in a new data file (e.g., <code>fixedint_negative.csv</code>).
        <ul>
          <li>All further analyses on the data and and plots can be seen here.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>


### figures 

contains all the figures from the paper (generated using the script in <code>code/R<code/>).


## General points

- for folder and file names: 
	+ don't use white space in either folder or filenames, use an underscore "_" instead
	+ (almost always) use lower case only
- always use relative paths in your code
	+ for example, to save a figure from an R script inside the `code/R/` folder the path should be "../../figures/figure_name.pdf"
- keep your folder structure organized
	+ we recommend adhering to the folder structure in this repository 
	+ more complex projects may have additional folders such as `videos/`, `papers/`, ...
- note: some of the folders are empty except for a `.keep` file
	+ the `.keep` file is just there to make sure that github includes the otherwise empty folder 
	+ feel free to delete the `.keep` file once you've added another file to that folder
- each code subfolder has a readme file that should be updated with information about the code scripts 
- use github issues to keep track of any larger decisions that we make along the way 
- make sure to create a slack channel for each project, link up the github repository with the slack channel, and add the people working on the project to the github repo and slack channel 
- see our lab wiki for more help: https://github.com/cicl-stanford/wiki/wiki

## Repository structure 

```
├── code
│   ├── R
│   ├── bash
│   ├── experiments
│   └── python
├── data
├── figures
├── papers
├── presentation
└── writeup
```

### code 

Put all your code here. Use a separate folder for scripts based on the programming language. 

#### experiments 

The experiments folder is for the online (or in lab) experiments. Each experiment should be in its own folder. When you run another experiment, make sure to create a new folder (so that we always know what an experiment looked like when it was run). In readme file for the experiments folder, provide a brief summary of each experiment. Also note down any additional information that may not be saved within each experiment (e.g. how much the payment was for MTurk participants).

### data 

Put your raw data files here. Any data wrangling to that file should happen in your code scripts. 

### figures 

Save all your figures here. You may want to include additional subfolder here such as `plots/`, `diagrams/` etc. 

### papers 

Put research papers here that are relevant for your project. 

### presentation

Put your project presentation here (e.g. your keynote, powerpoint, google slides, or pdf file).

### writeup 

Put all your writing here. This folder structure is likely to expand for more complex projects. For example, you could add a subfolders like folders `journal/cognition/submission/`, `proceedings/cogsci/resubmission/` etc. 
