---
layout: post
title: The Basics of Hacking and Penetration Testing | 201803
key: 20180404
category: books
tags:
  - 读书笔记
lang: zh
---

CHAPTER 1 What is Penetration Testing?
--------------------------------------

1、什么是渗透测试？
> Penetration testing can be defined as a **legal** and **authorized** attempt to locate and successfully **exploit computer systems** for the purpose of **making those systems more secure**.

渗透测试是通过攻击和入侵系统，发现系统存在的安全问题，帮助用户解决这些问题，从而提高系统的安全性。这是一种合法的、具有授权的网络攻击行为。

2、渗透测试的技术、方法和工具与现实中攻击者所使用的是相同的。

> The general idea is to find security issues by **using the same tools and techniques as an attacker**.

3、与渗透测试相同的概

 - Pen testing
 - PT
 - Hacking
 - Ethical hacking
 - White hat hacking
 - Offensive security
 - Red teaming

4、白帽子与黑帽子的区别？

> At its core, these differences can be boiled down to three key points: **authorization**, **motivation**, and **intent**.

5、白盒测试与黑盒测试

> White box penetration testing, also known as “overt” testing, is very thorough and comprehensive.

白盒测试，用户提供目标系统的详细信息，比如网络拓补结构、服务器配置、应用系统源代码等，渗透人员根据这些信息寻找系统安全问题。

> Black box penetration testing, also known as “covert” testing, employs a significantly different strategy.

黑盒测试，渗透人员对目标系统几乎一无所知，可能只知道目标的企业名称或者一个域名，剩下的信息需要渗透人员自己去搜集。这种测试更像是现实中的网络攻击和入侵行为。

6、 渗透测试的流程
已经有很多成熟的渗透测试方法论，不过都大同小异。这本书将其简化为四个步骤，如下：
<div align=center><img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/1.png" alt="渗透测试流程1" height="50%" width="50%" /></div>

这几个步骤并不是依次线性地做完即可，而应该是随着测试的进行与深入，循环进行的，如下：

![渗透测试流程2](https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/2.png)

CHAPTER 2 Reconnaissance
--------------------------------------
1、

