function is_youtubelink(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
  }
  function is_imagelink(url) {
      var p = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
      return (url.match(p)) ? true : false;
  }
  function is_vimeolink(url,el) {
      var id = false;
      $.ajax({
        url: 'https://vimeo.com/api/oembed.json?url='+url,
        async: true,
        success: function(response) {
          if(response.video_id) {
            id = response.video_id;
            el.classList.add('lightbox-vimeo').setAttribute('data-id',id);
          }
        }
      });
  }
  function setGallery(el) {
      var link_elements = el.parentNode.querySelectorAll("a[class*='lightbox-']");
      link_elements.forEach(link_element => {
          link_element.classList.remove('current');
      });
      link_elements.forEach(link_element => {
          if(el.getAttribute('href') == link_element.getAttribute('href')) {
              link_element.classList.add('current');
          }
      });
      if(link_elements.length>1) {
          document.getElementById('lightbox').classList.add('gallery');
          link_elements.forEach(link_element => {
              link_element.classList.add('gallery');
          });
      }
      var currentkey;
      var gallery_elements = document.querySelectorAll('a.gallery');
      Object.keys(gallery_elements).forEach(function (k) {
          if(gallery_elements[k].classList.contains('current')) currentkey = k;
      });
      if(currentkey==(gallery_elements.length-1)) var nextkey = 0;
      else var nextkey = parseInt(currentkey+1);
      if(currentkey==0) var prevkey = (gallery_elements.length-1);
      else var prevkey = parseInt(currentkey-1);

      document.getElementById('next').addEventListener("click", function() {
          gallery_elements[nextkey].click();
      });
      document.getElementById('prev').addEventListener("click", function() {
           gallery_elements[prevkey].click();
      });
  }

  document.addEventListener("DOMContentLoaded", function() {
      
      //add classes to links to be able to initiate lightboxes
      var elements = document.querySelectorAll('a');
      elements.forEach(element => {
          var url = element.getAttribute('href');
          if(url) {
              if(url.indexOf('vimeo') !== -1 && !element.classList.contains('no-lightbox')) {
                  is_vimeolink(url,$(this));
              }
              if(is_youtubelink(url) && !element.classList.contains('no-lightbox')) {
                  element.classList.add('lightbox-youtube');
                  element.setAttribute('data-id',is_youtubelink(url));
              }
              if(is_imagelink(url) && !element.classList.contains('no-lightbox')) {
                  element.classList.add('lightbox-image');
                  var href = element.getAttribute('href');
                  var filename = href.split('/').pop();
                  var split = filename.split(".");
                  var name = split[0];
                  element.setAttribute('title',name);
              }
          }
      });



      //remove the clicked lightbox
      document.getElementById('lightbox').addEventListener("click", function(event) {
          if(event.target.id != 'next' && event.target.id != 'prev'){
              this.innerHTML = '';
              document.getElementById('lightbox').style.display = 'none';
          }
      });
    
      //add the youtube lightbox on click
      var elements = document.querySelectorAll('a.lightbox-youtube');
      elements.forEach(element => {
          element.addEventListener("click", function(event) {
              event.preventDefault();
              document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://www.youtube.com/embed/'+this.getAttribute('data-id')+'?autoplay=1&showinfo=0&rel=0"></iframe></div>';
              document.getElementById('lightbox').style.display = 'block';

              setGallery(this);
          });
      });

      //add the image lightbox on click
      var elements = document.querySelectorAll('a.lightbox-image');
      elements.forEach(element => {
          element.addEventListener("click", function(event) {
              event.preventDefault();
              document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="img" style="background: url(\''+this.getAttribute('href')+'\') center center / contain no-repeat;" title="'+this.getAttribute('title')+'" ><img src="'+this.getAttribute('href')+'" alt="'+this.getAttribute('title')+'" /></div><span>'+this.getAttribute('title')+'</span>';
              
              document.getElementById('lightbox').style.display = 'block';
          });
      });

      //add the vimeo lightbox on click
      var elements = document.querySelectorAll('a.lightbox-vimeo');
      elements.forEach(element => {
          element.addEventListener("click", function(event) {
              event.preventDefault();
              document.getElementById('lightbox').innerHTML = '<a id="close"></a><a id="next">&rsaquo;</a><a id="prev">&lsaquo;</a><div class="videoWrapperContainer"><div class="videoWrapper"><iframe src="https://player.vimeo.com/video/'+this.getAttribute('data-id')+'/?autoplay=1&byline=0&title=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
              document.getElementById('lightbox').style.display = 'block';
          });
      });
      

  });