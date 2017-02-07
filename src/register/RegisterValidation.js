import _ from 'lodash'

export const validate = (inputState: Object, ruleRunners: Array) => _.reduce(ruleRunners,
  (memo, runner) => Object.assign(memo, runner(inputState)),
  { }
)

export const ruleRunner = (field: String, fieldName: String, validations: Array) => {
  return function (inputState: Object) {
    for (let fnRule of validations) {
      const fnErr = fnRule(inputState[field])
      if (fnErr) return { [field]: fnErr(fieldName) }
    }
  }
}
