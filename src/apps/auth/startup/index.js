// css normalize
import 'sanitize.css'
import 'sanitize.css/forms.css'
import 'sanitize.css/typography.css'

// css font
import '@/vendors/font/iconfont.css'

// components
import globalComponents from '@/components'
import appComponents from '../components'

export const components = new Map([
  ...globalComponents,
  ...appComponents
])
