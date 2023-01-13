let mas = [];

for (let i = 0; i < Infinity; i++) {
  // let array = mas.split(', ')
  let name = prompt("Добавьте элемент"), /* add, Ваня */
    nameSplit = name.split(", ");         /* ['stop'] */

  if (nameSplit[0] == "add") {
    mas.push(nameSplit[1]);
  } else if (nameSplit[0] == "del") {
    for (const key in mas) {
      nameSplit[1] == mas[key] ? mas.splice(key, 1) : "";
    }
  } else if (nameSplit[0] == "stop") {
    break;
  }

  console.log(mas);
}






// let arr = ['asd', 12,1564, 'asdasd', true]

// console.log(arr);