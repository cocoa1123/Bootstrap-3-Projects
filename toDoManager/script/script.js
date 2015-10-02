	
	$(document).ready(function(){
		// Hide - Show Form
		$("form").hide();
		$("#addBtn").on("click", function(){
			$("form").show();
			});
		$("#saveBtn").on("click", function(){
			$("form").hide();
			});
			
		// Hide alert box
		$('#success').hide();
		
		// Clear Inputs
		$('#name').val("");
		$('#familyName').val("");
		$('#age').val("");
		
		//Show success alert
		$('#saveBtn').click(function(){
			$('#success').show().delay(2000).fadeOut();
		});	
		

	});
	
	function addPerson(){
		// Get value from Input
		var name = $('#name').val();
		var surname = $('#familyName').val();
		var age = $('#age').val();
		
		// Append new table row
		$('#table > tbody').append('<tr class="row"><td class="col-md-3">'+name+'</td><td class="col-md-3">'+surname+'</td><td class="col-md-3">'+age+'</td><td class="col-md-6 text-right"><button type="button" class="btn btn-info btn-xs">Edit</button> <button type="button" class="btn btn-danger btn-xs">Delete</button></td></tr>');
	};

	
				//Change alert class
			/*function loadMessage(isSuccess){
				if (!isSuccess){
					$('#success').removeClass('alert-success').addClass('alert-danger').show(); 
					return;
				}
				$('#success').removeClass('alert-danger').addClass('alert-success').show();
			}
			
			function saveBtn(){
				var name = $('#name').val();
				if(name.length === 0){
					loadMessage(false);
					return;
				}
				$('#table > tbody').prepend('...')
				loadMessage(true);
			}*/

	
	












