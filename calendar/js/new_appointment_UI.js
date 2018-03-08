$(function () {
    var data = new AppointmentData();
    $(".loader").show();
    var customers = [];
    var studentMandatoryArray = ["1","7","2","6","11"];
    var nonPaidAppointments = ["3", "4", "5", "7", "8", "9","12"];
    var serviceDisabled = ["1", "3", "4", "5", "7", "8", "9","12"];
    var appointmentHour;
    var currentUser = data.getLoggedInUser();
    currentUser = currentUser[0];
    var disableddates = [];
        setTimeout(function () {
            var timeout;
            $(".customer .customer-comboBox").on("keyup paste keydown", function (e) {
                clearTimeout(timeout);
                var searchString;
                if (e.type != "keydown") {
                    timeout = setTimeout(function () {
                        var inputEl = $(".customer .customer-comboBox");
                        searchString = inputEl.val();
                        if (customers && customers.length) {
                            searchFromResult();
                        } else if (searchString.length > 2) {
                            if (e.which == 13) {
                                $(".search").click();
                            }
                        }
                    }, 300);
                } else {
                    if (e.which == 13 && searchString && searchString.length > 2) {
                        e.preventDefault();
                        $(".search").click();
                    }
                }
            });
        }, 100);
        
        var getHolidays = function () {
            var businessClosures;
            disableddates = [];
            var centerFromUrl = window.location.href.split("=")[1];
            businessClosures = data.getBusinessClosure(centerFromUrl);
            if (businessClosures != null && businessClosures.length) {
                for (var i = 0; i < businessClosures.length; i++) {
                    var startDate = businessClosures[i]['hub_startdatetime@OData.Community.Display.V1.FormattedValue'];
                    var endDate = businessClosures[i]['hub_enddatetime@OData.Community.Display.V1.FormattedValue'];
                    startDate = startDate.split('/');
                    endDate = endDate.split('/');
                    var businessClosureStartDate = new Date(startDate[2], startDate[0] - 1, startDate[1]);
                    var businessClosureEndDate = new Date(endDate[2], endDate[0] - 1, endDate[1]);
                    if (businessClosureStartDate.getTime() == businessClosureEndDate.getTime()) {
                        disableddates.push(moment(businessClosureStartDate).format('YYYY-MM-DD'));
                    }
                    else {
                        for (var j = businessClosureStartDate.getTime() ; j <= businessClosureEndDate.getTime() ; j += (24 * 60 * 60 * 1000)) {
                            disableddates.push(moment(new Date(j)).format('YYYY-MM-DD'));
                        }
                    }
                }
            }
        };

        getHolidays();
    
        var searchFromResult = function () {
            var inputEl = $(".customer .customer-comboBox");
            var searchString = inputEl.val();
            searchString = searchString.trim();
            searchString = searchString.toLowerCase();
            if (searchString.length > 2) {
                $(".search").css("display", "inline");
                var filteredCustomers;
                var autoCompleteTemplate = "";
                var count = 0;
                $.each(customers, function (key, customer) {
                    if ((customer.hub_firstname && (customer.hub_firstname.toLowerCase()).startsWith(searchString)) || (customer.hub_lastname && (customer.hub_lastname.toLowerCase()).startsWith(searchString))
                        || (customer.name && (customer.name.toLowerCase()).startsWith(searchString))) {
                        if (count <= 400) {
                            autoCompleteTemplate += "<li value=" + customer.accountid + ">" + customer.name + "</li>";
                            count++;
                        }
                    }
                });
                var customerResult = $(".customer .customerResult");
                customerResult.css("display", "block");
                if (autoCompleteTemplate && autoCompleteTemplate.length) {
                    var menu = $('.customer-dropdown');
                } else {
                    autoCompleteTemplate = "<span class='noResultFound'>No Results Found</span> "
                }
                customerResult.empty();
                customerResult.append(autoCompleteTemplate);
            } else {
                customers = [];
                var customerResult = $(".customer .customerResult");
                customerResult.css("display", "none");
            }
        }

    $("body").on("click", ".formField.customer", function (e) {
        e.stopPropagation();
    })

    $('body').on("click", ".wrapperDiv", function () {
        var customerResult = $(".customer .customerResult");
        var searchBox = $(".customer .customer-comboBox");
        var type = $(".type-btn");
        if (customerResult.length) {
            if (searchBox.val() != searchBox.text() && type.val() != "12") {
                searchBox.val('');
            }
            customerResult.css("display", "none");
        }
    })

    $("body").on("click", ".customer .customerResult li", function () {
        var searchBox = $(".customer .customer-comboBox");
        searchBox.val($(this).text());
        searchBox.text($(this).text());
        searchBox.attr("customer-id", $(this).attr("value"));
        var customerResult = $(".customer .customerResult");
        customerResult.css("display", "none");
        validateappointment();
        getStudents();
    })

    $("body").on("click", ".search", function () {
        var inputEl = $(".customer .customer-comboBox");
        var searchString = inputEl.val();
        searchString = searchString.trim();
        if (searchString && searchString.length > 2) {
            customers = data.getCustomers(searchString);
            if (customers && customers.length) {
                searchFromResult();
            } else {
                var customerResult = $(".customer .customerResult");
                customerResult.css("display", "block");
                customerResult.empty();
                var autoCompleteTemplate = "<span class='noResultFound'>No Results Found</span> "
                customerResult.append(autoCompleteTemplate);
            }
        }
    })
  
    var getLocationObject = function(locationId){
        locationObj = locationObj == null ? []: locationObj;
        for(var i=0;i < locationObj.length; i++){
            if(locationId == locationObj[i]['hub_centerid']){
                locationObj[i]['ownerObj'] = {
                    id:locationObj[i]['_ownerid_value'], 
                    entityType:locationObj[i]['_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname']
                }
                return locationObj[i];
                break;
            }    
        }
    }


    var locationObj = data.getLocations();

    var locationOwnerObj;
    var changeTimeout;
    if (locationObj && locationObj.length) {
        var autoCompleteTemplate = "";
        $.each(locationObj, function (key, loc) {
            autoCompleteTemplate += " <option title=" + loc['hub_centername'] + " value=" + loc['hub_centerid'] + ">" + loc['hub_centername'] + "</option>";
        })
        $('.location-dropdown').append(autoCompleteTemplate);
         setTimeout(function () {
            $('.location .location-dropdown.comboBox').combobox();
            $(".location .combobox-container input[type=hidden]").on("change", function () {
                clearTimeout(changeTimeout);
                changeTimeout = setTimeout(function () {
                    locationOwnerObj = getLocationObject($("select.location-dropdown").val());
                    var typeId = $(".type-btn").val();
                    $(".location-dropdown").removeClass("errorField");
                    var typeIndex = nonPaidAppointments.indexOf(typeId);
                    var appointment = $("#appointmentForm")[0];
                    if (typeIndex == -1 && !appointment.exception.checked) {
                     $('.picker').val("");
                    }
                    enableServices();
                }, 100);
                validateappointment();
            });
        }, 100);
    }

    function DisableSpecificDates(date) {
        var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
        return [disableddates.indexOf(string) == -1];
    }

    var dateConfig = {
        minDate: '',
        maxDate: '',
        beforeShowDay: DisableSpecificDates,
        changeMonth: true,
        changeYear: true,
        onSelect: function (date) {
            enableServices();
            validateappointment();
            timeValidator();
            populateStaff(date);
        }
    };
    
    function convertMinsNumToTime(minsNum) {
        if (minsNum >= 1440) {
            minsNum =  minsNum - 1440;
        }
        if ($.isNumeric(minsNum)) {
            // var mins_num = parseFloat(this, 10); // don't forget the second param
            var hours = Math.floor(minsNum / 60);
            var minutes = Math.floor((minsNum - ((hours * 3600)) / 60));
            var seconds = Math.floor((minsNum * 60) - (hours * 3600) - (minutes * 60));

            // Appends 0 when unit is less than 10
            if (hours < 10) { hours = "0" + hours; }
            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }
            return hours + ':' + minutes;
        }
    }

    function tConvert(time) {
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
            time = time.slice(1);
            time[5] = +time[0] < 12 ? ' AM' : ' PM';
            time[0] = +time[0] % 12 || 12;
        }
        return time.join('');
    }

    function convertToMinutes(timeString) {
        if (timeString != undefined) {
            if (timeString.split(' ')[1] == 'AM') {
                var hours = parseInt(moment(timeString, 'h:mm A').format('h'));
                if (hours == 12) {
                    hours = 0;
                }
                var minutes = parseInt(moment(timeString, 'h:mm A').format('mm'));
                return (hours * 60) + minutes;
            }
            else {
                var hours = parseInt(moment(timeString, 'h:mm A').format('h'));
                hours = hours != 12 ? hours + 12 : hours;
                var minutes = parseInt(moment(timeString, 'h:mm A').format('mm'));
                return (hours * 60) + minutes;
            }
        }
    }

    var convertSelectedTime = function(time) {
        console.log(time);
    }

    $('body').on("click", "#saveBtn", function () {
        $(".loader").show();
        $("#appointmentForm").submit();    
    });
    
    $("body").on("submit", "#appointmentForm", function (e) {
        $(".loader").show();
        var appointment = $("#appointmentForm");
        appointment = appointment[0];
        $("input[required='required']:blank").addClass("errorField");
        $("input[required='required']:filled").removeClass("errorField");
        timeValidator(appointment);
        var student = appointment.student[0];
        var service = appointment.service[0];
        var pricelist = appointment.pricelist;
        var type = $(".type-dropdown button");
        if (!type.val()) {
            type.addClass("errorField");
        }
        var studentMandatory = -1;
        var serviceMandatory = -1;
        if (type.val()) {
            studentMandatory = studentMandatoryArray.indexOf(type.val());
            serviceMandatory = serviceDisabled.indexOf(type.val());
        }
        if (!student.value.trim() && studentMandatory != -1) {
            $(".student-dropdown").addClass("errorField");
        } else {
            $(".student-dropdown").removeClass("errorField");
        }
        if (!service.value && serviceMandatory == -1) {
            $(".service-dropdown").addClass("errorField");
        } else {
            $(".service-dropdown").removeClass("errorField");
        }
        if (!pricelist.value && serviceMandatory == -1) {
            $(".pricelist-dropdown button").addClass("errorField");
        } else {
            $(".pricelist-dropdown button").removeClass("errorField");
        }
        var validity = $('.errorField');
        if (!validity.length) {
            var appointmentObj = {};
            if (student.value) {
                appointmentObj.hub_student = student.value;
                appointmentObj.hub_student_name = appointment.student[1].value;
            }
            if (service.value) {
                appointmentObj.hub_diagnosticserviceid = service.value;
                appointmentObj.hub_diagnosticserviceid_name = appointment.service[1].value;
            }
            if (pricelist.value) {
                appointmentObj.hub_pricelist = pricelist.value;
            }
            
            appointmentObj.hub_location = appointment.location.value;
            appointmentObj.hub_type = parseInt(type.val());
            appointmentObj.hub_start_date = moment(appointment.startDate.value).format("YYYY-MM-DD");
            appointmentObj.hub_end_date = moment(appointment.startDate.value).format("YYYY-MM-DD");
            appointmentObj.hub_starttime = convertToMinutes(appointment.startTime.value);
            appointmentObj.hub_endtime = convertToMinutes(appointment.endTime.value);
            if (appointmentObj.hub_type != 12) {
                appointmentObj.regardingobjectid = $(appointment.customer).attr("customer-id");
            } else {
                appointmentObj.hub_loggedinuser = currentUser.name;
                appointmentObj.regardingobjectid = currentUser.id;
            }
            appointmentObj.objOwner = locationOwnerObj['ownerObj'];
            if (appointment.mode.value) {
                appointmentObj.hub_mode = parseInt(appointment.mode.value);
            }
            if (appointment.exception.checked) {
                appointmentObj.hub_exception = appointment.exception.checked
            }
            if (appointment.description.value.trim()) {
                appointmentObj.description = appointment.description.value;
            }
            if (appointment.discount.value) {
                appointmentObj.hub_discount = appointment.discount.value;
            }
            if (appointment.staff.value) {
                appointmentObj.hub_staff = appointment.staff.value
            }
            if (appointment.allDay.checked) {
                appointmentObj.hub_fulldayappointment = appointment.allDay.checked
            }
            if (appointment.outOfOffice.checked) {
                appointmentObj.hub_outofofficeappointment = appointment.outOfOffice.checked
            }
            setTimeout(function () {
                if (serviceDisabled.indexOf(type.val()) == -1) {
                    confirmationPopup($(appointment.pricelist).attr("price-amount") + " is the price that you have selected for this Appointment. Do you wish to continue?", appointmentObj,'SAVE');
                } else {
                    saveAppointmentObj(appointmentObj,false);
                }
            },100)
        } else {
            $(".loader").hide();
        }
        e.preventDefault();
    });

    var saveAppointmentObj = function (appointmentObj,confirmation) {
        $(".loader").show();
        var responseObj = data.saveAppointment(appointmentObj, confirmation);
        setTimeout(function () {
            if (typeof (responseObj) == "boolean" && responseObj) {
                $(".loader").hide();
                prompt("Appointment created successfully", "Success");
            } else if (typeof (responseObj) == "object" && responseObj.Type == "ERROR") {
                prompt(responseObj.Message, "Error");
                $(".loader").hide();
            } else if (typeof (responseObj) == "object" && responseObj.Type == "CONFIRM") {
                confirmationPopup(responseObj.Message, appointmentObj, "STAFF");
            }
        }, 100);
    }

    var validateappointment = function () {
        $("input[required='required']:filled").removeClass("errorField");
    }

    var timeValidator = function () {
        var startTime = $(".start-timepicker").val();
        var endTime = $(".end-timepicker").val();
        var date = $('.picker').val();
        if (startTime && endTime) {
            var startTime = convertToMinutes(startTime);
            var endTime = convertToMinutes(endTime);
            var duration = populateTimings(date);
            if (duration && date) {
                endTime = startTime+duration;
                $(".end-timepicker").val(tConvert(convertMinsNumToTime(endTime)));
            } else {
                if (startTime == endTime) {
                    endTime += 30;
                    $(".end-timepicker").val(tConvert(convertMinsNumToTime(endTime)));
                }
            }
            if (endTime >= 1440) {
                endTime = endTime - 1440;
            }
            if (startTime > endTime && endTime != 0) {
                $(".timepicker").addClass("errorField");
                return false;
            } else {
                $(".timepicker").removeClass("errorField");
                return true;
            }
        }
    }

    var getStudents = function () {
        var customer = $('.customer .customer-comboBox');
        var customerId = customer.attr("customer-id");
        var autoComplete = $(".student .combobox-container");
        var students = data.getStudents(customerId);
        if (autoComplete && autoComplete.length) {
            autoComplete.remove();
        }
        if (students && students.length) {
            var autoCompleteTemplate = "";
            $('.student-dropdown option').remove();
            autoCompleteTemplate = "<option value='' selected='selected'>Select a Student</option>";
            $.each(students, function (key, student) {
                autoCompleteTemplate += " <option  value=" + student.contactid + " title=" + student.fullname  + ">" + student.fullname + "</option>";
            })
            $('.student-dropdown').append(autoCompleteTemplate);
            setTimeout(function () {
                $('.student-dropdown.comboBox').combobox();
                $(".student-dropdown").attr("name", "student");
                $(".student .combobox-container input[type=hidden]").on("change", function () {
                    var appointment = $("#appointmentForm");
                    appointment = appointment[0];
                    if (appointment.student[1].value) {
                        $('.student-dropdown').removeClass('errorField');
                    }
                });
            }, 100);
        }
    }

    var populatepricelist = function (typeId) {
        var dropdownMenu = $(".pricelist-dropdown .dropdown-menu");
        dropdownMenu.empty();
        if (!typeId) {
            $(".price-btn").val("");
            $(".price-btn").text("Select a PriceList");
            $(".price-btn").attr("disabled","disabled");
        } else {
            $(".price-btn").removeAttr("disabled");
            var priceList = data.getPricelist(typeId);
            if (priceList && priceList.length) {
                var autoCompleteTemplate = "";
                $.each(priceList, function (key, price) {
                    autoCompleteTemplate += "<li><a href='javascript:void(0)' price-amount=" + price["hub_price@OData.Community.Display.V1.FormattedValue"] + " value-id=" + price["hub_pricelistid"] + " value=" + price["hub_name"] + ">" + price["hub_name"] + "</a></li>";
                });
            }
            dropdownMenu.append(autoCompleteTemplate);
        }
    }

    var timeConfig = {
        timeFormat: 'h:mm p',
        interval: 15,
        minTime: '00:00 am',
        maxTime: '11:45 pm',
        defaultTime: '00:00 pm',
        startTime: '00:00 am',
        dynamic: false,
        dropdown: true,
        scrollbar: true,
        change: function (time) {
            var el = $(this), text;
            var picker = el.timepicker();
            timeValidator();
        }
    }
    $(".picker").datepicker(dateConfig);
    $(".timepicker").timepicker(timeConfig);
    $(".end-timepicker").val("12:30 PM");
    
    $("body").on("click", ".mode-dropdown li a", function () {
        if ($('.mode-btn').val() != $(this).attr("value-id")) {
            $('.mode-btn').val($(this).attr("value-id"));
            $('.mode-btn').text($(this).text());
        }
    });

    $("body").on("click", ".type-dropdown li a", function () {
        if ($('.type-btn').val() != $(this).attr("value-id")) {
            var selectedId = $(this).attr("value-id");
            var selectedType = $(this).text();
            setMiscellaneous(selectedId, $('.type-btn').val());
            $('.type-btn').val(selectedId);
            $('.type-btn').text(selectedType);
            var typeIndex = nonPaidAppointments.indexOf(selectedId);
            var studentMandatryIndx = studentMandatoryArray.indexOf(selectedId);
            var serviceMandtryIndx = serviceDisabled.indexOf(selectedId);
            var appointment = $("#appointmentForm")[0];
            if (studentMandatryIndx == -1) {
                $(".student-astriek").css("display", "none");
                $(".student-dropdown").removeClass('errorField');
            } else {
                $(".student-astriek").css("display", "inline");
            }
            if (serviceMandtryIndx != -1) {
                $(".service-astriek").css("display", "none");
                $(".price-btn").removeClass("errorField");
                $(".service-dropdown").removeClass("errorField");
            } else {
                $(".service-astriek").css("display", "inline");
            }
            if (typeIndex == -1 && !appointment.exception.checked) {
                $('.picker').val("");
                $('.picker').attr("disabled", "disabled");
                $('.timepicker').attr("disabled", "disabled");
                populateStaff($('.picker').val());
            } else {
                $('.picker').removeAttr("disabled");
                $('.timepicker').removeAttr("disabled");
            }
            if (typeIndex == -1) {
                $('#findSlot').css("display", "inline");
            } else {
                $('#findSlot').css("display", "none");
            }
            var type = $(".type-dropdown button");
            type.removeClass("errorField");
            enableServices();
        }
    });

    var setMiscellaneous = function (typeId,prevId) {
        var customerSearchBox = $(".customer-comboBox");
        var studentDisplayBox = $(".student-dropdown");
        var studentValueBox = $(".student .combobox-container input[type=hidden]");
        $(".allDay-checkbox")[0].checked = false;
        $(".allDay-checkbox").attr("disabled", "disabled");
        if (typeId == "12") {
            $(".exceptionCheckbox input").attr("disabled", "disabled");
            $(".allDay-checkbox").removeAttr("disabled");
            customerSearchBox.val(currentUser.name);
            currentUser.id = currentUser.id.replace(/{|}/g, "")
            customerSearchBox.attr("customer-id", currentUser.id);
            customerSearchBox.attr("disabled", "disabled");
            studentDisplayBox.val("");
            studentValueBox.val("");
            studentDisplayBox.attr("disabled", "disabled");
        } else if (prevId == "12") {                            //checked so that the customer box is cleared only if miscellaneous is selected previously
            $(".exceptionCheckbox input").removeAttr("disabled");
            customerSearchBox.val("");
            customerSearchBox.attr("customer-id", "");
            customerSearchBox.removeAttr("disabled");
            studentDisplayBox.removeAttr("disabled");
        }
    }

    $("body").on("change", ".exceptionCheckbox input", function () {
        var exception = $(this)[0].checked;
        var appointment = $("#appointmentForm")[0];
        if (exception) {
            $('.picker').removeAttr("disabled");
            if (appointment.type.value && nonPaidAppointments.indexOf(appointment.type.value) == -1) {
                $('.start-timepicker').removeAttr("disabled");
            } else {
                $('.timepicker').removeAttr("disabled");
            }
        } else {
            if (appointment.type.value && nonPaidAppointments.indexOf(appointment.type.value) == -1) {
                $('.picker').val("");
                enableServices();
                $('.picker').attr("disabled", "disabled");
                $('.timepicker').attr("disabled", "disabled");
                $('#findSlot').css("display", "inline");
            }
        }
    });

    $("body").on("click", "#closeBtn", function () {
        window.close();
    });

    function prompt(message, title) {
        $("#dialog > .dialog-msg").text(message);
        $("#dialog").dialog({
            title: title,
            resizable: false,
            height: "auto",
            width: 350,
            modal: true,
            show: {
                effect: 'slide',
                complete: function () {
                    $(".loader").hide();
                }
            },
            buttons: {
                Close: function () {
                    if (title == 'Success') {
                        window.close();
                    }
                    $(this).dialog("close");
                }
            },
            close: function (event, ui) {
                if (title == 'Success') {
                    window.close();
                }
            }
        });
    }

    function confirmationPopup(message, saveObj, type) {
        $("#dialog > .dialog-msg").text(message);
        $("#dialog").dialog({
            resizable: false,
            height: "auto",
            width: 350,
            modal: true,
            show: {
                effect: 'slide',
                complete: function () {
                    $(".loader").hide();
                }
            },
            buttons: {
                Yes: function () {
                    $(".loader").show();
                    $(this).dialog("close");
                    if (type == "SAVE") {
                        setTimeout(function () {
                            saveAppointmentObj(saveObj,false);
                        }, 100);
                    }else if(type == "STAFF"){
                        setTimeout(function () {
                            saveAppointmentObj(saveObj,true);
                        }, 100);
                    }
                },
                No: function () {
                    $(this).dialog("close");
                }
            },
        });
    }

    $(".picker").keydown(restrictKeysInDatePicker);
    $(".picker").bind('cut copy paste', function (e) {
        e.preventDefault();
    });

    function restrictKeysInDatePicker(eve) {
        if (eve.keyCode == 8 || eve.keyCode == 46) {
            eve.target.value = "";
            enableServices();
        } else {
            return false;
        }
    }

    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }

    $("#backBtn").hide();
    $("#backBtn").on("click", function () {
        $("#sideNav").animate({ width: "0" }," medium", "swing", function () {
            setTimeout(function () {
                $("#sideNav").css("visibility", "hidden");
                $("#appointment").fullCalendar('destroy')
                $("#sideNav").css("width", "100%");
            },200);
        });
        $("#backBtn").hide();
    });

    $("#findSlot").on("click", function () {
        var sidenav = $("#sideNav");
        $(".loader").show();
            var appointment = $("#appointmentForm")[0];
            if (appointment.location.value && appointment.type.value) {
                $("#refetch").click();
                setTimeout(function () {
                sidenav.css("width", "0");
                $("#sideNav").css("visibility", "visible");
                sidenav.css("width", "100%");
                $("#backBtn").show();
                $(".loader").hide();
                }, 200);
            } else {
                if (!appointment.location.value) {
                    $(".location-dropdown").addClass("errorField");
                }
                if (!appointment.type.value) {
                    $(".type-btn").addClass("errorField");
                }
                $(".loader").hide();
            }
    });

    function populateTimings(date) {
        var appointmentForm = $("#appointmentForm")[0];
        var appointmentType;
        if (appointmentForm.type && appointmentForm.type.value) {
            appointmentType = appointmentForm.type.value;
            var Indx = nonPaidAppointments.indexOf(appointmentType);
            date = moment(date).format("YYYY-MM-DD");
            if (Indx == -1 && appointmentForm.exception.checked) {
                if (appointmentHour && appointmentHour.length) {
                    var duration = appointmentHour[(appointmentHour.length - 1)]["aworkhours_x002e_hub_duration"];
                    return duration;
                } else {
                    if (appointmentForm.location && appointmentForm.date) {
                        $(".end-timepicker").removeAttr("disabled");
                    }
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    var serviceTimeout;

    /*
        Enable servive triggered when location,date and type is changed
        populated Discounts pricelist services from here based on the appointment types
    */

    var enableServices = function () {
        var appointment = $("#appointmentForm")[0];
        var date = appointment.startDate;
        var type = appointment.type;
        var typeId = $(type).val();
        var location = appointment.location;
        var locId = $(location).val();
        var servicesDropdown = $(".service .service-dropdown");
        var discount = $(".discount-btn");
        var autoComplete = $(".service .combobox-container");
        var index = serviceDisabled.indexOf(typeId);
        $(".loader").show();
        if (date.value && typeId && locId && index == -1) {
            typeId = parseInt(typeId);
            servicesDropdown.removeAttr("disabled");
            var selectedDate = moment(date.value).format("YYYY-MM-DD");
            appointmentHour = data.getAppointmentHours(locId, typeId, selectedDate, selectedDate);
            timeValidator();
            populateDiscount(date.value, locId, typeId.toString());
            populatepricelist();
            var services = data.getServices(locId, typeId, selectedDate);
            if (autoComplete && autoComplete.length) {
                autoComplete.remove();
            }
            if (services && services.length) {
                var autoCompleteTemplate = "";
                $('.service-dropdown option').remove();
                autoCompleteTemplate = "<option value='' selected='selected'>Select a Service</option>";
                $.each(services, function (key, service) {
                    autoCompleteTemplate += " <option  value=" + service["hub_sch_diagnostic_serviceid"] + " title=" + service["hub_name"] + ">" + service["hub_name"] + "</option>";
                });
                $('.service-dropdown').append(autoCompleteTemplate);
                setTimeout(function () {
                    $('.service-dropdown.comboBox').combobox();
                    $(".service-dropdown").attr("name", "service");
                    $(".service .combobox-container input[type=hidden]").on("change", function () {
                        clearTimeout(serviceTimeout);
                        serviceTimeout = setTimeout(function () {
                            var appointment = $("#appointmentForm");
                            appointment = appointment[0];
                            populatepricelist(appointment.service[0].value);
                            if (appointment.service[0].value) {
                                $('.service-dropdown').removeClass('errorField');
                            }
                        }, 50);

                    });
                    $(".loader").hide();
                }, 100);
            } else {
                var autoCompleteTemplate = "";
                $('.service-dropdown option').remove();
                autoCompleteTemplate = "<option value='' selected='selected'>Select a Service</option>";
                $('.service-dropdown').append(autoCompleteTemplate);
                $(".service .combobox-container").css("display", "none");
                $('.service-dropdown').css("display", "inline-block");
                populatepricelist("");
            }
            $(".loader").hide();
        } else if (date.value && typeId && locId && index != -1) {
                typeId = parseInt(typeId);
                var selectedDate = moment(date.value).format("YYYY-MM-DD");
                if (nonPaidAppointments.indexOf(typeId.toString()) == -1) {
                    appointmentHour = data.getAppointmentHours(locId, typeId, selectedDate, selectedDate);
                    timeValidator();
                }
                populateDiscount(date.value, locId, typeId.toString());
                var autoCompleteTemplate = "";
                autoCompleteTemplate = "<option value='' selected='selected'>Select a Service</option>";
                if (appointment.service) {
                    appointment.service[0].value = "";
                    if (appointment.service[1]) {
                        appointment.service[1].value = "";
                    }
                }
                if (autoComplete && autoComplete.length) {
                    $('.service-dropdown option').remove();
                    autoComplete.remove();
                    $('.service-dropdown').append(autoCompleteTemplate);
                }
                servicesDropdown.attr("disabled", "disabled");
                servicesDropdown.css("display", "inline-block");
                $(".pricelist-dropdown ul").empty();
                $(".price-btn").text("Select a Pricelist");
                $(".price-btn").val("");
                $(".price-btn").removeClass("errorField");
                $(".price-btn").attr("disabled", "disabled");
                $(".loader").hide();
            } else {
            var autoCompleteTemplate = "";
            $('.service-dropdown option').remove();
            autoCompleteTemplate = "<option value='' selected='selected'>Select a Service</option>";
            $('.service-dropdown').append(autoCompleteTemplate);
            if (appointment.service && appointment.service[0]) {
                appointment.service[0].value = "";
                if (appointment.service[1]) {
                    appointment.service[1].value = "";
                }
            } else if (appointment.service) {
                appointment.service.value = "";
            }
            if (autoComplete && autoComplete.length) {
                $('.service-dropdown option').remove();
                autoComplete.remove();
                $('.service-dropdown').append(autoCompleteTemplate);
            }
            servicesDropdown.attr("disabled", "disabled");
            servicesDropdown.css("display", "inline-block");
            $(".pricelist-dropdown ul").empty();
            $(".price-btn").text("Select a Pricelist");
            $(".price-btn").val("");
            $(".price-btn").removeClass("errorField");
            $(".price-btn").attr("disabled", "disabled");
            $(".discount-dropdown ul").empty();
            discount.text("Select a Discount");
            discount.removeClass("errorField");
            discount.val("");
            discount.attr("disabled", "disabled");
            $(".loader").hide();
        }
    }

    //Triggers from find slot page
    $("body").on("click", "#enableService", function () {
        enableServices();
        populateStaff($(".picker").val());
    });

    $("body").on("click", ".pricelist-dropdown li a", function () {
        if ($('.price-btn').val() != $(this).attr("value-id")) {
            $('.price-btn').val($(this).attr("value-id"));
            $('.price-btn').text($(this).text());
            $('.price-btn').attr("price-amount", $(this).attr("price-amount"));
            $(".price-btn").removeClass("errorField");
        }
    });

    $("body").on("click", ".discount-dropdown li a", function () {
        if ($('.discount-btn').val() != $(this).attr("value-id")) {
            $('.discount-btn').val($(this).attr("value-id"));
            $('.discount-btn').text($(this).text());
        }
    });

    var populateDiscount = function (date, locId, typeId) {
        var discountDropdown = $('.discount-btn');
        if (serviceDisabled.indexOf(typeId) == -1) {
            discountDropdown = $('.discount-btn');
            discountDropdown.removeAttr("disabled");
            discountDropdown.val("");
            discountDropdown.text("Select a Discount");
            var dropdownMenu = $(".discount-dropdown .dropdown-menu");
            dropdownMenu.empty();
            var selectedDate = moment(date).format("YYYY-MM-DD");
            var discounts = data.getDiscounts(locId, parseInt(typeId), selectedDate);
            if (discounts && discounts.length) {
                var autoCompleteTemplate = "";
                $.each(discounts, function (key, discount) {
                    autoCompleteTemplate += "<li><a href='javascript:void(0)' value-id=" + discount["hub_fin_discount_defid"] + " value=" + discount["hub_discountid"] + ">" + discount["hub_discountid"] + "</a></li>";
                });
            }
            dropdownMenu.append(autoCompleteTemplate);
        } else {
            discountDropdown.val("");
            discountDropdown.text("Select a Discount");
            discountDropdown.attr("disabled","disabled");
        }
    }

    var populateStaff = function (date) {
        var dropdownMenu = $(".staff-dropdown .dropdown-menu");
        dropdownMenu.empty();
        $(".staff-btn").val("");
        $(".staff-btn").text("Select a Staff");
        $(".staff-btn").attr("disabled","disabled");
        if (date) {
            var selectedDate = moment(date).format("YYYY-MM-DD");
            var locId = window.location.href.split("=")[1];
            var staffList = data.getStaff(locId, selectedDate);
            if (staffList && staffList.length) {
                $(".staff-btn").removeAttr("disabled");
                var autoCompleteTemplate = "";
                $.each(staffList, function (key, staff) {
                    autoCompleteTemplate += "<li><a href='javascript:void(0)'  value-id=" + staff["hub_staffid"] + ">" + staff["hub_name"] + "</a></li>";
                });
            }
            dropdownMenu.append(autoCompleteTemplate);
        }
    }

    $("body").on("click", ".staff-dropdown li a", function () {
        if ($('.staff-btn').val() != $(this).attr("value-id")) {
            $('.staff-btn').val($(this).attr("value-id"));
            $('.staff-btn').text($(this).text());
        }
    });

    $("body").on("change", ".allDay-checkbox", function () {
        var allDay = $(this)[0].checked;
        if (allDay) {
            $(".timepicker").attr("disabled", "disabled");
            $('.start-timepicker').val("8:00 AM");
            $('.end-timepicker').val("8:00 PM");
        } else {
            $(".timepicker").removeAttr("disabled");
        }
    });

    $(".loader").hide();
});

