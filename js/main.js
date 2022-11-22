// !!! ДЗ 28. generateList

// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел і генерує список з елементів
//Якщо за числом йде підмасив, додавати це число, потім крапку, а потім поточний елемент підмасиву. 
// Ви можете розраховувати на коректність вхідних данинх - перед підмасивом обовʼязково має бути число.

// !!! Рішення

const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3]], 5];

function generateList (array, prefix = '') {
  let html = '';
  array.forEach((el,index,arr) => {
    if(Array.isArray(el)) {
       prefix = prefix.concat(`${arr[index - 1]}.`);
       html = html.concat(generateList(el, prefix));
       prefix = '';
    } else {
       html = html.concat(`<li>${prefix}${el}</li>`);
    }
  });
  
  return `<ul>${html}</ul>`;
}

document.body.innerHTML = generateList(listOfLists);