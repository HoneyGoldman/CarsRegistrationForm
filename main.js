$(document).ready(function () {
    
    $.getJSON('users.json', function (data) {
        var content = '';

        $.each(data.users, function (index, user) {
            var userElement =
                '<div class="col-sm-3" style="padding-bottom:15px;">' +
                '<div class="card">' +
                '<img src="user.png" class="card-img-top" alt="' + user.name + '">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + user.name + ', ' + user.age + '</h5>' +
                '<p class="card-text">' + user.email + '</p>' +
                '</div>' + '</div>' + '</div>'
            content += userElement;
            console.log('done!')
        });
        $('#content').html(content);
        $('#searchInput').on('keyup', function() {
            var value = $(this).val().toLowerCase();
            $.getJSON('users.json', function (data) {
              var content = '';
              $.each(data.users, function (index, user) {
                  if(user.name.includes(value)){
                      var userElement =
                  '<div class="col-sm-3" style="padding-bottom:15px;">' +
                  '<div class="card">' +
                  '<img src="user.png" class="card-img-top" alt="' + user.name + '">' +
                  '<div class="card-body">' +
                  '<h5 class="card-title">' + user.name + ', ' + user.age + '</h5>' +
                  '<p class="card-text">' + user.email + '</p>' +
                  '</div>' + '</div>' + '</div>'
                  content += userElement;
                  }
              });
              $('#content').empty();
              $('#content').html(content);
          });
        });
    });
});


(function(window, document, undefined) {
    window.onload = init;
  
    function init(){
        modal = document.getElementById('myModal');
        button = document.getElementById('registerButton');
        if(modal !== null && button !==null){
        button.addEventListener("click", function () {
            modal.style.display = "block";
        })
        closeButton = document.getElementById('modalClose');
        closeButton.addEventListener("click", function () {
            modal.style.display = "none";
        })
    }
    }


    
  
  })(window, document, undefined);
