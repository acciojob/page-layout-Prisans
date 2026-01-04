import React from 'react'

const PageLayout = ({childProp}) => {
  return (
    <div>
        <header>Welcome to my website</header>
        <p>{childProp}</p>
        <footer>&copy; 2023 My Website. All rights reversed</footer>
    </div>
  )
}

export default PageLayout