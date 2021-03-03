 // 用到的函数有
 //- text() //需要点击的文本，因为会返回所有符合数据，所以一般配合find()或findOnce使用
 //- findeOnce() //从0开始，选择text()返回的第x+1个数据
 //- bounds() //框选一个范围，，四个参数按左上右下的顺序代表某一个边到屏幕该边的像素距离 建议使用Autojs工具配合使用，或者手机厂商自带工具应该也有用
 //- click() //模拟点击该对象
 //- sleep() // zzZZ （ms）
 //- input() //输入 input([i, ]text) i {number} 表示要输入的为第i + 1个输入框 text {string} 要输入的文本
 //- gesture() //模拟手势操作 gesture(duration, [x1, y1], [x2, y2], ...) 模拟手势操作。
            //例如gesture(1000, [0, 0], [500, 500], [500, 1000])为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为2秒。
            //这里我用来实现选项的上滑下滑，原本也有个scroll函数的，但是可能是易班设置的组件属性为不可滑动，导致无法使用（也有可能是我哪里做错了，为了快速开发，我就没有去深入了解）





var btn1 = text("请选择").findOnce(0);
var btn2 = text("请选择").findOnce(1);
var btn3 = text("请选择").findOnce(2);
var btn4 = text("请选择").findOnce(3);
//5宿舍楼不需要设置，可以直接input()
var btn6 = text("请选择").findOnce(4);
var btn7 = text("请选择").findOnce(5);
var btn8 = text("请选择").findOnce(6);
var btn9_1 = text("请选择").findOnce(7);
var btn9_2 = text("请选择").findOnce(8);
var btn10 = text("请选择").findOnce(9);


btn1.click();
sleep(random(200, 300));
click("确定");

btn2.click();
sleep(random(200, 300));
gesture(100, [300, 2000], [380, 1700]);
click("确定");
sleep(random(200, 300));

btn3.click();
sleep(random(500, 600));
gesture(100, [180, 2000], [190, 1000]);
sleep(random(1100, 1200));
gesture(300, [570, 2070], [579, 1250]);
click("确定");

btn4.click();
sleep(random(200, 300));
click("确定");

input(1, "5-404");
sleep(random(200, 300));

btn6.click();
sleep(random(200, 300));
gesture(100, [330, 1880], [330, 2260]);
sleep(random(1000, 1100));
gesture(200, [552, 1860], [563, 1550], [563, 1550]);
click("确定");

btn7.click();
sleep(random(200, 300));
click("确定");
sleep(random(200, 300));

btn8.click();
sleep(random(200, 300));
gesture(100, [330, 1880], [340, 1360]);
sleep(random(200, 300));
click("确定");

btn9_1.click();
sleep(random(200, 300));
click("确定");

btn9_2.click();
sleep(random(200, 300));
click("确定");

input(4, "居家");
