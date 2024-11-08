const RegisterController = () => import('#controllers/auth/register_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('auth/register', [RegisterController, 'show'])
router.post('auth/register', [RegisterController, 'store'])
