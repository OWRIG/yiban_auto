
var window = floaty.window(
    <frame>
        <button id="action" text="点击开始填写" w="90" h="90" bg="#ffffffff" />
    </frame>
);

setInterval(() => {}, 1000);

var execution = null;

//记录按键被按下时的触摸坐标
var x = 0,
    y = 0;
//记录按键被按下时的悬浮窗位置
var windowX, windowY;
//记录按键被按下的时间以便判断长按等动作
var downTime;

window.action.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
        case event.ACTION_DOWN:
            x = event.getRawX();
            y = event.getRawY();
            windowX = window.getX();
            windowY = window.getY();
            downTime = new Date().getTime();
            return true;
        case event.ACTION_MOVE:
            //移动手指时调整悬浮窗位置
            window.setPosition(
                windowX + (event.getRawX() - x),
                windowY + (event.getRawY() - y)
            );
            //如果按下的时间超过1.5秒判断为长按，退出脚本
            if (new Date().getTime() - downTime > 1500) {
                exit();
            }
            return true;
        case event.ACTION_UP:
            //手指弹起时如果偏移很小则判断为点击
            if (
                Math.abs(event.getRawY() - y) < 5 &&
                Math.abs(event.getRawX() - x) < 5
            ) {
                onClick();
            }
            return true;
    }
    return true;
});

function onClick() {
    if (window.action.getText() == "开始运行") {
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

        window.action.setText("停止运行");
        exit();
    } else {
        if (execution) {
            execution.getEngine().forceStop();
        }
        window.action.setText("开始运行");
    }
}
