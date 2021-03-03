## 用Autojs实现易班数据的自动填入

苦易班每天填写长串数据久矣！

熟悉JS的朋友们可能只要看一眼就明白了，学习成本大概在十分钟左右，我也是才知道有Autojs这么个好玩意儿。

不熟悉JS的小伙伴们就得去看看js原生语言了，也不难，学习成本因人而异，其实对于该项目而言所需掌握的知识点也挺简单的。

因为只是给自己用，而且这东西也不方便传播，我就不进行更多的开发了，仅供熟悉编程的朋友们参考。（当然主要还是因为懒）

**test.js为核心代码，解释和思路看test就ok。yiban.js主要是添加了ui.



参考文档及工具：https://pro.autojs.org

### 用到的函数有

- text() 

需要点击的文本，因为会返回所有符合数据，所以一般配合find()或findOnce使用。

- findeOnce() 

  从0开始，选择text()返回的第x+1个数据。

- bounds() 

  框选一个范围，，四个参数按左上右下的顺序代表某一个边到屏幕该边的像素距离 建议使用Autojs工具配合使用，或者手机厂商自带工具应该也有用。

- click()   模拟点击该对象

- sleep()    zzZZ （ms）

-  input() 

  输入 input([i, ]text) i 表示要输入的为第i + 1个输入框 text 是要输入的文本。

- gesture() 

  模拟手势操作 gesture(duration, [x1, y1], [x2, y2], ...) 模拟手势操作。

​      例如gesture(1000, [0, 0], [500, 500], [500, 1000])为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为2秒。

​      这里我用来实现选项的上滑下滑，原本也有个scroll函数的，但是可能是易班设置的组件属性为不可滑动，导致无法使用（也有可能是我哪里做错了，为了快速开发，我就没有去深入了解）。

滑动那里有点不灵活，有概率出错，建议大家多校验一下。

该版本仅针对njnu，其他学校有可能是不一样的模板。
