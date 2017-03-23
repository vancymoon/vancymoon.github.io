<script type="text/javascript">

    $(document).ready(function () {
        $.ajax({
            url: 'https://api.douban.com/v2/book/1003078',
            type: 'get',
            dataType: 'JSONP',
            success: function (data) {
                $('#book').html(data.title);
            },
        });
    });

</script>
