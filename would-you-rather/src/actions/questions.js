export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion(qid, authedUser, answer) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer,
  }
}