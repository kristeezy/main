// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];
const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const response = await $.ajax({
      url: 'https://jservice.io/api/categories',
      data: {
        count: NUM_CATEGORIES,
      },
    });
  
    return response.map(category => category.id);
  }
  

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    const response = await $.ajax({
      url: `https://jservice.io/api/category?id=${catId}`,
    });
  
    const clues = response.clues.map(clue => ({
      question: clue.question,
      answer: clue.answer,
      showing: null,
    }));
  
    return {
      title: response.title,
      clues: clues,
    };
  }
  

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
    const table = $('#jeopardy');

    // Clear the table if it's already populated
    table.empty();
  
    // Create the table header
    const headerRow = $('<tr>');
    for (const category of categories) {
      const th = $('<th>').text(category.title);
      headerRow.append(th);
    }
    table.append(headerRow);

    for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
        const questionRow = $('<tr>');
        for (const category of categories) {
          const td = $('<td>').text('?');
          questionRow.append(td);
        }
        table.append(questionRow);
      }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    const cell = $(evt.target);
    const rowIndex = cell.closest('tr').index();
    const colIndex = cell.index();
    const category = categories[colIndex];
    const clue = category.clues[rowIndex];
  
    if (clue.showing === null) {
      cell.text(clue.question);
      clue.showing = 'question';
    } else if (clue.showing === 'question') {
      cell.text(clue.answer);
      clue.showing = 'answer';
    }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    $('#start-restart-button').prop('disabled', true);
    $('#loading-spinner').show();
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $('#loading-spinner').hide();
    $('#start-restart-button').prop('disabled', false);
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    showLoadingView();
  
    const categoryIds = await getCategoryIds();
  
    for (const catId of categoryIds) {
      const category = await getCategory(catId);
      categories.push(category);
    }
  
    fillTable();
  
    hideLoadingView();
  }
  

// Event handler for the "Start/Restart" button
$('#start-restart-button').on('click', setupAndStart);

// Event handler for clicking on clues
$('#jeopardy').on('click', 'td', handleClick);
