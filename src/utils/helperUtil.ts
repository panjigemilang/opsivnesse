const defaultLocale = 'en'

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key) || ''
}

export const getAvailableLanguages = () => {
  const availableLanguages: string[] = []

  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key]) => {
      const yaml = key.endsWith('.yaml')

      return availableLanguages.push(key.slice(14, yaml ? -5 : -4))
    })

  return availableLanguages
}

export const pathHasPrefix = () => {
  const availableLanguages = getAvailableLanguages()
  const pathname = window.location.pathname
  // let lang = pathname.match(/^\/([^/]+)/ig.exec(pathname)?.[1])![0]
  const lang = availableLanguages.filter((lang: string) => pathname.includes(lang))

  return lang
}

export const getLang = (type = 'lang', once = false) => {
  const localStorageLang = getLocalStorage('lang')
  // default for BASE_URL
  let lang = ''
  // default for locale
  if (type === 'lang')
    lang = defaultLocale
  // check if pathname has prefix locale
  if (pathHasPrefix().length)
    lang = pathHasPrefix()[0].replace(/\//g, '')

  // run only once also check the localstorage, to set the localstorage or not
  if (once && localStorageLang !== '')
    setLocalStorage('lang', localStorageLang)
  else if (once && localStorageLang === '')
    setLocalStorage('lang', lang)

  // check localstorage if lang exists
  if (localStorageLang !== '') {
    // if type !== lang & lang same as default locale, then remove the prefix
    if (type !== 'lang' && localStorageLang === defaultLocale)
      lang = ''
    else
      lang = getLocalStorage('lang')
  }

  return lang
}
