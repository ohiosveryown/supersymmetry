const to_index = () => {
  // constance wu's
  const main = document.querySelector('main')
  const header_first_line = document.querySelector('.first-line')
  const header_second_line = document.querySelector('.second-line')
  const header_link = document.querySelector('.header-link')
  const colorshift = document.querySelector('.colorshift')

  // styles
  main.style.cssText = `
    opacity: 0;
    transition: all 500ms ease 200ms;
  `

  header_first_line.style.cssText = `
    transform: translateX(-200px);
    transition: all 600ms var(--inout);
  `

  header_second_line.style.cssText = `
    transform: translateX(-200px);
    transition: all 600ms var(--inout) 100ms;
  `

  header_link.style.cssText = `
    opacity: 1;
    animation: Out calc(var(--animbase) * 1.5) var(--inout) forwards;
  `

  colorshift.style.cssText = `
    background: var(--stone);
    transition: all 500ms ease 200ms;
  `
}

const to_detail = () => {
  // constance wu's
  const colorshift = document.querySelector('.colorshift')
  const main = document.querySelector('main')
  const h2 = document.querySelector('h2')

  // styles
  colorshift.style.cssText = `
    background: var(--stone);
    transition: all 500ms ease 200ms;
  `

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
export { to_index, to_detail, }