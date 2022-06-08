import type { RobotOption } from './types'

enum RobotCorrespondences {
  userAgent = 'User-agent',
  allow = 'Allow',
  disallow = 'Disallow',
  crawlDelay = 'Crawl-delay',
  cleanParam = 'Clean-param',
}

type Value = string | number

interface RobotRuleInterface {
  key: RobotCorrespondences[keyof RobotCorrespondences]
  value: Value
}

export function getRules(options: RobotOption[]) {
  const rules: RobotRuleInterface[] = []

  options.forEach((rule) => {
    const keys = Object
      .keys(RobotCorrespondences)
      .filter(key => typeof rule[key as keyof RobotOption] !== 'undefined') as (keyof RobotOption)[]

    keys.forEach(key => {
      const values = Array.isArray(rule[key])
        ? rule[key] as Value[]
        : [rule[key]] as Value[]

      values.forEach((value) => {
        rules.push({ key: RobotCorrespondences[key], value })
      })
    })
  })

  return rules
}

export function getContent(rules: RobotRuleInterface[], hostname: string) {
  return rules
    .map(rule => `${rule.key}: ${String(rule.value).trim()}`)
    .join('\n')
    .concat(`\n\nSitemap: ${getFinalSitemapPath(hostname)}`)
}

export function getFinalSitemapPath(hostname: string) {
  return `${hostname.replace(/\/$/, '')}/sitemap.xml`
}
