$(document).ready(function () {
  let API_ROOT = "https://khanh-quan-li.herokuapp.com";

  let id = $(location).attr("search");
  let arr = id.split("=");
  id = arr[arr.length - 1];

  let request = $.ajax({
    url: `${API_ROOT}/users/${id}`,
    method: "GET",
  });

  request.done(function (data) {
    console.log("data", data);

    $("#name").val(data.name);
    $("#birthYear").val(data.birthday);
    $("#email").val(data.email);
    $("#phone").val(data.phone);
  });

  request.fail(function (jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
  });

  $("#btn-save").click(function (e) {
    let data = {
      name: $("#name").val(),
      email: $("#email").val(),

      phone: $("#phone").val(),
      birthday: $("#birthYear").val(),
    };

    console.log(data);

    $.ajax({
      type: "Patch",
      url: `${API_ROOT}/users/${id}`,
      dataType: "json",
      data: data,
    }).done(function (data) {
      window.location.href = "index.html";
    });
  });
});
