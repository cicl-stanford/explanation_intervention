# Data readme

Information about the different data files. 

## data_int_combined.csv

- causal_structure: conjunctive/disjunctive 
- outcome: positive/negative 
- experiment: 
	- hard: intervention sets it to 1 (positive) or 0 (negative)
	- soft: intervention increases by 0.2 (positive) or decreases by 0.2 (negative)
	- fixed: intervention sets to 0.9 (positive) or 0.1 (negative)
- choice: 	abnormal/normal/nopreference 
- type: 
	- explanation: selections in the explanation phase of the experiment 
	- intervention: selections in the intervention phase of the experiment 
	
- note: 
	- the abnormal switch has a 20% of turning on
	- the normal switch has an 80% of turning on 

- "experiment" and "outcome" were varied between participants
- "causal_structure" was varied within participants 