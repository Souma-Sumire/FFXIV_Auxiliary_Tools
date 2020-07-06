# FFXIV_Auxiliary_Tools

* QQ群:868116069
  * [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)
  * [别像Stupid一样提问](https://github.com/dogfight360/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)
  * [如何优雅的提问](http://www.360doc.com/content/19/1223/08/30422483_881502108.shtml)

* 下载分流
  * [Github](https://github.com/553469159/FFXIV_Auxiliary_Tools)
  * [Gitee](https://gitee.com/soumasumire/FFXIV_Auxiliary_Tools)
  * [微云](https://share.weiyun.com/5iGr11Z)
* 部分触发器依赖 [鲶鱼精邮差](https://nga.178.com/read.php?tid=19724323)

## 自助排障

  1. 导入`Triggernometry触发器\Test自助排障.xml`
  1. 前往"中拉诺西亚-盛夏农庄"
  1. 对木人 “行礼” 进行测试 
  
  1. 正常状态![Test](https://i.loli.net/2020/07/01/Q3hyfNpnu54vemd.png)
  1. 对木人 “告别” 以提前关闭窗口
  
## 基础依赖

  1. 启用 DirectX 11
  1. 安装 [ACT呆萌整合](https://nga.178.com/read.php?tid=19019884) / [Triggernometry](https://github.com/paissaheavyindustries/Triggernometry)
  1. **聊天框的消息没有被过滤** [视频演示](https://www.bilibili.com/video/av83704576/)
  1. 设置ACT战斗间隔为60秒以上 ![设置战斗间隔](screenshots/设置战斗间隔.png)

## 配置触发器环境

1. 右键编辑`配置环境变量.bat.bat` 在倒数第二行 将2019修改为你`鲶鱼精邮差`的端口并保存关闭
   ![修改邮差端口](screenshots/修改邮差端口.png)
1. **以管理员身份运行** `配置环境变量.bat`

   ![环境变量](screenshots/环境变量.png)

1. 出现这个字样代表成功
  
   ![环境变量成功](screenshots/环境变量成功.png)
1. **重新启动ACT**

## 让Triggernometry触发器使用ACT的TTS插件

* ![让触发器调用ACT的TTS](screenshots/让触发器调用ACT的TTS.gif)

## 杂项说明

* 如果Triggernometry的_ffixvplayer方法失效，可以尝试取消其自定义职业排序

* 触发器延迟
  * 关闭不需要的触发器组
  * 没开`鲶鱼精邮差`的时候**不要启用**需要邮差的触发器
  * 尝试更改ACT的CPU优先级
    ![调整CPU优先级](screenshots/调整CPU优先级.jpg)

  * Aho是国际服触发器汉化而来，非原创。@Discord: Aho Senpai#0818
