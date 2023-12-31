/*
เด็กชายเอ เป็นคนชอบดูโทรทัศน์ทั้งแต่เด็กเล็ก แม้ตอนนี้เขายังเด็กอยู่ เขาก็ยังชอบดูเจ้าสิ่งนี้อยู่ตลอด โดยรายการโปรดของเขาคือ "มวยปล้ำ" เขาต้องการที่จะเป็นนักกีฬามวยปล้ำเป็นงานอดิเรกของเขาในอนาคต คุณพ่อเขาเลยได้แนะนำให้เขาไปยกน้ำหนัก เพื่อออกกำลังกายดู เขาชอบการออกกำลังกายประเภทนี้มาก ๆ

จนเขาได้เรียนจนถึงระดับมัธยมศึกษาปีที่ 2 เขาได้เรียนรู้จัก "เลขยกกำลัง" จากวิชาคณิตศาสตร์ เขาประทับใจมาก และ สนใจกับเรื่องดังกล่าว เพราะมันออกเสียงคล้าย ๆ กับการ "ยกน้ำหนัก ออกกำลังกาย" ที่พ่อเขาสอนมาตั้งแต่เด็ก จึงมีแนวคิดว่า ถ้าหากเขาได้พัฒนาโปรแกรมเกี่ยวกับสิ่งดังกล่าวหละก็ คงเป็นอะไรที่เท่มากแน่ ๆ เขาจึงพัฒนาโปรแกรมรับเลขไปจำนวนหนึ่ง ไปยกกำลังกับตัวเลขอีกตัวหนึ่ง และ แสดงผลออกมาบนหน้าจอ ให้เราพัฒนาโปรแกรมดังกล่าว โดยดูตัวอย่างได้จากกรณีทดสอบด้านล่าง
*/

//Output Example
// console.log("Hello borntoDev Lab")

//Input Example
// var rl = require("readline").createInterface(process.stdin);
// var inputList = [];

// rl.on("line", (line) => {
// 	inputList.push(line);
// }).on("close", () => {

	//Code Here
	// console.log("input:", inputList.join(""))

  // const base = inputList[0];
  // const exponent = inputList[1];
  const base = prompt('Enter base:');
  const exponent = prompt('Enter exponent:');

  const findExponentNubmer = (base, exponent) => base ** exponent;

  console.log(findExponentNubmer(base, exponent));
  alert(findExponentNubmer(base, exponent));

// });

//Tips:  Run for check input format

// https://www.borntodev.com/devlab/api/tasks/32/share?sharer=68419&passed=0