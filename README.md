# soccerGame

-----
README | 中文

## 项目介绍

soccerGame：一个基于egret(白鹭游戏引擎)开发的简单简单简单游戏(wu liao)项目，接着上面实现的卡牌游戏，趁热打铁，再次熟练eui(os: 拖拽操作)操作，同时使用tween来实现soccer的动画。

## 项目演示

![soccerGame.gif](https://upload-images.jianshu.io/upload_images/3378252-6df19bc3035befc6.gif?imageMogr2/auto-orient/strip)

## 项目功能结构

![soccerGame.png](https://upload-images.jianshu.io/upload_images/3378252-0e3960994ff5b7f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目运行

```shell
$ egret build xxx(项目名)
$ egret startserver xxx(项目名) -a
```

## 项目剖析

简单来说就是用eui搭建好主要的场景页面，然后在用ts去控制之间的交互。

### eui组成页面

**拖拖拖点点点**即可

![image.png](https://upload-images.jianshu.io/upload_images/3378252-7d57a5d67b3ee7b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### ts控制交互

主要通过按钮状态控制游戏进度，和足球的随机进球，这里的随机进球很简单，通过**Math.random**，如果 > 0.5,则上半边win，否则下半边win

### 注意

下面介绍几个有意思的点。

#### 1.tween

这里使用了tween来做soccer上下滚动的动画，参考对应[TweenApi](https://developer.egret.com/cn/article/index/id/576)。

#### 2.按钮状态

在通过按钮控制游戏进度的时候，我们用到了这行：

```
this.btn_start.currentState  =  "xxx(可选：up pause resume和reset)";
```
![image.png](https://upload-images.jianshu.io/upload_images/3378252-b06906fc3f9c80bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们在按钮的源码中通过设置`source.xxx`来控制按钮不同状态下使用哪张图片。

#### 3.按钮的大小缩放效果（不使用tween）

> 步骤：

`1.找到对应button，在wing中点击上方的源码`
`2.找到对应源码，加上红框中的代码`
![image.png](https://upload-images.jianshu.io/upload_images/3378252-743589d95f74056f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###### 接下来说这几行的意思：

width和height为90%，表示其最初大小只有原本的90%；width.down和height.down为100%，表示点击后按钮的大小会变为100%，也就是增大10%；horizontalCenter和verticalCenter为0，则表示其缩放点为**正中心**

## 项目源码

代码中写了很多注释，基本都能看懂就不再赘述啦~

[源码地址](https://github.com/zhangjing9898/soccerGame)




