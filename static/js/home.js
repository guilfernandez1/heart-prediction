$(document).ready(function(e) {

    $('#runModel').click(function() {
        var age = $('#age').val();
        var sex = $('#sex').val();
        var cp = $('#cp').val();
        var trestbps = $('#trestbps').val();
        var chol = $('#cholesterol').val();
        var fbs = $('#fbs').val();
        var restecg = $('#restecg').val();
        var thalach = $('#thalach').val();
        var exang = $('#exang').val();
        var oldpeak = $('#oldpeak').val();
        var slope = $('#slope').val();
        var ca = $('#ca').val();
        var thal = $('#thal').val();
        var target = $('#target').val();
        
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
            'thal': thal,
            'target': target
        };

        $.ajax({
            url: 'main/api/run_model',
            data: inputData,
            type: 'post',
            success: function(response) {
                console.log(response);
                $('#hfResult').append(`<h2>GRAPHIC</h2>`)
            }
        })
    });

});