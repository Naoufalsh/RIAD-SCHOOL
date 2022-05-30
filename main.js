        // change navbar styles on scroll

        window.addEventListener('scroll',()=>{
            document.querySelection('nav').classList.toggle
            ('window-scroll',window.scroll>20)
