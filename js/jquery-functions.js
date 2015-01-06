/* Function to set to set the selected menu item to active*/

function navItemSelected(selectedItem)
{	
	$('.nav li').removeClass('active');
	$(selectedItem).closest('li').addClass('active');
}

function displayFeatures(featureSelected){
	$('.roleslist li').css('opacity','0.5');
	$('#features-all').hide();
	$('#features-parents').hide();
	$('#features-teachers').hide();
	$('#features-administrators').hide();
	$('#features-students').hide();

	if(featureSelected == 'benefits'){

		$("#features-all").show();
		console.log("all features displayed ");
	}
	if(featureSelected == 'teachers'){

		$("#features-teachers").show();
		console.log("teachers features displayed ");
	}
	else if(featureSelected == 'parents'){

		$('#features-parents').show();
		console.log("parents features displayed ");
	}	
	else if(featureSelected == 'administrators'){

		$('#features-administrators').show();
		console.log("administrators features displayed ");
	}
	else if(featureSelected == 'students'){
	
		$('#features-students').show();
		console.log("Students features displayed ");
	}	
	console.log("Selected feature is" + featureSelected);

}