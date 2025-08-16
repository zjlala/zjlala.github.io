---
icon: pen-to-square
date: 2022-01-01
category:
  - 爬虫
tag:
  - 爬虫
  - web
---

# 爬虫概念
<!-- more -->
## 爬虫概述

### 什么是爬虫
  爬虫就是通过编写程序来爬取互联网上的优秀资源(图片, 音频, 视频, 数据)

## 爬虫hello world

谈到爬虫一般都会使用python，因为简单，支持爬虫的第三方库；所以第一个爬虫的案例也是基于python的:
```python HelloWorld.py
from urllib.request import urlopen
url = "http://www.baidu.com"
response = urlopen(url)
result = response.read().decode('utf-8')
print(result)
// 输出的结果是一段访问baidu返回的html
```
![返回结果](https://origin.picgo.net/2025/08/14/180ab92d90c1e9a6a.png)
## web请求全过程
做爬虫开发中，重要的一点是要熟悉一个web请求的全过程，这里只对过程做个整体上的讲解，够爬虫开始使用即可
请求的模型大概有两种，一种是服务器返回静态页面的请求响应，另一种是动静分离的请求响应
![请求响应模型](https://pic.demosoftware.cn/crawler/2.png)
## http协议
