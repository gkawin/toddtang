import _ from 'lodash'

export const validate = (inputState: Object, ruleRunners: Array) => {
  return _.reduce(ruleRunners, (memo, runner) => {
    return Object.assign(memo, runner(inputState))
  }, { })
}

export const ruleRunner = (field: String, fieldName: String, validations: Array) => {
  return function (inputState: Object) {
    return _.map(validations, (rule) => {

      const errorMsg = rule(inputState[field])
      if (errorMsg) {
        console.log(field)
        return { [field]: errorMsg(fieldName) }
      }
    })
  }
}
