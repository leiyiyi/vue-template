// css normalize
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

// app css
import '../assets/app.scss'

// components
import globalComponents from '@/components'
import appComponents from '../components'

export const components = new Map([
  ...globalComponents,
  ...appComponents
])
