type Mods = Record<string, boolean | string>

export const classNames = (classes: string, mods?: Mods, additional?: string[]): string => {
  return [
    classes,
    ...additional.filter(value => value),
    Object.keys(mods).filter(className => mods[className])
  ].join(' ')
}