"use-strict";

setInterval(() => {
  date = new Date();

  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();

  let hrotation = 30 * htime + 0.5 * mtime;
  let mrotation = mtime * 6;
  let srotation = stime * 6;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
});
