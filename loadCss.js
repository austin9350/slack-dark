document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://gist.githubusercontent.com/austin9350/2c1dd619f7f6360598e9550ac2f9a4e1/raw/38d449d0fe64e0204116e5f4188446673c291441/dark-mode.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
     $("<style></style>").appendTo('head').html('#reply_container.upload_in_threads .inline_message_input_container {background: padding-box #545454}');
     $("<style></style>").appendTo('head').html('.p-channel_sidebar {background: #363636 !important}');
   }
 });
});
