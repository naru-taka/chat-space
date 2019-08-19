$(function() {

  function appendUser(user) {
    var html = `
                  <div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                  </div>
               `
   return html;
  };

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    var href = window.location.href

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $(".user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          var html = appendUser(user);
          $(".user-search-result").append(html);
        });
      }
    })

    .fail(function(){
      alert('通信に失敗しました');
    });
  });

  function clickHTML(user){
    var userId = user.data("user-id");
    var html = `<div class='chat-group-user clearfix js-chat-member' id='${userId}'>
                  <input name='group[user_ids][]' type='hidden' value="${userId}">
                  <p class='chat-group-user__name'>${user.attr("data-user-name")}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
               </div>`
    return html;
  };

  $(document).on("click",".user-search-add", function() {
    $input = $(this);
    var add_user_html = clickHTML($input);
    $("#search-users").append(add_user_html);

    $input.parent()[0].remove();
  });

  $(document).on("click",".user-search-remove", function() {
    $input = $(this);
    $input.parent().remove();
  });

  
  function addNewMessagesHTML(message){
    var imagehtml = message.image == null ? "" : `<img src="${message.image}" class="lower-message__image">`;
    var html = `<div class = "message" data-messageid="${message.id}">
                    <div class = "message__upper-info">
                      <div class = "message__upper-info__talker">
                      ${message.user_name}
                      </div>
                      <div class = "message__upper-info__date">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class = "message__text">
                      <p class="lower-message__content">
                      ${message.content}
                      </p>
                      ${imagehtml}
                    </div>
                </div>`
    return html;
  };


  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(autoUpdate,8000)
  };

  function autoUpdate() {
    var href = window.location.href;
    var lastId = $('.message').last().attr('data-messageid');

    $.ajax({
      url: href,
      dataType:'json',
      type:'GET',
    })

    .done(function(data) {
       data.messages.forEach(function(message){
         if (message.id > lastId){
           var html = addNewMessagesHTML(message);
           $('.messages').append(html);
           $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
         };
       });
    })
    .fail(function(){
      alert('error');
    });
  };
});