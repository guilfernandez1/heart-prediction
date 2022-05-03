$(document).ready(function (e) {
    $('#runModel').submit(function (event) {

        $('#hfResult').empty();

        var age = $('#age').val();
        var sex = $('#sex').val();
        var cp = $('#cp').val();
        var trestbps = $('#trestbps').val();
        var chol = $('#chol').val();
        var fbs = $('#fbs').val();
        var restecg = $('#restecg').val();
        var thalach = $('#thalach').val();
        var exang = $('#exang').val();
        var oldpeak = $('#oldpeak').val();
        var slope = $('#slope').val();
        var ca = $('#ca').val();
        var thal = $('#thal').val();

        var inputData = {
            'age': age,
            'sex': sex,
            'cp': cp,
            'trestbps': trestbps,
            'chol': chol,
            'fbs': fbs,
            'restecg': restecg,
            'thalach': thalach,
            'exang': exang,
            'oldpeak': oldpeak,
            'slope': slope,
            'ca': ca,
            'thal': thal
        };

        $.ajax({
            url: this.action,
            type: this.method,
            data: inputData,
        })
        .done(function (response) {
            if(response.pred == 0) {
                $('#hfResult').append(`<p>The Pacient does not have a Heart Disease</p>`)
            } else {
                $('#hfResult').append(`<p>The Pacient has Heart Disease</p>`)
            }
        });

        event.preventDefault();
    });
});