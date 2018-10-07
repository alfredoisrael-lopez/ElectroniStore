var url = 'https://api.us.apiconnect.ibmcloud.com/alfredolopezmx1ibmcom-demos/think/customer-loyalty/1000000001';

var obtainPoints = function() {
//vH1jB1xJ4sD7jB7dR2uW8yD7vR7hS1sF1nP3lC8sC6bU7qM3hT
 //914340e2-be26-4cb8-8eb0-e3374d49a250
 //$('#myModal').modal({
 //    show: 'false'
 //});

 url = 'https://api.us.apiconnect.ibmcloud.com/alfredolopezmx1ibmcom-demos/think/customer-loyalty/1000000001';
    
 $.ajax({
    type: 'GET',
    url: url,
    headers: {
        'accept': 'application/json', 
        'x-ibm-client-id': '914340e2-be26-4cb8-8eb0-e3374d49a250'
        }
  })
    .done(function (data) {
        //alert(JSON.stringify(data));
        $('#pointsBalance').html(data.customerBalancePoints);
    }).
    error(function (data) {
        $('#myModalLabel').html('Failure');
            $('#modal-body').html('System is not Available');
            $('#myModal').modal({
                show: 'true'
            });
    });
};

$(document).ready(obtainPoints);

$('#checkout').click(function() {
    var pointsToRedeem = parseInt((Number($('#itemQuantity1').val()) * Number($('#itemPrice1').val())) + (Number($('#itemQuantity2').val()) * Number($('#itemPrice2').val())));
    url = url + '/redeem/' + pointsToRedeem.toString();

    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            'accept': 'application/json', 
            'x-ibm-client-id': '914340e2-be26-4cb8-8eb0-e3374d49a250'
            }
      })
        .done(function (data) {
            //alert(JSON.stringify(data));
            //$('#pointsBalance').html(data.customerBalancePoints);
            $('#myModalLabel').html('Success');
            $('#modal-body').html('Points redeemed : ' + pointsToRedeem.toString());
            $('#myModal').modal({
                show: 'true'
            });

            obtainPoints();
        }).
        error(function (data) {
            $('#myModalLabel').html('Error');
            $('#modal-body').html('Try again later');
            $('#myModal').modal({
                show: 'true'
            });
        });
});