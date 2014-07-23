$(document).ready(function(){

  Papa.parse("courses.csv", {
    download: true,
    header: true,
    complete: function(results) {
      console.log("Remote file parsed!");
      // append the results
      var data = results.data;
      console.log(data);

      for(var i = 0, len = data.length; i < len; i++){
        var item = data[i];
        console.log(item);
        $(".isotope").append(
          '<div class="item ' + [item.schedule_type, item.quarter].join(" ") + '" data-schedule_type="' + item.schedule_type + '" data-course_url="' +  item.course_url + '">' +
              '<span class="course_number">' + item.course_number +  '</span> ' +
              '<span class="course_name">' + item.course_name +  '</span>' +
              '<div class="quarter">' + item.quarter +  '</div>' +
          '</div>'
        );
      }

      $(".item").click(function(){
        window.location = $(this).attr('data-course_url');
      }).hover(function(){ $(this).addClass("hover"); }, function(){ $(this).removeClass("hover"); });


      var $container = $(".isotope");

      $(".isotope-filters .button").click(function(){
        var fval = $(this).attr('data-filter');
        $container.isotope({ filter: "." + fval })
      }).hover(function(){ $(this).addClass("hover"); }, function(){ $(this).removeClass("hover"); });


      $container.isotope();

    }
  });




});

