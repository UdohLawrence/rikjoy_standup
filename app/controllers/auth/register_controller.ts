import Staff from '#models/staff'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext){
    return view.render('pages/auth/register')
  }
  async store({ auth, request, response, session }: HttpContext){
    const data = await request.validateUsing(registerValidator)

    const staff = await Staff.create(data)

    await auth.use('web').login(staff)

    session.flash('notification', {
      type: 'success',
      message: 'Registration Successful',
    })
    
    return response.redirect('/')
  }
}