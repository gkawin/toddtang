import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  RegisterRequested: { status: String },
})

export default Action
