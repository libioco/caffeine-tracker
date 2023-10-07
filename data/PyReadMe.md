# Data ReadMe

## Overview

Welcome to the Data folder of the Caffeine Intake Analysis Project. This folder contains the raw data files and provides instructions on how to use them for analysis. The primary goals of this project include exploring the relationships between caffeine intake and age, caffeine intake and weight, as well as a combined analysis of caffeine intake with age and weight.

## Data Files

1. `DEMO_J.csv`: This CSV file contains data related to demographic data, which will be used for finding the weight (kg) and age (y) of the individuals.

2. `DR1TOT_J.csv`: This CSV file contains data related to nutritional data, which will be used for getting the caffeine intake (mg).

## Data Analysis

To analyze the relationships between caffeine intake, age, and weight, we perform the following steps:

1. **Data Preprocessing**: We preprocess the data from `DEMO_J.csv` and `DR1TOT_J.csv`, ensuring data consistency and formatting.

2. **Exploratory Data Analysis (EDA)**: We conduct exploratory data analysis to understand the distributions of caffeine intake, age, and weight. This involves generating histograms and density plots to visualize the data.

3. **Statistical Analysis**: To create trends and find the means and standard deviations of all three bell curves (caffeine intake, age, weight), we perform statistical analyses. Specifically, we calculate:
   - Mean and Standard Deviation of Caffeine Intake
   - Mean and Standard Deviation of Age
   - Mean and Standard Deviation of Weight

4. **Visualization**: We create visualizations, such as bell curve plots, to represent the distributions and trends of these variables.

## Integration Functions

To integrate the data analysis results into the main server, there are integration functions in the `main.py` file. These functions allow the server to access the analyzed data conveniently.

## Usage

- Use the raw data files (`caffeine_data.csv`, `age_data.csv`) for further analysis or exploration as needed.
- If you are working on the main server integration, refer to the integration functions provided in the `main.py` file. (Might have a more detailed docs late)
