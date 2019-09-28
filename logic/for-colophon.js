const to_detail = () => {

  const colorshift = document.querySelector('.colorshift')
  colorshift.style.background = 'var(--stone)'
  colorshift.style.transition = 'all 500ms ease 200ms'

  // constance wu's
  const main = document.querySelector('main')
  const h2 = document.querySelector('h2')

  // styles
  main.style.cssText = `
    opacity: 0;
    transition: all 500ms ease 200ms;
  `

  h2.style.cssText = `
    opacity: 1;
    animation: Out calc(var(--animbase) * 1.5) var(--inout) forwards;
  `
}

// exports
export { to_detail, }