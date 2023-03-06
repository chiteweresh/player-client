export const getDisplayTime = (time) => {
    const hour = Math.floor(time / 3600).toString().padStart(2, '0');
    const minute = Math.floor(time % 3600 / 60).toString().padStart(2, '0');
    const second = ('0' + Math.floor(time % 60)).slice(-2)
    return hour + ":" + minute + ":" + second
}