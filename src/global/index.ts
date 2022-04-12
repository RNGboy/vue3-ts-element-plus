import { App } from 'vue'
import registerProperties from './register-properties'

export function globalRegister(app: App) {
  app.use(registerProperties)
}
