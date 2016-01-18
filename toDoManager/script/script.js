
	// Get value from Input
	function addPerson(){
		var name = $('#name').val();
		var surname = $('#surname').val();
		var age = $('#age').val();
		
		if(name.length === 0 || surname.length === 0 || age.length === 0){
			$('#success').removeClass('alert-success').addClass('alert-danger').html("Please fill in all fields!").show();
			return;
		};

		// Append new table row
		$('#table > tbody').append('<tr class="row"><td class="col-md-3 name">'+name+'</td><td class="col-md-3 surname">'+surname+'</td><td class="col-md-3 age">'+age+'</td><td class="col-md-6 text-right"><button type="button" class="btn btn-info btn-xs" onclick="editData(this)">Edit</button> <button type="button" class="btn btn-danger btn-xs"  onclick="removeData(this)">Delete</button></td></tr>');
		
		// Clear Inputs
		$('#name').val("");
		$('#surname').val("");
		$('#age').val("");
		
		$('.form').slideToggle();
		
		$('#success').removeClass('alert-danger').addClass('alert-success').html("Successfully updated").show();
		setTimeout(function(){
			$('#success').hide();
		}, 2500);
	};
	
	var currentRow;
	
	//Delete Button
	function removeData(del) {
		$(del).parent().parent().remove();
	};
	
	//Update Person
	function updatePerson() {
		
		$('#update').hide();
		$('#saveBtn').show();
		
		var name = $('#name').val();
		var surname = $('#surname').val();
		var age = $('#age').val();
		
		currentRow.find(".name").html(name);
		currentRow.find(".surname").html(surname);
		currentRow.find('.age').html(age);

		$('#name').val("");
		$('#surname').val("");
		$('#age').val("");
		
		$('.form').hide();

	};
	

	//Edit Button
	function editData(edit) {
		$('#saveBtn').hide();
		$('#update').show();
		$('.form').show();
		
		var trObj = $(edit).parent().parent();
		var name = trObj.find(".name").html();
		var surname = trObj.find(".surname").html();
		var age = trObj.find('.age').html();
		
		currentRow = trObj;
		
		$('#name').val(name);
		$('#surname').val(surname);
		$('#age').val(age);	
				
	};
	

	
	
	
	
	
	
	
	
	
	
	
	
