$.ajax({
  method: "GET",
  url: "http://problemscommunityback.dev/hello"
})
.done(function( data ) {
  new Vue(
  {
    el: '#vueApp',

    data: {
      datas: JSON.parse(data),
      debug: true,
    }
  });

});
