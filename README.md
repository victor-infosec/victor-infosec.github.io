## 当前博客主题的使用介绍

### 0. 项目地址:  
[https://github.com/bigablecat/example.github.io](https://github.com/bigablecat/example.github.io)  

### 1. 包含功能:
a). 不依赖第三方服务的全文检索  

b). 自定义类别和标签归类文章  

c). 瀑布流翻页  

### 2. 安装方法:
步骤一. fork本项目

![fork](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/fork.png)  

步骤二. 将项目名称**example**.github.io中的**example**部分修改为你自己的github用户名, 例如: **bigablecat**.github.io

![change name](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/change_name.png)  

步骤三. 将项目名称**example**.github.io中的**example**部分修改为你自己的github用户名, 例如: **bigablecat**.github.io

![change url](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/change_url.png)  

三个步骤完成后，如果发布成功，可以在当前项目settings的GitHub Pages项中看到设置成功的提示:
![success tip](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/published.png)  


### 3. 发布文章:
a). 在/_posts/目录下新建一个后缀为.md的markdown文件,命名格式为yyyy-mm-dd-filename.md,例如2017-01-01-test.md

b). 文件名filename须使用英文以避免错误

### 4. 新建category或者tag:
a). 在/_my_categories/目录下新建.md文件,文件名称为新增的category名。如programming.md。

b). 文件内容如下:  
```shell
---
slug: programming
name: Programming
cn:   编程
color: '#242A3A'
---
```
**i.** slug，name，cn和color都是该类别的属性，以key:value键值对的形式存在。在页面中获取到某个category的时候，可以通过category.key的方式获取key对应的value。  

**ii.** slug属性可以看做是类别的基本标识，如果一篇文章类别标为programming,这里的programming实际上就是slug的值,因此建议slug值与文件名相同,便于使用。  

**iii.** 其余属性由用户根据需要自定义,本文件中的name,cn和color就是自定义的,可以删除,也可以另外增加其他属性。  

b). tag的创建方式和使用与category完全一样。

### 5. 参考与推荐:
a). 当前主题的jekyll主题样式参考来源:  
**i.** [http://lanyon.getpoole.com](http://lanyon.getpoole.com/)  

**ii.** [http://www.minddust.com](http://www.minddust.com/)  

b). 翻页实现方式参考来源:  
**i.** [用Jekyll和jQuery实现异步加载文章列表(作者ypchen)](https://alfred-sun.github.io/blog/2014/12/11/jekykll-jquery-asyn-load/)  

**ii.** [pagination using waypoints.js](http://imakewebthings.com/waypoints/)  

c). 主题中使用到的其他js插件:  
**i.** [typeahead功能](http://www.runningcoder.org/jquerytypeahead/)  

d). 搭建jekyll博客相关教程:  
**i.** [Github+Jekyll搭建个人博客三步走 | 极简小白教程(作者简疏志)](http://www.jianshu.com/p/95646037acdc/)  

**ii.** [我的 Github 个人博客是怎样炼成的(作者天晨Joey)](http://www.jianshu.com/p/4fd3cb0a11da/)  


***

## how to use the theme of this jekyll blog

### 0. project url:  
[https://github.com/bigablecat/example.github.io](https://github.com/bigablecat/example.github.io)  

### 1. Functions:  
a). full-text search independent of third-party service
  
b). cusomized categories and tags  

c). infinite scrolling to paginate  

### 2. Installation:  
step 1. fork this repository

![fork](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/fork.png)

setp 2. go to settings of the your forked repository and replace '**example**' in **example**.github.io with your own username of github, like: **bigablecat**.github.io

![change name](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/change_name.png)

setp 3. similarly, in config.xml find *url: **example**.github.io*, replace '**example**' with your own username of github, like: **bigablecat**.github.io

![change url](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/change_url.png)

After all these 3 steps, you could find success tip under the item 'GitHub Pages' of repsotiroy settings. 
![success tip](https://raw.githubusercontent.com/bigablecat/example.github.io/master/public/img/published.png)


### 3. post an article
a). use the directory /_posts/  

b). create a markdown file with extention .md and named it as yyyy-mm-dd-filename.md, for example: 2017-01-01-test.md

### 4. create new category or tag:  
a). create .md file under directory /_my_categories/ and name the file with new category, like programming.md.  

b). The content of the category file will look like:  
```shell
---
slug: programming
name: Programming
cn:   编程
color: '#242A3A'
---
```
**i.** There are for attributes in this category: slug，name，cn and color. They present as key:value pair and you could get the value via its key when you get the category in a page.  

**ii.** The attribute 'slug' could be regarded as the identification of its category. You could label the category of an article as programming where this word 'programming' is exactlly the the value of 'slug'. For this reason, it will be more convenient to name the category identical to its slug.  

**iii.** You could customize any other attributes, like name, cn and color in this programming category.  

c). Please follow the same procedures of creating a category to create a new tag.  

### 5. references:  
a). The style of this theme is extracted from the following themes:  
**i.** [http://lanyon.getpoole.com](http://lanyon.getpoole.com/)  

**ii.** [http://www.minddust.com](http://www.minddust.com/)  

c). The pagination references:  
**i.** [(Chinese)用Jekyll和jQuery实现异步加载文章列表(作者y