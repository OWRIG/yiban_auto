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

var scrollClick = bounds(0, 1818, 1080, 1920);

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
