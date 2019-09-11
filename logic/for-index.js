const leave_logic = () => {
  const header_date = document.querySelector('.header-date')
  header_date.style.transform = 'translateY(0)'
  header_date.style.opacity = '0'
  header_date.style.transition = 'transform 900ms cubic-bezier(.8,0,.16,1), opacity 500ms ease 400ms'

  const header_first_line = document.querySelector('.header-first-line')
  header_first_line.style.transform = 'translateY(24px)'
  header_first_line.style.transition = 'all 900ms cubic-bezier(.8,0,.16,1) 50ms'

  const header_second_line = document.querySelector('.header-second-line')
  header_second_line.style.transform = 'translateY(52px)'
  header_second_line.style.transition = 'all 900ms cubic-bezier(.8,0,.16,1) 100ms'

  const header_link = document.querySelector('.header-link')
  header_link.style.transform = 'translateY(0)'
  header_link.style.opacity = '0'
  header_link.style.transition = 'all 900ms cubic-bezier(.8,0,.16,1) 150ms, opacity 500ms ease 150ms'

  // cover
  const changeit = document.querySelector('.changeit')
  changeit.style.transform = 'scaleX(1)'
  changeit.style.transition = 'transform 1000ms cubic-bezier(.8,0,.16,1)'
}


const static_logic = () => {
  // date
  const ref_date = document.querySelector('.ref-date')
  let ref_date_dim = ref_date.getBoundingClientRect()
  let ref_date_y = ref_date_dim.top + 'px'

  const header_date = document.querySelector('.header-date')
  header_date.style.transform = `translateY(${ref_date_y})`

  // first line
  const ref_first_line = document.querySelector('.ref-first-line')
  let ref_first_line_dim = ref_first_line.getBoundingClientRect()
  let ref_first_line_y = ref_first_line_dim.top + 'px'

  const header_first_line = document.querySelector('.header-first-line')
  header_first_line.style.transform = `translateY(${ref_first_line_y})`

  // second line
  const ref_second_line = document.querySelector('.ref-second-line')
  let ref_second_line_dim = ref_second_line.getBoundingClientRect()
  let ref_second_line_y = ref_second_line_dim.top + 'px'

  const header_second_line = document.querySelector('.header-second-line')
  header_second_line.style.transform = `translateY(${ref_second_line_y})`

  // colophon link
  const ref_link = document.querySelector('.ref-link')
  let ref_link_dim = ref_link.getBoundingClientRect()
  let ref_link_y = ref_link_dim.top + 'px'

  const header_link = document.querySelector('.header-link')
  header_link.style.transform = `translateY(${ref_link_y})`

  // update on resize
  let update_y = () => {
    let ref_date_dim = ref_date.getBoundingClientRect()
    let ref_date_y = ref_date_dim.top + 'px'
    header_date.style.transform = `translateY(${ref_date_y})`

    let ref_first_line_dim = ref_first_line.getBoundingClientRect()
    let ref_first_line_y = ref_first_line_dim.top + 'px'
    header_first_line.style.transform = `translateY(${ref_first_line_y})`

    let ref_second_line_dim = ref_second_line.getBoundingClientRect()
    let ref_second_line_y = ref_second_line_dim.top + 'px'
    header_second_line.style.transform = `translateY(${ref_second_line_y})`

    let ref_link_dim = ref_link.getBoundingClientRect()
    let ref_link_y = ref_link_dim.top + 'px'
    header_link.style.transform = `translateY(${ref_link_y})`
  }

  window.onresize = update_y
}

export { leave_logic, static_logic }