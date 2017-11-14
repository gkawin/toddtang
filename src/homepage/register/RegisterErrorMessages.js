
export const isRequired = (fieldName: String) => `กรุณากรอก ${fieldName}`

export const minLength = (length: Number) => (fieldName: String) => `กรุณากรอก${fieldName}ให้มากกว่า ${length} หลัก`

export const isEmailMalFormat = () => 'รูปแบบอีเมล์ของคุณไม่ถูกต้อง'
