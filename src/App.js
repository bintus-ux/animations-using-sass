const App = () => {
  function handleScroll() {
    const pageTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const pageBottom = pageTop + window.innerHeight
    const fadeups = document.querySelectorAll('.fade_up')

    fadeups.forEach((fade_up) => {
      if (fade_up.getBoundingClientRect().top < pageBottom) {
        fade_up.classList.add('visible')
      } else {
        fade_up.classList.remove('visible')
      }
    })
  }

  document.addEventListener('scroll', handleScroll)

  return (
    <>
      <div class='card fade-in-card'>
        <img
          src='https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
        <div class='card_content'>
          <h2 class='card_title'>Lorem</h2>
          <p class='card_description'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            porro dolores sapiente.
          </p>
        </div>
      </div>

      <section className='fade_up red'>
        <img
          src='https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA='
          alt=''
        />
        <div className='card_content'>
          <h2 className='card_title'>Lorem</h2>
          <p className='card_description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque amet
            obcaecati nihil.
          </p>
        </div>
      </section>
      <div className='container'>
        <button type='button' className='slide_in'>
          Slide In
        </button>
      </div>
    </>
  )
}

export default App
