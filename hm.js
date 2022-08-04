const data = ["APPLE", "BANANA", "ORANGE", "KIVI", "WATERMELON", "MUSKMELON"];

var wdr_l = [];
var wd = [];
var but_track = [];
let errors_commit = 0;

function dash(len, w) {
  for (let i = 0; i < len; i++) {
    wd.push("-");
    wdr_l.push(w[i]);
  }
  // console.log(wdr_l)
  return wd;
}

function demo1(max) {
  // console.log(data[Math.floor(Math.random() * max)].length);

  var wdr = data[Math.floor(Math.random() * max)];
  // console.log(wdr)
  var len = wdr.length;
  document.getElementById("dashes").innerHTML = dash(len, wdr);

  document.getElementById("wrd_len").innerHTML =
    "Guess the Fruit of Length : " + len;
}

function demo2() {
  wd[1] = "Y";
  document.getElementById("dashes").innerHTML = wd;
  // console.log(wd);
}

function temp(data, ch) {
  // var data = ['1','1','2','3','4','4','5'];
  // console.log(data)
  var t = {};
  for (i in data) {
    // console.log(data[i])
    if (!(data[i] in t)) {
      t[data[i]] = [parseInt(i)];
    } else {
      t[data[i]].push(parseInt(i));
    }
  }
  // console.log(t[ch])
  return t[ch];
}

function win() {
  for (j in wdr_l) {
    if (wd[j] == wdr_l[j]) {
    } else {
      return false;
    }
  }
  return true;
}

function ButtonID(clicked) {
  // console.log(wdr_l);
  var curr_value = document.getElementById("chances_var").innerHTML;
  if (errors_commit < 10) {
    if (!but_track.includes(clicked)) {
      but_track.push(clicked);
      document.getElementById(clicked).disabled = true;
      console.log(but_track);
      if (wdr_l.includes(clicked)) {
        // var ind = wdr_l.indexOf(clicked)

        ind = temp(wdr_l, clicked);
        for (i in ind) {
          // console.log(ind[ind]);
          wd[ind[i]] = clicked;
        }

        document.getElementById("dashes").innerHTML = wd;
        if (win()) {
          document.getElementById("HangmanPics").src = "win_light.png";
          document.getElementById("result").innerHTML = "You Won!";
        }
      } else if (!wdr_l.includes(clicked)) {
        errors_commit += 1;
        document.getElementById("chances_var").innerHTML = 10 - errors_commit;
        var pic_no = errors_commit + 1 + ".png";
        console.log(pic_no);
        if (pic_no == "11.png") {
          document.getElementById("HangmanPics").src = "11.png";
          document.getElementById("result").innerHTML = "You Lost!";
        }
        document.getElementById("HangmanPics").src = pic_no;
      }
    } else {
      alert("Tried");
    }
  }
}
