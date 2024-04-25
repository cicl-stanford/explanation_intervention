# Explanations Communiate Optimal Interventions


This repository contains the experiment, data, analyses and figured for the paper CogSci 2024 paper <a href="https://psyarxiv.com/XXX/">"Do as I explain" Explanations communiate optimal interventions"</a> by Lara Kirfel, Jacqueline Harding, Jeong Shin, Cindy Wu, Thomas Icard and Tobias Gerstenberg.

## Abstract

People often select only a few events when explaining what happened. What drives people's explanation selection? Prior research argued that people's explanation choices are affected by event normality and causal structure. Here, we propose a new model of these existing findings and test its predictions in a novel experiment. The model predicts that speakers value accuracy and relevance. They choose explanations that are true, and that communicate useful information to the listener. We test the model's predictions empirically by manipulating what goals a listener has and what actions they can take. Across twelve experimental conditions, we find that our model accurately predicts that people like to choose explanations that communicate optimal interventions.

## Pre-registrations 

<ul>
  <li>the pre-registrations for all experiments may be accessed via the Open Science Framework <a href="https://osf.io/9tm3f/">here</a>.</li> 
  <li>separate links for each experiment:</li>
   <ul>
      <li><a href="https://osf.io/79f8m">Experiment 1</a></li>
      <li><a href="https://osf.io/8dmr4">Experiment 2a</a></li>
      <li><a href="https://osf.io/cnuqb">Experiment 2b</a></li>
      <li><a href="https://osf.io/qdkhc">Experiment 3</a></li>
    </ul>
</ul> 


## Repository structure 

```
├── code
│   ├── R
│   ├── bash
│   ├── experiments
│   └── python
├── data
├── docs
│   ├── experiment1
│   ├── experiment2a
│   ├── experiment2b
│   └── experiment3
└── figures
    └── plots
```

### code 

Contains all code including the R code for analyzing data and generating figures, written in R. 
See the rendered file <a href="https://cicl-stanford.github.io/father-dont-forgive/">here</a>.

### docs

contains all the experiment code. You can preview the experiments below:

Experiment 1: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment1/index.html?condition=1">Click here!</a>

Experiment 2a: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment2a/index.html?condition=1">Click here!</a>

Experiment 2b: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment2b/index.html?condition=1">Click here!</a>

Experiment 3: <a href="https://cicl-stanford.github.io/father-dont-forgive/experiment3/index.html?condition=1">Click here!</a>


### data 

contains anonymized data from all experiments. For each experiment:

<code>[...]study_X-responses.csv</code> contains the response data (i.e. responsibilty judgments).

<code>[...]study_X-participants.csv</code> contains demographic information and post-experiment feedback/comments from participants.

### figures 

contains all the figures from the paper (generated using the script in code/R).



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
