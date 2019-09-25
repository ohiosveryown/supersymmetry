

const leave_logic = () => {
  // constance wu's
  const header_date = document.querySelector('.header-date')
  const header_first_line = document.querySelector('.header-first-line')
  const header_second_line = document.querySelector('.header-second-line')
  const header_link = document.querySelector('.header-link')
  const page_cover = document.querySelector('.page-cover')
  const mq = window.matchMedia( '(min-width: 700px)' )

  // styles
  if (mq.matches) {
    header_date.style.cssText = `
      transform: translateY(0);
      opacity: 0;
      transition: transform 900ms var(--inout),
      opacity 500ms ease 400ms;
    `

    header_first_line.style.cssText = `
      transform: translateY(24px);
      transition: all 900ms var(--inout) 50ms;
    `

    header_second_line.style.cssText = `
      transform: translateY(52px);
      transition: all 900ms var(--inout) 100ms;
    `

    header_link.style.cssText = `
      transform: translateY(0);
      opacity: 0;
      transition: all 900ms var(--inout) 150ms, opacity 500ms ease 150ms;
    `

    page_cover.style.cssText = `
      transform: scaleX(1);
      transition: all 1000ms var(--inout);
    `

  } else {
      header_date.style.cssText = `
        opacity: 0;
        transition: opacity 500ms ease 400ms;
      `

      header_link.style.cssText = `
        opacity: 0;
        transition: opacity 500ms ease 150ms;
      `

      page_cover.style.cssText = `
        transform: scaleX(1);
        transition: all 1000ms var(--inout);
      `
  }
}


const static_logic = () => {
  // date
  const ref_date = document.querySelector('.ref-date')
  const ref_date_dim = ref_date.getBoundingClientRect()
  const ref_date_y = ref_date_dim.top + 'px'

  const header_date = document.querySelector('.header-date')
  header_date.style.transform = `translateY(${ref_date_y})`

  // first line
  const ref_first_line = document.querySelector('.ref-first-line')
  const ref_first_line_dim = ref_first_line.getBoundingClientRect()
  const ref_first_line_y = ref_first_line_dim.top + 'px'

  const header_first_line = document.querySelector('.header-first-line')
  header_first_line.style.transform = `translateY(${ref_first_line_y})`

  // second line
  const ref_second_line = document.querySelector('.ref-second-line')
  const ref_second_line_dim = ref_second_line.getBoundingClientRect()
  const ref_second_line_y = ref_second_line_dim.top + 'px'

  const header_second_line = document.querySelector('.header-second-line')
  header_second_line.style.transform = `translateY(${ref_second_line_y})`

  // colophon link
  const ref_link = document.querySelector('.ref-link')
  const ref_link_dim = ref_link.getBoundingClientRect()
  const ref_link_y = ref_link_dim.top + 'px'

  const header_link = document.querySelector('.header-link')
  header_link.style.transform = `translateY(${ref_link_y})`

  // delay for second entries
  const enterDelay = document.querySelectorAll('.enter')[1]
  enterDelay.style.animationDelay = '200ms'
  const articleDelay = document.querySelectorAll('.article-content')[1]
  articleDelay.style.animationDelay = '1300ms'

  // update on resize
  const update_y = () => {
    const ref_date_dim = ref_date.getBoundingClientRect()
    const ref_date_y = ref_date_dim.top + 'px'
    header_date.style.transform = `translateY(${ref_date_y})`

    const ref_first_line_dim = ref_first_line.getBoundingClientRect()
    const ref_first_line_y = ref_first_line_dim.top + 'px'
    header_first_line.style.transform = `translateY(${ref_first_line_y})`

    const ref_second_line_dim = ref_second_line.getBoundingClientRect()
    const ref_second_line_y = ref_second_line_dim.top + 'px'
    header_second_line.style.transform = `translateY(${ref_second_line_y})`

    const ref_link_dim = ref_link.getBoundingClientRect()
    const ref_link_y = ref_link_dim.top + 'px'
    header_link.style.transform = `translateY(${ref_link_y})`
  }
  window.onresize = update_y
}


// exports
export { leave_logic, static_logic }