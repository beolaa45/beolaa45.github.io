$(document).ready(function () {
  let API_ROOT = "https://khanh-quan-li.herokuapp.com";
  let request = $.ajax({
    url: `${API_ROOT}/users`,
    method: "GET"
  });


  
  request.done(function (data) {
    console.log("data", data);

    let html = data.map((value) => {
      return `<tr>
            <td>${value.name}</td>
            <td>${value.birthday}</td>
            <td>${value.email}</td>
            <td>${value.phone}</td>
            <td>
                <a class="table_link" href="./edit.html?id=${value.id}">
                    <i class="fas fa-edit"></i>Chỉnh sửa 
                </a>
                |
                <a class="table__link-delete" data-toggle="modal" data-value=${JSON.stringify(
                  value.id
                )} data-target="#exampleModalLong" >
                    <i class="fas fa-trash-alt"></i>
                    Xóa
                </a>
            </td>
        </tr>`;
    });

    $(".tbody").html(html.join(""));
    let event
    $(".table__link-delete").click(function (e) {
      let value = $(this).data("value");
   
      $(".modal-body").html(`<h1>${value}</h1>`);
      event = e.target.closest("tr")
      console.log(event)
    });
    $(".btn-primary").click(function (e) {
      let index = +$(".modal-body h1").text();
      console.log(typeof index);
  

      let request = $.ajax({
        url: `${API_ROOT}/users/${index}`,
        method: "DELETE",
      });

      request.done(function (data) {
        event.remove();
        
   
      });
    });
  });

  request.fail(function (jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
  });

  /////////////////////////////
});
