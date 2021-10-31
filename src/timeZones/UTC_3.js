import React, { useState, useEffect } from "react";

const UTC_3 = () => {
  const [actualTime, setActualTime] = useState("00:00:00");
  const [tokyo, setTokyo] = useState("00:00:00");
  const [pekin, setPekin] = useState("00:00:00");
  const [london, setLondon] = useState("00:00:00");
  const [buenosAires, setBuenosAires] = useState("00:00:00");
  const [zürich, setZürich] = useState("00:00:00");
  const [newYork, setNewYork] = useState("00:00:00");
  const [moskow, setMoskow] = useState("00:00:00");
  const [paris, setParis] = useState("00:00:00");

  let global = new Date().getTimezoneOffset();
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  } else {
    minute = minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  const [theme, setTheme] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]); //IMPORTANTE!

  const changeBackground = () => {
    if (hour >= 7 && hour < 10) {
      setTheme("theme-morning");
      setTitle("title-morning");
      setSubtitle("subtitle-morning");
    }
    if (hour >= 10 && hour < 15) {
      setTheme("theme-midday");
      setTitle("title-midday");
      setSubtitle("subtitle-midday");
    }
    if (hour >= 15 && hour < 18) {
      setTheme("theme-afternoon");
      setTitle("title-afternoon");
      setSubtitle("subtitle-afternoon");
    }
    if (hour >= 18 && hour < 20) {
      setTheme("theme-sunset");
      setTitle("title-sunset");
      setSubtitle("subtitle-sunset");
    }
    if (hour >= 20 && hour < 22) {
      setTheme("theme-early-night");
      setTitle("title-early-night");
      setSubtitle("subtitle-early-night");
    }
    if (hour >= 22 || hour < 7) {
      setTheme("theme-night");
      setTitle("title-night");
      setSubtitle("subtitle-night");
    }
  };

  useEffect(() => {
    changeBackground();
  }, []);

  useEffect(() => {
    if (global === 180) {
      let fullTime = `${hour}:${minute}:${seconds}`;
      const newYorkTime = () => {
        let hour = new Date().getHours() + 23;
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        if (hour >= 24) {
          hour = hour - 24;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        } else {
          minute = minute;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let newYorkTimes = `${hour}:${minute}
        `;
        return newYorkTimes;
      };
      const buenosAiresTime = () => {
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        if (hour >= 24) {
          hour = hour - 24;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        } else {
          minute = minute;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let buenosAiresTime = `${hour}:${minute}
        `;
        return buenosAiresTime;
      };
      const zürichTime = () => {
        let actualDay = new Date().getUTCDate();
        let actualMonth = new Date().getUTCMonth();
        let actualDate = `${actualDay}${actualMonth}`;

        if (actualDate < "318") {
          let hour = new Date().getHours() + 5;
          let minute = new Date().getMinutes();
          let seconds = new Date().getSeconds();
          if (hour >= 24) {
            hour = hour - 24;
          }
          if (hour < 10) {
            hour = "0" + hour;
          }
          if (minute < 10) {
            minute = "0" + minute;
          } else {
            minute = minute;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          } else {
            seconds = seconds;
          }
          let zürichTime = `${hour}:${minute}
        `;
          return zürichTime;
        }

        if (actualDate >= "319") {
          let hour = new Date().getHours() + 4;
          let minute = new Date().getMinutes();
          let seconds = new Date().getSeconds();
          if (hour >= 24) {
            hour = hour - 24;
          }
          if (hour < 10) {
            hour = "0" + hour;
          }
          if (minute < 10) {
            minute = "0" + minute;
          } else {
            minute = minute;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          } else {
            seconds = seconds;
          }
          let zürichTime = `${hour}:${minute}
        `;
          return zürichTime;
        }
      };
      const londonTime = () => {
        let hour = new Date().getHours() + 4;
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        if (hour >= 24) {
          hour = hour - 24;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        } else {
          minute = minute;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let londonTime = `${hour}:${minute}
        `;
        return londonTime;
      };
      const moskowTime = () => {
        let hour = new Date().getHours() + 6;
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        if (hour >= 24) {
          hour = hour - 24;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        } else {
          minute = minute;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let moskowTime = `${hour}:${minute}
        `;
        return moskowTime;
      };
      const pekinTime = () => {
        let hour = new Date().getHours() + 11;
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        if (hour >= 24) {
          hour = hour - 24;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        } else {
          minute = minute;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let pekinTime = `${hour}:${minute}
        `;
        return pekinTime;
      };
      const tokyoTime = () => {
        let hour = new Date().getHours() + 12;
        let minute = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        if (hour >= 24) {
          hour = hour - 24;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        } else {
          minute = minute;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        } else {
          seconds = seconds;
        }
        let tokyoTime = `${hour}:${minute}
        `;
        return tokyoTime;
      };
      let interval = setInterval(() => {
        setActualTime(fullTime);
        setNewYork(newYorkTime);
        setBuenosAires(buenosAiresTime);
        setZürich(zürichTime);
        setParis(zürichTime);
        setLondon(londonTime);
        setMoskow(moskowTime);
        setPekin(pekinTime);
        setTokyo(tokyoTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [actualTime]);

  return (
    <section className="container-main">
      <div className="actual">
        <h2 className={subtitle}>Actual time in my location</h2>
        <h1 className={title}>{actualTime}</h1>
      </div>
      <section className="container-clocks">
        <div className="york">
          <h3>New York</h3>
          <p>{newYork}</p>
        </div>
        <div className="buenos">
          <h3>Buenos Aires </h3>
          <p>{buenosAires}</p>
        </div>
        <div className="zurich">
          <h3>Zürich</h3>
          <p>{zürich}</p>
        </div>
        <div className="tokyo">
          <h3>Tokyo</h3>
          <p>{tokyo}</p>
        </div>
        <div className="paris">
          <h3>Paris</h3>
          <p>{paris}</p>
        </div>
        <div className="beijing">
          <h3>Beijing</h3>
          <p>{pekin}</p>
        </div>
        <div className="london">
          <h3>London</h3>
          <p>{london}</p>
        </div>
        <div className="moskow">
          <h3>Moskow</h3>
          <p>{moskow}</p>
        </div>
      </section>
    </section>
  );
};

export default UTC_3;
