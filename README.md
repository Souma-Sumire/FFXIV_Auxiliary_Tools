# FFXIV_Auxiliary_Tools

* QQ群:868116069
  * [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)
  * [别像Stupid一样提问](https://github.com/dogfight360/Stop-Ask-Questions-The-Stupid-Ways/blob/master/README.md)
  * [如何优雅的提问](http://www.360doc.com/content/19/1223/08/30422483_881502108.shtml)
  
## 基础依赖

1. 你必须启用 [DirectX 11](https://support.microsoft.com/zh-cn/help/179113/how-to-install-the-latest-version-of-directx) 来运行 最终幻想14
1. 安装64位版本的 ACT
[原版](http://advancedcombattracker.com/) /
[咖啡整合](https://nga.178.com/read.php?tid=17412506) /
[呆萌整合](https://nga.178.com/read.php?tid=19019884)
1. 加载FF14解析插件 整合版 /
[国际服](https://github.com/ravahn/FFXIV_ACT_Plugin/releases/latest)
的最新版本，启用网络解析，并确保没有防火墙或安全软件阻止ACT。
1. [Hojoring](https://github.com/anoyetta/ACT.Hojoring) /
[Triggernometry](https://github.com/paissaheavyindustries/Triggernometry)
1. **确保游戏中聊天框的消息没有被过滤（重要）**
[设置过滤 - 视频演示](https://www.bilibili.com/video/av83704576/)
1. 设置战斗间隔为50秒以上
![设置战斗间隔](screenshots/设置战斗间隔.png)

## 必读！！！！ 配置 Triggernometry 环境

1. **以管理员身份运行** `添加触发器目录与鲶鱼精邮差端口到环境变量.bat`

   ![环境变量](screenshots/环境变量.png)

1. 出现这个字样代表成功
  
   ![环境变量成功](screenshots/环境变量成功.png)
1. **重新启动ACT**

### 鲶鱼精邮差

1. 下载并运行 [鲶鱼精邮差](https://nga.178.com/read.php?tid=19724323)
1. 找一个端口 开始监听。比如2019
1. 如果不是2019，在 Bat右键编辑 倒数第二行 修改为你监听的端口并保存
1. **以管理员身份运行** bat
1. **重新启动ACT**

   ![修改邮差端口](screenshots/修改邮差端口.png)

## 自定义项目

### 修改副本触发器的字幕样式

* 在 “副本触发器 - Func - 字幕提示” 的内部，编辑 “文本Aura” 的属性 可以修改字体的样式
  ![设置字幕](screenshots/设置字幕.png)

### 触发器改自定义语音包

* ![TTS改自定义语音包](screenshots/TTS改自定义语音包.gif)

### 让Triggernometry触发器使用ACT的TTS插件

* ![让触发器调用ACT的TTS](screenshots/让触发器调用ACT的TTS.gif)

### Hojoring时间轴背景

#### 背景样式设置

* 一个透明无颜色的配置是#00000000  
  第1-2位是背景的不透明度的16进制,如果你想要透明50%(127),则为"7F"  
  第3-4位是颜色的R值的16进制  5-6位是G值的16进制 7-8位是B值的16进制  

  例如你想要一个RGB(0,108,191)透明度为90%的蓝色背景，  
  设置则应该填入：#E6006CBF  

  [在线进制转换](https://tool.oschina.net/hexconvert/)

  [RGB颜色值与十六进制颜色码转换工具](https://www.sioe.cn/yingyong/yanse-rgb-16/)

#### 内部文字样式设置

* 预览图中的设置

  | 样式名 | 填充颜色  | 轮廓颜色  |
  |--------|-----------|-----------|
  | AoE    | #FF9370DB | #FF000000 |
  | 伤害   | #FFEDCA00 | #FF000000 |
  | 分摊   | #FF00B2ED | #FF000000 |
  | 死刑   | #FFE93F00 | #FF000000 |

## 杂项说明

* 如果Triggernometry的_ffixvplayer方法失效，可以尝试关闭汉化（改回英文）、取消自定义职业排序

* 设置E4S职能位置
  ![设置职能位置](screenshots/设置职能位置.gif)

* 触发器延迟
  * 关闭不需要的触发器组
  * 没开`鲶鱼精邮差`的时候**不要启用**需要邮差的触发器
  * 尝试更改ACT的CPU优先级
    ![调整CPU优先级](screenshots/调整CPU优先级.jpg)
