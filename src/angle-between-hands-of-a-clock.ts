

function angleClock(hour: number, minutes: number): number {
    // 分针：minutes * 6 = 180;
    const minuteAngle = minutes * 6;
    // 时针：(hour % 12) * 30 + (minutes / 60) * 30
    const hourAngle = (hour % 12) * 30 + (minutes / 60) * 30;
    // 计算夹角
    const angle = Math.abs(hourAngle - minuteAngle)
    // 返回最小角度
    return Math.min(angle, 360 - angle)
};

const hour = 12, minutes = 30
console.log(angleClock(hour, minutes));
