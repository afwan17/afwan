
    function myFunction() {
      var tulisanbesar = document.getElementsByClassName('tulisan-besar');
      tulisanbesar[0].classList.toggle("dark-mode")
      var tulisankecil = document.getElementsByClassName('tulisan-kecil');
      tulisankecil[0].classList.toggle("tulisan-kecil-dark")
      var lessonWrapper = document.getElementsByClassName('lesson-wrapper');
      lessonWrapper[0].classList.toggle("lesson-dark")
      var messagewrapper = document.getElementsByClassName('message-wrapper')
      messagewrapper[0].classList.toggle('messagewrapper-dark')
      var topwrapper = document.getElementsByClassName('top-wrapper');
      topwrapper[0].classList.toggle("topwrapperdark")
  }