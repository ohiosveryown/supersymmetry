

const leave_logic = () => {
  // constance wu's
  const page_cover = document.querySelector('.page-cover')
  const header_link = document.querySelector('.header-link')

  // styles
  page_cover.style.cssText = `
  transform: scaleX(1);
  transition: all 1000ms var(--inout);
`

  header_link.style.cssText = `
  opacity: 0;
  transition: opacity 500ms ease 150ms;
  `
}


// exports
export { leave_logic }