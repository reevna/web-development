const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
plot();
function plot()
{
   const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext('2d');


  //шапка синяя
    ctx.beginPath();
    ctx.moveTo(50, 155);
    ctx.bezierCurveTo(50, 155, 90, 40, 190, 40, 340, 145);
    ctx.bezierCurveTo(280, 40, 310, 80, 340, 145);
    ctx.lineTo(50, 155);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

  //лицо
  ctx.beginPath();
      ctx.moveTo(45, 155);
      ctx.bezierCurveTo(45, 155, 240, 110, 340, 145);
      ctx.arc(195, 190, 146, 0, Math.PI, 0);
      ctx.fillStyle = "#FFE4C4";
      ctx.fill();
    //  ctx.stroke();


  //полоска на шапке
    ctx.beginPath();
    ctx.moveTo(45, 155);
    ctx.bezierCurveTo(45, 155, 45, 170, 50, 190);
    ctx.bezierCurveTo(45, 190, 180, 130, 340, 180);
    ctx.bezierCurveTo(340, 180, 340, 170, 340, 145);
    ctx.bezierCurveTo(340, 145, 200, 100, 45, 155);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

  //рот
  ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.moveTo(162, 280);
    ctx.lineTo(245, 280);
    ctx.bezierCurveTo(245, 280, 255, 280, 205, 310);
    ctx.bezierCurveTo(205, 310, 180, 300, 162, 280);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.moveTo(165, 283);
    ctx.lineTo(185, 283);
    ctx.lineTo(185, 292);
    ctx.lineTo(177, 292);
    ctx.bezierCurveTo(177, 292, 166, 280, 165, 283);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.moveTo(187, 283);
    ctx.lineTo(203, 283);
    ctx.lineTo(203, 292);
    ctx.lineTo(187, 292);
    ctx.lineTo(187, 283);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.moveTo(205, 283);
    ctx.lineTo(223, 283);
    ctx.lineTo(220, 292);
    ctx.lineTo(205, 292);
    ctx.lineTo(205, 283);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
  ctx.beginPath();
    ctx.moveTo(225, 283);
    ctx.lineTo(244, 283);
    ctx.bezierCurveTo(244, 283, 245, 283, 223, 293);
    ctx.lineTo(223, 292);
    ctx.lineTo(225, 283);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

  //брови
  ctx.beginPath();
    ctx.moveTo(95, 180);
    ctx.lineTo(130, 145);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();
  //брови
  ctx.beginPath();
    ctx.moveTo(285, 165);
    ctx.lineTo(245, 135);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();


  //левый глаз
  ctx.beginPath();
    ctx.ellipse(155, 205, 40, 45, Math.PI / 6, 5, 8 * Math.PI);
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.arc(170, 205, 5, 0, 5 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

  //левый глаз белый
  ctx.beginPath();
    ctx.ellipse(235, 205, 40, 45, Math.PI / -6, 5, 8 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.arc(220, 205, 5, 0, 4 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();


  //ноги
  ctx.beginPath();
    ctx.moveTo(105, 420);
    ctx.lineTo(105, 465);
    ctx.lineTo(305, 465);
    ctx.lineTo(305, 420);
    ctx.lineTo(105, 420);
    ctx.fillStyle = "blue";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();

  //Ступни
  ctx.beginPath();
    ctx.moveTo(85, 470);
    ctx.lineTo(325, 470);
    ctx.bezierCurveTo(325, 470, 255, 450, 205, 465);
    ctx.bezierCurveTo(205, 465, 135, 450, 85, 470);
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();


  //пальто
  ctx.beginPath();
    ctx.moveTo(105, 305);
    ctx.bezierCurveTo(105, 305, 65, 350, 65, 385);
    ctx.lineTo(95, 400);
    ctx.lineTo(95, 420);
    ctx.bezierCurveTo(90, 424, 210, 460, 310, 427);
    ctx.lineTo(295, 400);
    ctx.moveTo(315, 410);
    ctx.bezierCurveTo(340, 410, 340, 380, 293, 300);
    ctx.bezierCurveTo(293, 300, 220, 380, 105, 305);
    //линия рукава слева
    ctx.moveTo(110, 355);
    ctx.lineTo(100, 395);
    //линия рукава справа
    ctx.moveTo(285, 360);
    ctx.lineTo(295, 395);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.stroke();
    //полы пальто
  ctx.beginPath();
    ctx.moveTo(203, 350);
    ctx.lineTo(200, 440);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
  //пуговицы
  ctx.beginPath();
    ctx.arc(190, 360, 2, 0, 5 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(190, 390, 2, 0, 5 * Math.PI);
    ctx.stroke();
  ctx.beginPath();
    ctx.arc(187, 422, 2, 0, 5 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();


  //варежка правая
  ctx.beginPath();
    ctx.arc(312, 405, 22, 0, 5 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(295, 400, 10, 0, 4 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();


  //варежка левая
    ctx.beginPath();
    ctx.arc(80, 400, 22, 0, 5 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(95, 395, 10, 0, 5 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();



  //воротник
    ctx.beginPath();
    ctx.moveTo(105, 303);
    ctx.bezierCurveTo(105, 305, 185, 380, 203, 342);
    ctx.bezierCurveTo(203, 342, 205, 335, 203, 340);
    ctx.bezierCurveTo(203, 340, 170, 340, 105, 303);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(215, 335);
    ctx.bezierCurveTo(200, 335, 220, 345, 290, 306);
    ctx.bezierCurveTo(290, 306, 300, 320, 287, 325);
    ctx.bezierCurveTo(285, 325, 285, 335, 215, 355);
    ctx.bezierCurveTo(215, 355, 190, 350, 215, 335);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();


  //помпон
  ctx.beginPath();
    ctx.moveTo(178, 10);
    ctx.lineTo(178, 68);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 39);
    ctx.lineTo(212, 39);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(152, 27);
    ctx.lineTo(208, 55);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(195, 11);
    ctx.lineTo(180, 40);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(158, 14);
    ctx.lineTo(198, 65);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(168, 10);
    ctx.lineTo(188, 68);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(208, 16);
    ctx.lineTo(160, 65);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(212, 26);
    ctx.lineTo(153, 52);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "red";
    ctx.stroke();



  // ----------------------------------------------------------------------Второй


  //лицо
  ctx.beginPath();
  ctx.moveTo(420, 140);
  ctx.bezierCurveTo(360, 270, 570, 490, 700, 230);
  ctx.lineTo(705, 140);
  ctx.bezierCurveTo(705, 180, 550, 90, 420, 140);
  ctx.fillStyle = "#FFE4C4";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#FFE4C4";
  ctx.fill();
  ctx.stroke();


  // шапка
  ctx.beginPath();
    ctx.moveTo(400, 150);
    ctx.bezierCurveTo(480, 120, 520, 120, 705, 150);
    ctx.bezierCurveTo(705, 5, 715,20, 700, 5);
    ctx.bezierCurveTo(705, 5, 485, 10, 430, 5);
    ctx.bezierCurveTo(400, 5, 400, 70, 400, 150);
    ctx.fillStyle = "#3ade3a";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();

  // шапка
  ctx.beginPath();
    ctx.moveTo(423, 60);
    ctx.lineTo(423, 140);
    ctx.bezierCurveTo(423, 140, 555,120, 690, 150);
    ctx.lineTo(690, 60);
    ctx.lineTo(423,60);
    ctx.fillStyle = "green";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();

  // шапка левое ухо
  ctx.beginPath();
    ctx.ellipse(400, 185, 30, 70, Math.PI /9, 5, 8 * Math.PI);
    ctx.fillStyle = "#3ade3a";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();
  // шапка ухо
  ctx.beginPath();
    ctx.ellipse(715, 185, 30, 80, Math.PI /-9, 5, 8 * Math.PI);
    ctx.fillStyle = "#3ade3a";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();



  //брови
  ctx.beginPath();
    ctx.moveTo(515, 110);
    ctx.lineTo(475, 135);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();
  //брови
  ctx.beginPath();
    ctx.moveTo(605, 115);
    ctx.lineTo(655, 135);
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();




  //глаза
  ctx.beginPath();
    ctx.ellipse(520, 185, 40, 50, Math.PI / 6, 5, 8 * Math.PI);
    ctx.fillStyle = "white";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.ellipse(605, 180, 40, 50, Math.PI / -6, 5, 8 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.arc(530, 190, 5, 0, 4 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

  ctx.beginPath();
    ctx.arc(580, 185, 5, 0, 4 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

  //рот
  ctx.beginPath();
     ctx.lineWidth = 1;
     ctx.strokeStyle = "black";
     ctx.moveTo(512, 270);
     ctx.lineTo(615, 270);
     ctx.bezierCurveTo(615, 270, 595, 295, 570, 310);
     ctx.bezierCurveTo(570, 310, 570, 320, 512, 270);
     ctx.fillStyle = "black";
     ctx.fill();
     ctx.stroke();

  ctx.beginPath();
     ctx.moveTo(520, 272);
     ctx.lineTo(545, 272);
     ctx.lineTo(545, 283);
     ctx.lineTo(530, 283);
     ctx.lineTo(522, 272);
     ctx.fillStyle = "white";
     ctx.fill();
     ctx.stroke();

  ctx.beginPath();
     ctx.moveTo(547, 272);
     ctx.lineTo(565, 272);
     ctx.lineTo(565, 283);
     ctx.lineTo(548, 283);
     ctx.lineTo(547, 272);
     ctx.fillStyle = "white";
     ctx.fill();
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(567, 272);
     ctx.lineTo(585, 272);
     ctx.lineTo(585, 283);
     ctx.lineTo(568, 283);
     ctx.lineTo(567, 272);
     ctx.fillStyle = "white";
     ctx.fill();
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(587, 272);
     ctx.lineTo(605, 272);
     ctx.lineTo(605, 278);
     ctx.lineTo(588, 283);
     ctx.lineTo(587, 272);
     ctx.fillStyle = "white";
     ctx.fill();
     ctx.stroke();


  //ноги
  ctx.beginPath();
    ctx.moveTo(453, 425);
    ctx.lineTo(453, 470);
    ctx.lineTo(660, 470);
    ctx.lineTo(660, 425);
    ctx.lineTo(453, 425);
    ctx.fillStyle = "blue";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();

  //Ступни
  ctx.beginPath();
    ctx.moveTo(440, 470);
    ctx.lineTo(685, 470);
    ctx.bezierCurveTo(625, 470, 620, 450, 440, 470);
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();

  //пальто
  ctx.beginPath();
    ctx.moveTo(455, 305);
    ctx.bezierCurveTo(455, 305, 405, 350, 420, 385);
    ctx.lineTo(445, 400);
    ctx.lineTo(455, 400);
    ctx.lineTo(445, 430);
    ctx.bezierCurveTo(445, 430, 510, 460, 650, 435);
    ctx.lineTo(665, 430);
    ctx.lineTo(700, 400);
   // ctx.moveTo(700, 390);
    ctx.bezierCurveTo(700, 390, 700, 350, 650, 305);
    ctx.bezierCurveTo(650, 305, 550, 390, 455, 305);
    ctx.fillStyle = "#FF4500";
    ctx.fill();
    ctx.stroke();
  //линия рукава справа
    ctx.moveTo(460, 360);
    ctx.lineTo(450, 395);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();

  //линия рукава слева
  ctx.beginPath();
    ctx.moveTo(650, 360);
    ctx.lineTo(665, 410);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
  //полы пальто
  ctx.beginPath();
    ctx.moveTo(565, 340);
    ctx.lineTo(565, 445);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();


  //варежка правая
  ctx.beginPath();
    ctx.arc(430, 410, 25, 0, 5 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(450, 405, 10, 0, 4 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();


  //варежка левая
    ctx.beginPath();
    ctx.arc(680, 420, 25, 0, 5 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(658, 410, 10, 0, 5 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();


  //картман
  ctx.beginPath();
    ctx.moveTo(490, 360);
    ctx.lineTo(490,410);
    ctx.lineTo(530, 410);
    ctx.lineTo(530, 360);
    ctx.lineTo(490, 360);
    ctx.lineTo(510, 380);
    ctx.lineTo(530, 360);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();

  //картман
  ctx.beginPath();
    ctx.moveTo(590, 360);
    ctx.lineTo(590,410);
    ctx.lineTo(630, 410);
    ctx.lineTo(630, 360);
    ctx.lineTo(590, 360);
    ctx.lineTo(610, 380);
    ctx.lineTo(630, 360);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();


    // воротник
  ctx.beginPath();
    ctx.moveTo(455, 305);
    ctx.bezierCurveTo(455, 305, 500, 370, 565, 340);
    ctx.bezierCurveTo(565, 340, 610, 360, 650, 303);
    ctx.bezierCurveTo(650, 303, 550, 380, 455, 305);
    ctx.fill();
    ctx.fillStyle = "green";
    ctx.stroke();

}


