---
layout: post
title: The Basics of Hacking and Penetration Testing Part3
key: 20180406
category: books
tags:
  - 读书笔记
lang: zh
---

CHAPTER4 Exploitation
--------------------------------------
1、渗透神器 **Metasploit**

基本用法：

```
msf> msfconsole
msf> search missing_patch_number (or CVE)
use exploit_name_and_path
msf> show payloads
msf> set payload path_to_payload
msf> show optionsA
msf> set option_name desired_option_input
msf> exploit
```

一份不错的教程：

Metasploit Unleashed [https://www.offensive-security.com/metasploit-unleashed/](https://www.offensive-security.com/metasploit-unleashed/)

2、在线各类服务密码破解

 - Medusa

```
medusa –h 192.168.18.132 –u ownedb –P /usr/share/john/password.lst –M ssh
```

 - THC Hydra [https://www.thc.org/thc-hydra/](https://www.thc.org/thc-hydra/)


3、系统密码破解神器 **John the Ripper**

3.1、本地Windows密码破解

&ensp;&ensp;1、Shut down the target machine.
  
&ensp;&ensp;2、Boot the target to Backtack or an alternate OS via a live CD or USB drive.
  
&ensp;&ensp;3、Mount the local hard drive.
  
```
  mkdir /mnt/sda1
  mount /dev/sda1 /mnt/sda1
  cd /mnt/sda1/Windows/system32/config
```

<div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/5.png" alt="渗透测试流程5" height="50%" width="50%" />
</div>

&ensp;&ensp;4、Use Samdump2 and to extract the hashes.
  
```
  samdump2 system SAM > /tmp/hashes.txt
```

<div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/6.png" alt="渗透测试流程6" height="50%" width="50%" />
</div>

 Accessing the raw hashes on some Windows systems may require an extra step. Bkhive is a tool which allows you to extract the Syskey bootkey from the system hive. It may be necessary to use bkhive to extract the system key in order to fully expose the password hashes.

```
  bkhive system sys_key.txt
  samdump2 SAM sys_key.txt > /tmp/hash.txt
```

&ensp;&ensp;5、Use JtR to crack the passwords.

```
  john /tmp/hashes.txt --format=nt
```

 <div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/3.png" alt="渗透测试流程7" height="50%" width="50%" />
</div>

3.2、远程Windows密码破解

&ensp;&ensp;1、Meterpreter shell session： hashdump

&ensp;&ensp;2、将导出的hash值复制到本地，使用jtr在本地进行破解

3.3、Linux密码破解

两个重要的文件：
    /etc/passwd
    /etc/shadow
    
```
unshadow /etc/passwd /etc/shadow > /tmp/linux_hashes.txt
john /tmp/linux_hashes.txt
```

4、重置系统密码
&ensp;&ensp;1、Boot form Kali Linux LiveCD
&ensp;&ensp;2、Mount Windows system disk

```
chntpw –i /mnt/sda1/WINDOWS/system32/config/SAM
```

交互式重置密码

5、网络嗅探

**Hub**：promiscuous mode ＋ Wireshark

**Switch**：promiscuous mode ＋ macof ＋ Wireshark

```
macof –i eth0 –s 192.168.18.130 –d 192.168.18.2
```

6、图形化/自动化metasploit

Armitage

CHAPTER5 social engineering
--------------------------------------

**SET**：交互式社会工程学工具


```
se-toolkit
```

1.	克隆站点 ＋ 恶意的java applet
2.	克隆站点 ＋ 获取用户的credential
3.	其他功能：USB自动运行、端口监听器、发送大量垃圾邮件、Arduino attack（伪装payload）、短信欺骗、自制wifi热点、恶意二维码生成、powershell攻击payload

CHAPTER6 Web-Based Exploitation
--------------------------------------

1、**The Basics of Web Hacking**

>“1. The ability to intercept requests as they leave your browser. ”

>“2. The ability to find all the web pages, directories, and other files that make up the web application. ”

>“3. The ability to analyze responses from the web application and inspect them for vulnerabilities. ”

2、Vulnerabilities

**SQLi**

**XSS**

3、Tools

**nikto**

**w3af**

**webscrab**

**ZAP**