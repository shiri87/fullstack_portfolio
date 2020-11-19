const Joi = require("joi") // Joi is used to validate user input

module.exports = {
  //Middleware - Joi Validation
  register(req, res, next) {
    //Joi schema
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,32}$")),
    })
    //Using Joi schema to validate user data
    const { error, value } = schema.validate(req.body)
    console.log(error)

    //If there is a error
    if (error) {
      //Switch statement checks what error occurred and send back a message to the user about the error
      switch (error.details[0].context.key) {
        case "email":
          res.status(400).send({
            error: "you must provided a valid email address",
          })
          break
        case "password":
          res.status(400).send({
            error: `${error}The password failed to match the requirements:
                        <br>
                        1. It must contain ONLY the following characters: lowercase, uppercase, numbers
                        <br>
                        2. Must be between 8 and 32 characters
                        `,
          })
          break
        default:
          res.status(400).send({
            error: "Invalid registration information",
          })
      }
    } else {
      next()
    }
  },
}
