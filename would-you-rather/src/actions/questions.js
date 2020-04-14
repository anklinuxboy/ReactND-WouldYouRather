export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  }
}

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion({ id, authedUser, option }) {
  return {
    type: ANSWER_QUESTION,
    id,
    authedUser,
    option
  }
}