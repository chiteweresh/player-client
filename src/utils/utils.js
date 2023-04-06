export const getDisplayTime = (time) => {
  const hour = Math.floor(time / 3600).toString().padStart(2, '0');
  const minute = Math.floor(time % 3600 / 60).toString().padStart(2, '0');
  const second = Math.floor(time % 60).toString().padStart(2, '0');
  return `${hour}:${minute}:${second}`;
};

export const getShift = (e, ref) => {
  const clickPosition = e.pageX;
  const panelPosition = Math.floor(ref.current.getBoundingClientRect().left);
  return clickPosition - panelPosition;
};
