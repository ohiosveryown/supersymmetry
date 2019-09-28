const enter = () => {
  // constance wu's
  const header_link = document.querySelector('.header-link')

  // styles
  header_link.style.cssText = `
    opacity: 0;
    animation: In calc(var(--animbase) * 2) var(--inout) 200ms forwards;
  `
}

const to_index = () => {
  const main = document.querySelector('main')
  const header_first_line = document.querySelector('.first-line')
  const header_second_line = document.querySelector('.second-line')
  const header_link = document.querySelector('.header-link')

  // styles
  main.style.cssText = `
    opacity: 1;
    animation: Out calc(var(--animbase) * 1.5) var(--inout) forwards;
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
}

const to_colophon = () => {
  // constance wu's
  const page_cover = document.querySelector('.page-cover')
  const header = document.querySelector('header')
  const header_link = document.querySelector('.header-link')

  // styles
  page_cover.style.cssText = `
    transform: scaleX(1);
    transition: all 1000ms var(--inout);
  `

  header_link.style.cssText = `
    opacity: 1;
    animation: Out calc(var(--animbase) * 1.5) var(--inout) forwards;
  `
}

// exports
export { enter, to_index, to_colophon }