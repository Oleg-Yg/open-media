export const getFormattedTime = (time: number) => {
  let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor(time / 60) - hours * 60;
  let seconds = time % 60;

  return [
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");
};
