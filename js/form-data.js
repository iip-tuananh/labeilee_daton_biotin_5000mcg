
$('#register-form').validate({
    rules: {
        "contact[Họ và tên]": {
            required: true,
        },
        "contact[Số điện thoại]": {
            required: true,
            number: true,
            minlength: 10,
        },
        "contact[Email]": {
            required: true,
            email: true,
        },
        "contact[Địa chỉ nhận hàng]": {
            required: true,
        },
        "contact[Liệu trình]": {
            required: true,
        },
    },
    messages: {
        "contact[Họ và tên]": {
            required: "Vui lòng nhập họ và tên",
        },
        "contact[Số điện thoại]": {
            required: "Nhập số điện thoại liên hệ",
        },
        "contact[Địa chỉ nhận hàng]": {
            required: "Vui lòng nhập địa chỉ nhận hàng",
        },
        "contact[Email]": {
            required: "Vui lòng nhập email",
            email: "Vui lòng nhập email hợp lệ",
        },
        "contact[Liệu trình]": {
            required: "Vui lòng chọn liệu trình",
        },
    },
    submitHandler: function(form) {
        jQuery.ajax({
            url: "https://script.google.com/macros/s/AKfycbxbStBIST0o0-078sN97hTqL8ZxZjCbcrpE3kXA24pk_BR35bhrhnwP2Gg--4u5SYoQ/exec",
            type: "post",
            data: jQuery("#register-form").serializeArray(),
            success: function() {
                // toastr.success("Đặt hàng thành công");
                $('#modal-success').modal('show');
            },
            error: function() {
                toastr.error("Đặt hàng thất bại");
            }
        });
    }
});


$('#register-form-mobile').validate({
    rules: {
        "contact[Họ và tên]": {
            required: true,
        },
        "contact[Số điện thoại]": {
            required: true,
            number: true,
            minlength: 10,
        },
        "contact[Email]": {
            required: true,
            email: true,
        },
        "contact[Địa chỉ nhận hàng]": {
            required: true,
        },
        "contact[Liệu trình]": {
            required: true,
        },
    },
    messages: {
        "contact[Họ và tên]": {
            required: "Vui lòng nhập họ và tên",
        },
        "contact[Số điện thoại]": {
            required: "Nhập số điện thoại liên hệ",
        },
        "contact[Email]": {
            required: "Vui lòng nhập email",
            email: "Vui lòng nhập email hợp lệ",
        },
        "contact[Địa chỉ nhận hàng]": {
            required: "Vui lòng nhập địa chỉ nhận hàng",
        },
        "contact[Liệu trình]": {
            required: "Vui lòng chọn liệu trình",
        },
    },
    submitHandler: function(form) {
        jQuery.ajax({
            url: "https://script.google.com/macros/s/AKfycbxbStBIST0o0-078sN97hTqL8ZxZjCbcrpE3kXA24pk_BR35bhrhnwP2Gg--4u5SYoQ/exec",
            type: "post",
            data: jQuery("#register-form-mobile").serializeArray(),
            success: function() {
                // toastr.success("Đặt hàng thành công");
                $('#modal-success').modal('show');
            },
            error: function() {
                toastr.error("Đặt hàng thất bại");
            }
        });
    }
});
