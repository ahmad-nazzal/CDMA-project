var bit_array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bit_array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var bit_array3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sumArrayes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function canvas_() {
  const slot1 = parseInt(document.getElementById("slot1").value);
  const slot2 = parseInt(document.getElementById("slot2").value);
  bit_array1 = [
    slot1 * parseInt(document.getElementById("bit1").value),
    slot1 * parseInt(document.getElementById("bit2").value),
    slot1 * parseInt(document.getElementById("bit3").value),
    slot1 * parseInt(document.getElementById("bit4").value),
    slot1 * parseInt(document.getElementById("bit5").value),
    slot1 * parseInt(document.getElementById("bit6").value),
    slot1 * parseInt(document.getElementById("bit7").value),
    slot1 * parseInt(document.getElementById("bit8").value),
    slot2 * parseInt(document.getElementById("bit9").value),
    slot2 * parseInt(document.getElementById("bit10").value),
    slot2 * parseInt(document.getElementById("bit11").value),
    slot2 * parseInt(document.getElementById("bit12").value),
    slot2 * parseInt(document.getElementById("bit13").value),
    slot2 * parseInt(document.getElementById("bit14").value),
    slot2 * parseInt(document.getElementById("bit15").value),
    slot2 * parseInt(document.getElementById("bit16").value),
  ];
  var c = document.getElementById("myCanvas");
  draw_signals(bit_array1, c, 14);
  sender();
  receiver1();
  receiver2();
  receiver3();
}
function canvas_2() {
  const slot12 = parseInt(document.getElementById("slot12").value);
  const slot22 = parseInt(document.getElementById("slot22").value);
  bit_array2 = [
    slot12 * parseInt(document.getElementById("bit1222").value),
    slot12 * parseInt(document.getElementById("bit22").value),
    slot12 * parseInt(document.getElementById("bit32").value),
    slot12 * parseInt(document.getElementById("bit42").value),
    slot12 * parseInt(document.getElementById("bit52").value),
    slot12 * parseInt(document.getElementById("bit62").value),
    slot12 * parseInt(document.getElementById("bit72").value),
    slot12 * parseInt(document.getElementById("bit82").value),
    slot22 * parseInt(document.getElementById("bit92").value),
    slot22 * parseInt(document.getElementById("bit102").value),
    slot22 * parseInt(document.getElementById("bit112").value),
    slot22 * parseInt(document.getElementById("bit122").value),
    slot22 * parseInt(document.getElementById("bit132").value),
    slot22 * parseInt(document.getElementById("bit142").value),
    slot22 * parseInt(document.getElementById("bit152").value),
    slot22 * parseInt(document.getElementById("bit162").value),
  ];
  var c2 = document.getElementById("myCanvas2");
  draw_signals(bit_array2, c2, 14);
  sender();
  receiver1();
  receiver2();
  receiver3();
}
function canvas_3() {
  const slot13 = parseInt(document.getElementById("slot13").value);
  const slot23 = parseInt(document.getElementById("slot23").value);
  bit_array3 = [
    slot13 * parseInt(document.getElementById("bit133").value),
    slot13 * parseInt(document.getElementById("bit233").value),
    slot13 * parseInt(document.getElementById("bit333").value),
    slot13 * parseInt(document.getElementById("bit433").value),
    slot13 * parseInt(document.getElementById("bit533").value),
    slot13 * parseInt(document.getElementById("bit633").value),
    slot13 * parseInt(document.getElementById("bit733").value),
    slot13 * parseInt(document.getElementById("bit833").value),
    slot23 * parseInt(document.getElementById("bit933").value),
    slot23 * parseInt(document.getElementById("bit1033").value),
    slot23 * parseInt(document.getElementById("bit1133").value),
    slot23 * parseInt(document.getElementById("bit1233").value),
    slot23 * parseInt(document.getElementById("bit1333").value),
    slot23 * parseInt(document.getElementById("bit1433").value),
    slot23 * parseInt(document.getElementById("bit1533").value),
    slot23 * parseInt(document.getElementById("bit1633").value),
  ];
  var c3 = document.getElementById("myCanvas3");
  draw_signals(bit_array3, c3, 14);
  sender();
  receiver1();
  receiver2();
  receiver3();
}
function draw_signals(array_bits, c, bitWidth) {
  var ctx = c.getContext("2d");

  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.moveTo(0, 75);
  ctx.lineTo(400, 75);
  ctx.stroke();

  const context = c.getContext("2d");
  context.clearRect(0, 0, c.width, c.height);
  ctx.moveTo(0, 75);
  ctx.lineTo(400, 75);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 75);
  let counter = 0;
  for (let index = 0; index < array_bits.length; index++) {
    // if (index == 8) {
    //   counter = counter + 30;
    //   ctx.lineTo(counter, 75);
    // }
    ctx.lineTo(counter, 75 - array_bits[index] * 23);
    ctx.lineTo(counter + bitWidth, 75 - array_bits[index] * 23);
    ctx.lineTo(counter + bitWidth, 75);
    ctx.stroke();
    counter = counter + bitWidth;
  }
}
function sender() {
  var c4 = document.getElementById("myCanvas4");
  for (let index = 0; index < 16; index++) {
    sumArrayes[index] =
      bit_array1[index] + bit_array2[index] + bit_array3[index];
  }
  draw_signals(sumArrayes, c4, 14);
}
function receiver1() {
  var c5 = document.getElementById("myCanvas5");
  bit_array1_noMult = [
    parseInt(document.getElementById("bit2").value),
    parseInt(document.getElementById("bit1").value),
    parseInt(document.getElementById("bit3").value),
    parseInt(document.getElementById("bit4").value),
    parseInt(document.getElementById("bit5").value),
    parseInt(document.getElementById("bit6").value),
    parseInt(document.getElementById("bit7").value),
    parseInt(document.getElementById("bit8").value),
    parseInt(document.getElementById("bit9").value),
    parseInt(document.getElementById("bit10").value),
    parseInt(document.getElementById("bit11").value),
    parseInt(document.getElementById("bit12").value),
    parseInt(document.getElementById("bit13").value),
    parseInt(document.getElementById("bit14").value),
    parseInt(document.getElementById("bit15").value),
    parseInt(document.getElementById("bit16").value),
  ];
  var receiver1 = [0, 0];
  for (let index = 0; index < 8; index++) {
    receiver1[0] =
      receiver1[0] + (sumArrayes[index] * bit_array1_noMult[index]) / 8;
  }
  for (let index = 8; index < 16; index++) {
    receiver1[1] =
      receiver1[1] + (sumArrayes[index] * bit_array1_noMult[index]) / 8;
  }

  draw_signals(receiver1, c5, 165);
}
function receiver2() {
  var c6 = document.getElementById("myCanvas6");
  bit_array2_noMult = [
    parseInt(document.getElementById("bit1222").value),
    parseInt(document.getElementById("bit22").value),
    parseInt(document.getElementById("bit32").value),
    parseInt(document.getElementById("bit42").value),
    parseInt(document.getElementById("bit52").value),
    parseInt(document.getElementById("bit62").value),
    parseInt(document.getElementById("bit72").value),
    parseInt(document.getElementById("bit82").value),
    parseInt(document.getElementById("bit92").value),
    parseInt(document.getElementById("bit102").value),
    parseInt(document.getElementById("bit112").value),
    parseInt(document.getElementById("bit122").value),
    parseInt(document.getElementById("bit132").value),
    parseInt(document.getElementById("bit142").value),
    parseInt(document.getElementById("bit152").value),
    parseInt(document.getElementById("bit162").value),
  ];
  var receiver2 = [0, 0];
  for (let index = 0; index < 8; index++) {
    receiver2[0] =
      receiver2[0] + (sumArrayes[index] * bit_array2_noMult[index]) / 8;
  }
  for (let index = 8; index < 16; index++) {
    receiver2[1] =
      receiver2[1] + (sumArrayes[index] * bit_array2_noMult[index]) / 8;
  }

  draw_signals(receiver2, c6, 165);
}
function receiver3() {
  var c7 = document.getElementById("myCanvas7");
  bit_array3_noMult = [
    parseInt(document.getElementById("bit133").value),
    parseInt(document.getElementById("bit233").value),
    parseInt(document.getElementById("bit333").value),
    parseInt(document.getElementById("bit433").value),
    parseInt(document.getElementById("bit533").value),
    parseInt(document.getElementById("bit633").value),
    parseInt(document.getElementById("bit733").value),
    parseInt(document.getElementById("bit833").value),
    parseInt(document.getElementById("bit933").value),
    parseInt(document.getElementById("bit1033").value),
    parseInt(document.getElementById("bit1133").value),
    parseInt(document.getElementById("bit1233").value),
    parseInt(document.getElementById("bit1333").value),
    parseInt(document.getElementById("bit1433").value),
    parseInt(document.getElementById("bit1533").value),
    parseInt(document.getElementById("bit1633").value),
  ];
  var receiver3 = [0, 0];
  for (let index = 0; index < 8; index++) {
    receiver3[0] =
      receiver3[0] + (sumArrayes[index] * bit_array3_noMult[index]) / 8;
  }
  for (let index = 8; index < 16; index++) {
    receiver3[1] =
      receiver3[1] + (sumArrayes[index] * bit_array3_noMult[index]) / 8;
  }

  draw_signals(receiver3, c7, 165);
}
