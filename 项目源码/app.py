# -*- coding: utf-8 -*-
# @author: wesley
# @time: 2021/6/25:13:19
# @software: PyCharm

from flask import Flask, render_template, request, jsonify
import utils
import pandas as pd

app = Flask(__name__)
app.debug = True
app.config['JSON_AS_ASCII'] = False


# 首页
@app.route("/")
def index():
    return render_template("index.html")


# --------------------------------------api------------------------------------
# 获取时间
@app.route("/time")
def get_time():
    return utils.get_time()


# 左边第一个图api接口
@app.route("/pie_l1_api")
def pie_l1_api():
    data = []
    name = utils.getData_pie_l1(data_csv)[0]
    money = utils.getData_pie_l1(data_csv)[1]
    for i in range(len(name)):
        data.append({"value": money[i], "name": name[i]})
    return jsonify(data)


@app.route("/scatter_l2_api")
def scatter_l2_api():
    # data_point = utils.getData_scatter_l2(data_csv)[1]
    result = utils.getData_scatter_l2(data_csv)
    # print(data_point)
    return jsonify(result)


# 右边第一个图api接口
@app.route("/bar_r1_api")
def bar_r1_api():
    result = utils.getData_bar_r1(data_csv)
    return jsonify({"position": result[0], "highest": result[1], "lowest": result[2], "average": result[3]})


# 右边第二个图api接口
@app.route("/area_r2_api")
def area_r2_api():
    data_list = utils.getData_area_r2(data_csv)
    # name, attack, defense, height, weight, age, ball_age
    name = data_list[0]               # 横坐标
    attack = data_list[1]
    defense = data_list[2]
    height = data_list[3]
    weight = data_list[4]
    age = data_list[5]
    return jsonify({"name": name, "attack": attack, "defense": defense,
                    "height": height, "weight": weight, "age": age})

@app.route("/cross_c2_api")
def cross_c2_api():
    position = utils.getData_cross_c2(data_csv)[0]
    attack = utils.getData_cross_c2(data_csv)[1]
    defence = utils.getData_cross_c2(data_csv)[2]
    return jsonify({"position": position, "attack": attack, "defence": defence})


if __name__ == '__main__':
    data_csv = pd.read_csv("data/nba_data.csv")
    app.run()
