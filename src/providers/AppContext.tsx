import React from 'react'
import Cookies from 'universal-cookie'

export interface IAppContext {
  locale: string
}

export interface IAppContextActions {
  setLocale: (locale: string) => void,
}

const initialContext: IAppContext = {
  locale: 'en'
}

export const AppContext = 
  React.createContext<IAppContext & Partial<IAppContextActions>>(
    initialContext,
  )
AppContext.displayName = "AppContext"

class AppProvider extends React.PureComponent {
  state: IAppContext = initialContext
  cookies: Cookies

  constructor(props: {}) {
    super(props)

    this.cookies = new Cookies()

    const localeCookie = this.cookies.get('locale')
    const locale = (
      localeCookie ||
      (
        typeof window !== `undefined` && // so that this condition is not evaluated during Gatsby build in server side rendering..
        (
          (navigator?.languages && navigator?.languages[0]) ||
          navigator?.language
        )
      ) ||
      'en-US'
    )

    this.state = {
      ...initialContext,
      locale: locale
    }

    this.setLocale = this.setLocale.bind(this)
  }

  setLocale(locale: string) {
    this.cookies.set(
      'locale',
      locale,
      {
        path: '/'
      }
    )
    this.setState({...this.state, locale: locale})
  }

  render() {
    const context = this.state
    const actions: IAppContextActions = {
      setLocale: this.setLocale
    }

    return (
      <AppContext.Provider value={{ ...context, ...actions }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppProvider