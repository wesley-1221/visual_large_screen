# -*- coding: utf-8 -*-
# @author: wesley
# @time: 2021/6/25:14:18
# @software: PyCharm

import time
import pandas as pd

data_csv = pd.read_csv("data/nba_data.csv")

# 获取时间
def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年", "月", "日")


# 获取top10薪资
def getData_pie_l1(data):
    data = data.sort_values(by="球员薪金", ascending=False)
    name = data["球员姓名"].tolist()[0:10]
    money = data["球员薪金"].tolist()[0:10]
    return name, money


# 散点图，出场时间和薪资
def getData_scatter_l2(data):
    # 获取标记点
    # money_min_id = data['球员薪金'].idxmin()
    # money_max_id = data['球员薪金'].idxmax()
    # money_time_max = data.loc[money_max_id]["场均时间"]
    # money_max = data.loc[money_max_id]["球员薪金"]
    # money_time_min = data.loc[money_min_id]["场均时间"]
    # money_min = data.loc[money_min_id]["球员薪金"]
    # data_point = [[money_time_max, money_max], [money_time_min, money_min]]
    # print(data_point)
    # [[33.38, 3468], [8.78, 7]]
    # 出场时间和薪资 数据
    result = [[value['场均时间'], value['球员薪金']] for index, value in data.iterrows()]
    return result


# 获取各个位置得身高得最大，最小，平均值
def getData_bar_r1(data):
    result = data.groupby('位置')['身高'].agg(['max', 'min', 'mean']).reset_index()
    position = result["位置"].tolist()
    highest = result["max"].tolist()
    lowest = result["min"].tolist()
    average = result["mean"].round(2).tolist()
    return position, highest, lowest, average

# 薪资最高的10位的进攻能力，防守能力，身高，体重，年龄，球龄
def getData_area_r2(data):
    data = data.sort_values(by="球员薪金", ascending=False)
    name = data["球员姓名"].tolist()[0:10]
    attack = data["进攻能力"].round(2).tolist()[0:10]
    defense = data["防守能力"].tolist()[0:10]
    height = data["身高"].tolist()[0:10]
    weight = data["体重"].tolist()[0:10]
    age = data["年龄"].tolist()[0:10]
    return name, attack, defense, height, weight, age

def getData_cross_c2(data):
    attack_df = data.groupby('位置')['进攻能力'].mean().reset_index()
    defense_df = data.groupby('位置')['防守能力'].mean().reset_index()
    positon = attack_df["位置"].tolist()
    attack = attack_df["进攻能力"].tolist()
    defense = defense_df["防守能力"].tolist()
    return positon, attack, defense


getData_cross_c2(data_csv)










