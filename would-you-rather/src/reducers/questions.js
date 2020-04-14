import { RECEIVE_QUESTIONS, CREATE_QUESTION, ANSWER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case CREATE_QUESTION:
      const { question } = action

      return {
        ...state,
        [question.id]: question,
      }
    case ANSWER_QUESTION:
      const { qid, authedUser, answer} = action

      let option = {}
      if (answer === 'optionOne') {
        option = {
          optionOne: {
            ...state[qid].optionOne,
            votes: state[qid].optionOne.votes.concat([authedUser])
          }
        }
      } else {
        option = {
          optionTwo: {
            ...state[qid].optionTwo,
            votes: state[qid].optionTwo.votes.concat([authedUser])
          }
        }
      }

      return {
        ...state,
        [qid]: {
          ...state[qid],
          ...option
        }
      }
      default:
        return state
  }
}