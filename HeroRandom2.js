$(document).ready(function () {
	
var select_image = $("[id='dcom_hero_global']").parent().parent();
try{
	
    var target = Math.floor(Math.random() * select_image.length -1) + 1;
	if(target == "") throw "target is empty";
	else if (target === undefined) throw "target is undefined"
}
catch(e)
{
	
	console.log(e);
}
	select_image.hide();
select_image.eq(target).show();


});