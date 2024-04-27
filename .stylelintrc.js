export default {
  extends: ['stylelint-config-standard', 'stylelint-config-idiomatic-order'],
  rules: {
    /** selector class pattern must match [BEM CSS]
      Examples:
      .block
      .blockTwo
      .block__element
      .block__elementTwo
      .block__element_modificator
      .block__element_modificatorTwo
    **/
    'selector-class-pattern': [
      '^([a-z]+[A-Z0-9]*)*(__([a-z0-9]+[A-Z0-9]*)+)?(_([a-z0-9]+[A-Z0-9]*)+)?$',
      {
        /** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
        resolveNestedSelectors: true,
      },
    ],
  },
}
