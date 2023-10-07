import numpy as np
import pandas as pd

df_demo = pd.read_csv("res/DEMO_J.csv")
df_dr1 = pd.read_csv("res/DR1TOT_J.csv")
df_whq = pd.read_csv("res/WHQ_J.csv")

# drop unused columns

df_demo = df_demo[['SEQN', 'RIDAGEYR']]
df_dr1 = df_dr1[['SEQN', 'DR1TCAFF']]
df_whq = df_whq[['SEQN', 'WHD020']]

# preprocess values

df_demo = df_demo.dropna()
df_dr1 = df_dr1.dropna()
df_whq = df_whq.dropna()

df_dr1['DR1TCAFF'] = np.where(df_dr1['DR1TCAFF'] < 0.001, 0, df_dr1['DR1TCAFF'])

# match to the ages constraint

df_whq = df_whq.drop_duplicates(subset=['SEQN'])

df_dr1 = df_dr1[df_dr1['SEQN'].isin(df_whq['SEQN'])]
df_demo = df_demo[df_demo['SEQN'].isin(df_whq['SEQN'])]

# match to the nutrient intake constraint

df_demo = df_demo[df_demo['SEQN'].isin(df_dr1['SEQN'])]
df_whq = df_whq[df_whq['SEQN'].isin(df_dr1['SEQN'])]

# combine to one dataframe

df = pd.merge(df_demo, df_dr1, on='SEQN', how='inner')
df = pd.merge(df, df_whq, on='SEQN', how='inner')

print(df)