# 可视化大屏（flask + echarts）

目录结构

```python
- data(存放开源数据)
	- nba_data.csv 
  - school.csv
- static（存放静态资源）
	- css
  	- index.css   (板块划分)
  - js
  	- echarts（echarts图）
    	- area_r2.js   右下面积图
      - bar_r1.js    右上柱状图
      - controller.js 控制器（数据动态与后台交互）
      - cross_c2.js		中间折线图
      - pie_l1.js			左上饼图
      - scatter_l2.js	左下散点图
    - echarts.min.js  		资源
    - jquery-3.6.0.min.js 资源
- templates（放网页）
	- index.html      首页（直接打开原始数据是乱的，需要运行服务器后打开从后端传入数据）
- app.py    主文件
- utils.py  工具类（处理数据）
```

运行过程

```python
# 安装好相应的包
# 打开app.py   运行即可
```

注意

```python
# 五个图都与后端数据连接，属于动态数据
# 如果运行后页面跳动（简易调整浏览器比例）或者用火狐
```

