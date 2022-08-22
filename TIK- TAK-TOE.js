var button = document.querySelectorAll('button');
const calcGrid = document.querySelector('.calculator-grid');
const winner = document.querySelector('.win');
const restart = document.querySelector('.refresh');
let arr1 = [1,2,3];  // ARRAY FOR STORING VALUES IN THE FIRST ROW OF GAME BOARD
let arr2 = [4,5,6];  // ARRAY FOR STORING VALUES IN THE SECOND ROW OF GAME BOARD
let arr3 = [7,8,9];  // ARRAY FOR STORING VALUES IN THE THIRD ROW OF GAME BOARD
let text,btnValue,disableAllButton,comparer;


button.forEach((curr,val,allBtn) => { // LOOP THROUGH THE ARRAY
    disableAllButton = function() {  // DISABLE ALL OTHER BUTTONS AFTER A WIN
        for (let num = 1; num < 10; num++) { // USE LOOP TO GET THE CHILDREN OF "CALCGRID" IN THE GAME TABLE EXCEPT RESTART BUTTON 
            allBtn[num].disabled = true  // DISABLE THE BUTTON( DISABLED OR NOT )
        }
    }

    curr.addEventListener('click', (e) => { // ADD EVENTLISTENER TO PRESENT BUTTON
    if (curr.value >= 1) {   // BUTTON VALUE MUST BE EQUAL TO OR GRAETER THAN 1 
            if (check % 2 === 0 && check < 10) {  // CHECK IF TO DISPLAY 'X' OR 'O' TO UI
                  curr.children[0].classList.remove('hide');  // DISPLAY "X" 
                  curr.disabled = true;  // DISABLE BUTTON
                  text = curr.children[0].textContent;   // GET TEXT DISPLAYED ON THE UI
                  btnValue = parseInt(curr.value);  // GET VALUE OF BUTTON CLICKED:THIS WILL BE USED TO STORE THE 'text' INTO AN ARRAY
            } else { 
                  curr.children[1].classList.remove('hide'); // DISPLAY "O" 
                  curr.disabled = true;   // DISABLE BUTTON
                  text = curr.children[1].textContent;  // GET TEXT DISPLAYED ON THE UI
                  btnValue = parseInt(curr.value);  // GET VALUE OF BUTTON CLICKED:THIS WILL BE USED TO STORE THE 'text' INTO AN ARRAY
            };

    
             // TO STORE VALUES INTO ARRAY
             if (btnValue < 4) {  // VALUE < 4 STORE IN "arr1"
                    switch (btnValue) {
                    case 1:  // VALUE = 1, PUSH TO THE START OF THE ARRAY
                        arr1.splice(0,1,text) 
                        break;
                    case 2 :    // VALUE = 2, PUSH TO THE MIDDLE OF THE ARRAY
                        arr1.splice(1,1,text)
                        break;
                    case 3 :   // VALUE = 3, PUSH TO THE END OF THE ARRAY
                        arr1.splice(2,1,text)
                        break;
                    default: return  // DO NOTHING
                    }
             }  else if (btnValue < 7) {  // VALUE < 7 STORE IN "arr2"
                    switch (btnValue) {
                    case 4:  // VALUE = 4, PUSH TO THE START OF THE ARRAY
                        arr2.splice(0,1,text) 
                        break;
                    case 5 :    // VALUE = 5, PUSH TO THE MIDDLE OF THE ARRAY
                        arr2.splice(1,1,text)
                        break;
                    case 6 :   // VALUE = 6, PUSH TO THE END OF THE ARRAY
                        arr2.splice(2,1,text)
                        break;
                    default: return  // DO NOTHING
                    }
             }  else if (btnValue < 10) {  // VALUE < 10 STORE IN "arr3"
                    switch (btnValue) {
                        case 7:  // VALUE = 7, PUSH TO THE START OF THE ARRAY
                            arr3.splice(0,1,text) 
                            break;
                        case 8 :    // VALUE = 8, PUSH TO THE MIDDLE OF THE ARRAY
                            arr3.splice(1,1,text)
                            break;
                        case 9 :   // VALUE = 9, PUSH TO THE END OF THE ARRAY
                            arr3.splice(2,1,text)
                            break;
                        default: return // DO NOTHING
                    }
             }


            comparer = { // "COMPARER" FOR GAME "WINNER" OR "LOSSER"
                rows : { //  IF WIN COMES FROM ANY ROW
                row1 :  arr1[0] === arr1[1] && arr1[0] === arr1[2] && arr1[1] === arr1[2],  //  IF WIN COMES FROM ANY ROW1
                row2 :  arr2[0] === arr2[1] && arr2[0] === arr2[2] && arr2[1] === arr2[2],  //  IF WIN COMES FROM ANY ROW2
                row3 :  arr3[0] === arr3[1] && arr3[0] === arr3[2] && arr3[1] === arr3[2]   //  IF WIN COMES FROM ANY ROW3
                },
                
                columns : {  // IF WIN COMES FROM ANY COLUMN
                 col1 : arr1[0] === arr2[0] && arr1[0] === arr3[0] && arr2[0] === arr3[0],   //  IF WIN COMES FROM ANY COLUMN1
                 col2 : arr1[1] === arr2[1] && arr1[1] === arr3[1] && arr2[1] === arr3[1],    //  IF WIN COMES FROM ANY COLUMN2
                 col3 : arr1[2] === arr2[2] && arr1[2] === arr3[2] && arr2[2] === arr3[2]   //  IF WIN COMES FROM ANY COLUMN3
                },

                diagonals: { // IF WIN COMES IS A DIAGONAL
                    negSlope: arr1[0] === arr2[1] && arr1[0] === arr3[2] && arr2[1] === arr3[2],  //  IF SLOPE IS NEGATIVE
                    posSlope: arr3[0] === arr2[1] && arr3[0] === arr1[2] && arr2[1] === arr1[2]  //  IF SLOPE IS POSITIVE
                }
             }

            
            if (comparer.rows.row1 || comparer.rows.row2 || comparer.rows.row3) {
                disableAllButton()  // DISABLE ALL THE BUTTTONS AFTER A WIN  
            }  else if ((comparer.diagonals.negSlope || comparer.diagonals.posSlope) === true) {
                disableAllButton()  // DISABLE ALL THE BUTTTONS AFTER A WIN
            } else if ((comparer.columns.col1 || comparer.columns.col2 || comparer.columns.col3) === true)  {
                disableAllButton()  // DISABLE ALL THE BUTTTONS AFTER A WIN
            }
    }
  })    
})

 
let check = 0;  // TEXT CHANGER
 calcGrid.addEventListener("click", (e) => { // INCREASE CHECK ON CLICK 
     check += 1;  // ADD 1 TO 'check' IF THE 'calcGrid' IS CLICKED
});


