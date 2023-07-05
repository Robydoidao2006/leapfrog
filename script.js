
                                        
                                                $(function () {
                                                    $("#car-color img:eq(0)").nextAll().hide();
                                                    $(".button-color img").click(function (e) {
                                                        var index = $(this).index();
                                                        $("#car-color img").eq(index).show().siblings()
                                                            .hide();

                                                    });
                                                });
                                 
