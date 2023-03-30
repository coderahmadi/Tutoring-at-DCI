let countNumber = 0;
let a = document.getElementById('countValue');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(
    function (eachSingleButton) {
        eachSingleButton.addEventListener('click', function (even) {
            const arrOfClass = even.currentTarget.classList;
            // console.log(arrOfClass);
            if (arrOfClass.contains('increase')) {
                countNumber++;
            }
            if (arrOfClass.contains('reset')) {
                countNumber = 0;
            }
            if (arrOfClass.contains('decrease')) {
                countNumber--;
            }
            if (countNumber > 0) {
                countValue.style.color = "green";

            }
            if (countNumber < 0) {
                countValue.style.color = "red";

            }
            if (countNumber === 0) {
                countValue.style.color = "black";

            }
            countValue.textContent = countNumber;
        });

    }
);






// const arr = ['a', 'b', 'c'];
// arr.forEach(
//     (element)=>{
// console.log(element);
//     }
// );


