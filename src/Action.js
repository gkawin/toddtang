import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  SubmitRegisterForm: {
    email: String,
    password: String,
    name: String,
    phone: String,
    bank: String,
    account_number: String
  }
})

export default Action