restart.addEventListener('click', function restartGame() {  // RESTART GAME ON BUTTON CLICK
    for (let num = 1; num < 10; num++) {  // USE LOOP TO GET THE NUMBER OF CHILDREN OF "CALCGRID" IN THE GAME TABLE EXCEPT RESTART BUTTON
        for (let num1 = 0; num1 < 2; num1++) { // USE LOOP TO GET THE NUMBER OF CHILDREN OF EACH BUTTTON IN THE GAME TABLE
            button[num].children[num1].classList.add('hide')  // ADD THE ADD CLASS TO ALL THE 'X's' AND 'O's' IN THE GAME TABLE
            button[num].disabled = false  // UNDISABLE ALL BUTTONS( DISABLED OR NOT ) AND 'O's' IN THE GAME TABLE  
        }
    }
        // SET TO INITIAL STATE
    arr1 = [1,2,3]  // SET 'ARR1' ARRAYS TO ITS INITIAL STATE
    arr2 = [4,5,6]  // SET 'ARR1' ARRAYS TO ITS INITIAL STATE
    arr3 = [7,8,9]  // SET 'ARR1' ARRAYS TO ITS INITIAL STATE
    check = 0;  // SET 'CHECK' TO ITS INITIAL STATE
})

  // HAPPY PLAYING 😁️🎉️

    




