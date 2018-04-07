---
layout: post
title: The Basics of Hacking and Penetration Testing Part2
key: 20180404
category: books
tags:
  - 读书笔记
lang: zh
---

CHAPTER 2 Reconnaissance
--------------------------------------

1、什么是Reconnaissance？

侦察（Reconnaissance）也叫做信息搜集（Information gathering），目的是搜集目标系统的详细信息。这应该是渗透测试中花费世家最长的阶段，往往却被忽略或看轻，很多失败的渗透测试都是因为前期的信息搜集不足造成的。

2、**Active reconnaissance**

主动侦察需要直接访问目标系统，比如对目标网站做镜像，可以使用的工具有**HTTrack**、**wget**等。

3、**Passive reconnaissance**

被动侦察是通过第三方哈寻目标系统的信息，不直接与目标系统交互。

3.1、Search engine

 - Google Hacking
 Googole hacking基本用法：
	 
	 site:dsu.edu pat engebretson
	allintitle:index of
	inurl:admin
	cache:syngress.com
	filetype:pdf
	site:dsu.edu filetype:pptx

 更全面的Google hacking技术参考;'
 Google Hacking for Penetration Testers
 Google Dorks Google Hacking Database (GHDB)	
 
 - other search engines: Yahoo, Bing, Ask, Dogpile,
 - Newsgroups and Bulletin Board Systems like UseNet and Google Groups
 - Support forums, Internet Relay Chart
 - social media like Facebook and Twitter
 - job hunting website

3.2、E-mail Addresses

工具：The Harvester

3.3、whois

 - whois域名
 通过对域名的whois查询，可以知道域名的注册人、权威DNS服务器等信息。

命令行工具：`whois target_domain`
在线查询网站： http://www.whois.net

 - whois ip
 
 通过对IP的whois查询，可以知道该IP所在的IP块、IP拥有者等信息。工具同上。

3.4、网站综合信息查询 Netcraft

3.5、	IP与域名之间的转换

    host target_hostname
    host IP_address
 
 3.6、	DNS信息

 - nslookup

	nslookup
	\> server 8.8.8.8
	\> set type=any
	\> baidu.com

 - dig
		

```
dig @target_ip
dig @192.168.1.23example.com –t AXFR
```

 - fierce
		

```
./fierce.pl –dns trustedsec.com
```

3.7、	E-mail Servers

>Send an e-mail to the organization with an empty .bat file or a nonmalicious .exe file like calc.exe
>Analysis  the header and body of the rejected message

3.8、Metadata

MetaGooFil
	

```
./metagoofil.py -d syngress.com –t pdf,doc,xls,pptx –n 20 -o files –f results.html
```

3.9、综合信息搜集工具
 - ThreatAgent
 - FOCA
 - SearchDiggity
 - Maltego
 - Robtex
