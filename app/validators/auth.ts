import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(3).maxLength(15),
    last_name: vine.string().minLength(3).maxLength(12).nullable(),
    username: vine.string().unique(async (db, value) => {
      const result = await db.from('staff').select('username').where('username', value).first()

      return result ? false : true
    }),

    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const result = await db.from('staff').select('email').where('email', value).first()

        return result ? false : true
      }),
    password: vine.string().alphaNumeric().minLength(8).confirmed(),
  })
)
