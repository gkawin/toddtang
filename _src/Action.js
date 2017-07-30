import AlgebraicType from 'algebraic-type'

const Action = AlgebraicType({
  RegisterRequested: { status: String }
})

export const {
  RegisterRequested
} = Action
