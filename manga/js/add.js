console.log(1)
let API_ROOT = "http://localhost:3000";
$(".btn-success").click(function(){
    let data = {
        name: $("#name").val(),
        email: $("#email").val(),
  
        phone: $("#phone").val(),
        birthday: $("#birthYear").val(),
      };

      console.log(data)
      $.ajax({
        type: "Post",
        url: `${API_ROOT}/users`,
        dataType: "json",
        data: data,
      }).done(function (data) {
        window.location.href = "index.html";
      });
})