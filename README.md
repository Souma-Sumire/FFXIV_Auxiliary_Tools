# FFXIV_Auxiliary_Tools

- QQ群:868116069([如何优雅的提问](<http://www.360doc.com/content/19/1223/08/30422483_881502108.shtml>))
  
## 基础依赖

- 启用 DirectX 11 运行 最终幻想14
- [ACT呆萌整合](https://nga.178.com/read.php?tid=19019884) / [FFCafe国服整合](https://ffcafe.org/act/) / [Triggernometry](https://github.com/paissaheavyindustries/Triggernometry)

## 可选依赖

- [鲶鱼精邮差](https://github.com/Natsukage/PostNamazu)

## 导入触发器（选其1）

### 本地（修改方便）

- 下载本仓库，然后手动导入xml文件。

### 远程（可保持最新版本）

1. ![远程触发器](screenshots/远程触发器.png)
1. ![远程触发器导入](screenshots/远程触发器导入.png)

1. 输入地址：

- 副本触发器
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E5%89%AF%E6%9C%AC%E8%A7%A6%E5%8F%91%E5%99%A8/5.0%E8%A7%A6%E5%8F%91%E5%99%A8.xml`

- 团队技能监控
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/TeamWatch%E5%9B%A2%E9%98%9F%E6%8A%80%E8%83%BD%E7%9B%91%E8%A7%86/TeamWatch.xml`

- Zeffuro's Trigger Repository 国服适配版
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/Zeffuro's%20Trigger%20Repository%20%E5%9B%BD%E6%9C%8D%E7%8E%AF%E5%A2%83%E9%80%82%E9%85%8D.xml`

- 副本发宏工具 （导入时需勾选“允许触发器操作文件”）
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E5%89%AF%E6%9C%AC%E5%8F%91%E5%AE%8F%EF%BC%88%E5%8F%91%E6%94%BB%E7%95%A5%EF%BC%89%E5%B7%A5%E5%85%B7/%E5%8F%91%E9%80%81%E5%89%AF%E6%9C%AC%E5%AE%8F.xml`

- 连击中断倒计时(战骑暗枪忍舞机)
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E8%BF%9E%E5%87%BB15%E7%A7%92%E5%80%92%E8%AE%A1%E6%97%B6.xml`

- 减伤覆盖监控 （使用时需开启【鲶鱼精邮差】）（导入时需勾选“允许触发器操作文件”）
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E9%98%9F%E4%BC%8D%E7%9B%91%E6%8E%A7.xml`

- 施法监控
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E6%96%BD%E6%B3%95%E7%9B%91%E6%8E%A7.xml`

- 寻找
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E5%AF%BB%E6%89%BE.xml`

- OBS自动录制
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/OBS%E8%87%AA%E5%8A%A8%E5%BD%95%E5%88%B6.xml`

- 一键占星发卡（使用时需开启【鲶鱼精邮差】）（导入时需勾选“允许触发器操作文件”）
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E4%B8%80%E9%94%AE%E7%B3%BB%E5%88%97/%E5%8D%A0%E6%98%9F%E4%B8%80%E9%94%AE%E5%8F%91%E5%8D%A1/AstAutoCard.xml`

- MP Server Tick
`https://raw.fastgit.org/Souma-Sumire/FFXIV_Auxiliary_Tools/master/Triggernometry%E8%A7%A6%E5%8F%91%E5%99%A8/%E8%B7%B3%E8%93%9D%E3%80%81%E6%97%A0%E6%88%91%E3%80%81Dot%E5%88%A4%E5%AE%9A/%E5%9B%9E%E8%93%9D.xml`

## 使用ACT的TTS插件

![让触发器调用ACT的TTS](screenshots/让触发器调用ACT的TTS.gif)

## 其他说明

- 如果Triggernometry的_ffixvplayer方法失效，可以尝试取消其自定义职业排序
- 如果触发器延迟
  - 尝试禁用效率低下的触发器
  - 尝试更改ACT的CPU优先级
  