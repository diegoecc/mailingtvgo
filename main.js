$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();
	tabOne();//primer tab

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();
		var dataTab = $(this).data("tab");
		console.log(dataTab);

		var activeTab = $(this).attr('href');
		$(activeTab).show();

		if(dataTab === "oneTab"){
			tabOne();//Primer tab
		}else if(dataTab === "twoTab"){
			tabTwo();//Segundo tab
		} else if(dataTab === "threeTab"){
			tabThree();//Tercer tab
		} else if(dataTab === "fourTab"){
			tabFour();//Cuarto tab
		} else if(dataTab === "fiveTab"){
			tabFive();//Quinto tab
		} else{
			console.log("No hay mas tab");
		}

		return false;
	});

	/*Primer Tab*/ 
function tabOne(){
		google.charts.load('current', { 'packages': ['table'] });
		google.charts.setOnLoadCallback(drawTable);
		function drawTable() {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campaña');
			data.addColumn('number', 'Enviados');
			data.addColumn('number', 'Recibidos');
			data.addColumn('number', 'Abiertos');
			data.addColumn('number', 'Clics');
			data.addRows([
			['Club tvgo',   { v: 4085190, f: '4,085,190' }, { v: 4042550, f: '4,042,550 (98.96%)' }, { v: 90524, f: '90,524' }, { v: 3871,  f: '3871' }],
			['Series',      { v: 562582,  f: '562,582' },   { v: 559202,  f: '559,202 (99.40%)' },   { v: 21258, f: '21,258' }, { v: 797,   f: '797' }],
			['Cyber tvgo',  { v: 451030,  f: '451,030' },   { v: 448856,  f: '448,856 (99.52%)' },   { v: 13568, f: '13,568' }, { v: 751,   f: '751' }],
			['Champions',   { v: 228380,  f: '228,380' },   { v: 228093,  f: '228,096 (99.88%)' },   { v: 9487,  f: '9,487' },  { v: 494,   f: '494' }],
			['Peliculas',   { v: 178245,  f: '178,245' },   { v: 176846,  f: '176,846 (99.22%)' },   { v: 4385,  f: '4,385' },  { v: 198,   f: '198' }],
			['Comercial',   { v: 70631,   f: '70,631' },    { v: 69915,   f: '69,915 (98.99%)' },    { v: 3192,  f: '3,192' },  { v: 120,   f: '120' }],
			['Sorteos',     { v: 47546,   f: '47,546' },    { v: 47488,   f: '47,488 (99.88%)' },    { v: 2249,  f: '2,249' },  { v: 110,   f: '110' }],
			['Vencimiento', { v: 1145,    f: '1,145' },     { v: 1142,    f: '1,142 (99.74%)' },     { v: 227, f: '227' },      { v: 67,   f: '67' }]
			]);
			var table = new google.visualization.Table(document.getElementById('table_div10'));
			table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
		}

		google.charts.load('current', { 'packages': ['corechart'] });
		google.charts.setOnLoadCallback(drawChart1);
		function drawChart1() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Enviados'],
			['Club tvgo', 4085190],
			['Series',     562582],
			['Cyber tvgo', 451030],
			['Champions',  228380],
			['Peliculas',  178245],
			['Comercial',   70631],
			['Sorteos',     47546],
			['Vencimiento',  1145]
			]);
			var options = {
			title: 'MAILINGS ENVIADOS POR TIPO CAMPAÑA '
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart10'));
			chart.draw(data, options);
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart2);
		function drawChart2() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores'],
			['Club tvgo', 12.88, 1.41],
			['Series', 0, 2.64],
			['Vencimiento', 0, 21.35]
			]);
			var options = {
			title: 'RATIO DE APERTURA POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material10'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart3);
		function drawChart3() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores'],
			['Club tvgo', 9.99, 3.46],
			['Series', 0, 1.97],
			['Vencimiento', 0, 21.92]
			]);
			var options = {
			title: 'RATIO DE CLICS POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material11'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}
	}
	/*End primer tab*/ 

	/*Segundo tab*/
	function tabTwo(){
		google.charts.load('current', { 'packages': ['table'] });
		google.charts.setOnLoadCallback(drawTable);
		function drawTable() {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campaña');
			data.addColumn('number', 'Enviados');
			data.addColumn('number', 'Recibidos');
			data.addColumn('number', 'Abiertos');
			data.addColumn('number', 'Clics');
			data.addRows([
			['Club tvgo', { v: 1342151, f: '1,342,151' }, { v: 1328721, f: '1,328,721 (98.99%)' }, { v: 21786, f: '21,786' }, { v: 974, f: '974' }],
			['Series', { v: 26866, f: '26,866' }, { v: 26837, f: '26,837 (99.89%)' }, { v: 709, f: '709' }, { v: 14, f: '14' }],
			['Vencimiento', { v: 343, f: '343' }, { v: 342, f: '342 (99.71%)' }, { v: 73, f: '73' }, { v: 16, f: '16' }]
			]);
			var table = new google.visualization.Table(document.getElementById('table_div1'));
			table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
		}

		google.charts.load('current', { 'packages': ['corechart'] });
		google.charts.setOnLoadCallback(drawChart1);
		function drawChart1() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Enviados'],
			['Club tvgo', 1342151],
			['Series', 26866],
			['Vencimiento', 343]
			]);
			var options = {
			title: 'MAILINGS ENVIADOS POR TIPO CAMPAÑA '
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
			chart.draw(data, options);
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart2);
		function drawChart2() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 12.88, 1.47, 5.34],
			['Series', 0, 2.64, 0],
			['Vencimiento', 0, 21.35, 0]
			]);
			var options = {
			title: 'RATIO DE APERTURA POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material1'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart3);
		function drawChart3() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 9.99, 3.46, 2.96],
			['Series', 0, 1.97, 0],
			['Vencimiento', 0, 21.92, 0]
			]);
			var options = {
			title: 'RATIO DE CLICS POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material5'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}
	}
	/*End segundo tab*/

	/*Tercer tab*/
	function tabThree(){
		google.charts.load('current', { 'packages': ['table'] });
		google.charts.setOnLoadCallback(drawTable);
		function drawTable() {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campaña');
			data.addColumn('number', 'Enviados');
			data.addColumn('number', 'Recibidos');
			data.addColumn('number', 'Abiertos');
			data.addColumn('number', 'Clics');
			data.addRows([
			['Club tvgo', { v: 748266, f: '748,266' }, { v: 743623, f: '743,623 (99.38%)' }, { v: 20396, f: '20,396' }, { v: 766, f: '766' }],
			['Series', { v: 449301, f: '449,301' }, { v: 446855, f: '446,855 (99.46%)' }, { v: 15016, f: '15,016' }, { v: 556, f: '556' }],
			['Champions', { v: 159696, f: '159,696' }, { v: 159539, f: '159,539 (99.90%)' }, { v: 5696, f: '5,696' }, { v: 264, f: '264' }],
			['Comercial', { v: 59522, f: '59,522' }, { v: 58901, f: '58,901 (98.96%)' }, { v: 2335, f: '2,335' }, { v: 92, f: '92' }],
			['Sorteos', { v: 18017, f: '18,017' }, { v: 18007, f: '18,007 (99.94%)' }, { v: 1198, f: '1,198' }, { v: 52, f: '52' }],
			['Vencimiento', { v: 262, f: '262' }, { v: 260, f: '260 (99.24%)' }, { v: 41, f: '41' }, { v: 10, f: '10' }]
			]);
			var table = new google.visualization.Table(document.getElementById('table_div2'));
			table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
		}

		google.charts.load('current', { 'packages': ['corechart'] });
		google.charts.setOnLoadCallback(drawChart1);
		function drawChart1() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Enviados'],
			['Club tvgo', 748266],
			['Series', 449301],
			['Vencimiento', 262],
			['Champions', 159696],
			['Comercial', 59522],
			['Sorteos', 18018]
			]);
			var options = {
			title: 'MAILINGS ENVIADOS POR TIPO CAMPAÑA '
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
			chart.draw(data, options);
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart2);
		function drawChart2() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 11.33, 2.31, 5.25],
			['Series', 9.52, 2.37, 0],
			['Champions', 8.44, 3.17, 0],
			['Comercial', 0, 3.96, 0],
			['Sorteos', 10.31, 5.16, 0],
			['Vencimiento', 0, 15.77, 0]
			]);
			var options = {
			title: 'RATIO DE APERTURA POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart3);
		function drawChart3() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 6.64, 3.71, 1.54],
			['Series', 3.57, 3.79, 0],
			['Champions', 3.59, 4.87, 0],
			['Comercial', 0, 3.94, 0],
			['Sorteos', 6.32, 2.73, 0],
			['Vencimiento', 0, 24.39, 0]
			]);
			var options = {
			title: 'RATIO DE CLICS POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material6'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}
	}
	/*End tercer tab*/

	/*Cuarto tab*/
	function tabFour(){
		google.charts.load('current', { 'packages': ['table'] });
		google.charts.setOnLoadCallback(drawTable);
		function drawTable() {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campaña');
			data.addColumn('number', 'Enviados');
			data.addColumn('number', 'Recibidos');
			data.addColumn('number', 'Abiertos');
			data.addColumn('number', 'Clics');
			data.addRows([
			['Club tvgo', { v: 1210894, f: '1,210,894' }, { v: 1206946, f: '1,206,946 (99.67%)' }, { v: 34047, f: '34,047' }, { v: 1407, f: '1,407' }],
			['Series', { v: 67919, f: '67,919' }, { v: 67030, f: '67,030 (98.69%)' }, { v: 3861, f: '3,861' }, { v: 196, f: '196' }],
			['Películas', { v: 178245, f: '178,245' }, { v: 176846, f: '176,846 (99.22%)' }, { v: 4385, f: '4,385' }, { v: 198, f: '198' }],
			['Champions', { v: 27340, f: '27,340' }, { v: 27271, f: '27,271 (99.75%)' }, { v: 1058, f: '1,058' }, { v: 101, f: '101' }],
			['Comercial', { v: 11109, f: '11,109' }, { v: 11014, f: '11,014 (99.14%)' }, { v: 857, f: '857' }, { v: 28, f: '28' }],
			['Vencimiento', { v: 208, f: '208' }, { v: 208, f: '208 (100.00%)' }, { v: 53, f: '53' }, { v: 18, f: '18' }]
			]);
			var table = new google.visualization.Table(document.getElementById('table_div3'));
			table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
		}

		google.charts.load('current', { 'packages': ['corechart'] });
		google.charts.setOnLoadCallback(drawChart1);
		function drawChart1() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Enviados'],
			['Club tvgo', 1210894],
			['Series', 67919],
			['Vencimiento', 208],
			['Champions', 27340],
			['Comercial', 11109],
			['Peliculas', 178245]
			]);
			var options = {
			title: 'MAILINGS ENVIADOS POR TIPO CAMPAÑA '
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart3'));
			chart.draw(data, options);
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart2);
		function drawChart2() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 13.01, 2.54, 7.25],
			['Películas', 10.10, 2.02, 0],
			['Champions', 11.89, 3.43, 0],
			['Series', 15.67, 4.42, 0],
			['Comercial', 0, 7.78, 0],
			['Vencimiento', 0, 25.48, 0]
			]);
			var options = {
			title: 'RATIO DE APERTURA POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material3'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart3);
		function drawChart3() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 8.66, 3.94, 2.70],
			['Películas', 3.75, 4.75, 0],
			['Champions', 0.58, 11.30, 0],
			['Series', 3.27, 5.94, 0],
			['Comercial', 0, 3.27, 0],
			['Vencimiento', 0, 33.96, 0]
			]);
			var options = {
			title: 'RATIO DE CLICS POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material7'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}
	}
	/*End Cuarto tab*/

	/*Quinto tab*/
	function tabFive(){
		google.charts.load('current', { 'packages': ['table'] });
		google.charts.setOnLoadCallback(drawTable);
		function drawTable() {
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Campaña');
			data.addColumn('number', 'Enviados');
			data.addColumn('number', 'Recibidos');
			data.addColumn('number', 'Abiertos');
			data.addColumn('number', 'Clics');
			data.addRows([
			['Club tvgo', { v: 783879, f: '783,879' }, { v: 763260, f: '763,260 (97.37%)' }, { v: 14295, f: '14,295' }, { v: 724, f: '724' }],
			['Cyber tvgo', { v: 451030, f: '451,030' }, { v: 448856, f: '448,856 (99.52%)' }, { v: 13568, f: '13,568' }, { v: 751, f: '751' }],
			['Champions', { v: 41344, f: '41,344' }, { v: 41283, f: '41,283 (99.85%)' }, { v: 2733, f: '2,733' }, { v: 129, f: '129' }],
			['Sorteos', { v: 29529, f: '29,529' }, { v: 29481, f: '29,481 (99.84%)' }, { v: 1051, f: '1,051' }, { v: 58, f: '58' }],
			['Series', { v: 18496, f: '18,496' }, { v: 18480, f: '18,480 (99.91%)' }, { v: 1672, f: '1,672' }, { v: 31, f: '31' }],
			['Vencimiento', { v: 332, f: '332' }, { v: 332, f: '332 (100.00%)' }, { v: 60, f: '60' }, { v: 23, f: '23' }]
			]);
			var table = new google.visualization.Table(document.getElementById('table_div4'));
			table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
		}

		google.charts.load('current', { 'packages': ['corechart'] });
		google.charts.setOnLoadCallback(drawChart1);
		function drawChart1() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Enviados'],
			['Club tvgo', 783879],
			['Series', 18496],
			['Vencimiento', 332],
			['Champions', 41344],
			['Sorteos', 29529],
			['Cyber tvgo', 451030]
			]);
			var options = {
			title: 'MAILINGS ENVIADOS POR TIPO CAMPAÑA '
			};
			var chart = new google.visualization.PieChart(document.getElementById('piechart4'));
			chart.draw(data, options);
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart2);
		function drawChart2() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 12.87, 2.68, 6.77],
			['Cyber tvgo', 0, 3.02, 0],
			['Champions', 11.96, 5.64, 0],
			['Sorteos', 9.19, 2.55, 0],
			['Series', 13.06, 7.52, 0],
			['Vencimiento', 0, 18.07, 0]
			]);
			var options = {
			title: 'RATIO DE APERTURA POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material4'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}

		google.charts.load('current', { 'packages': ['bar'] });
		google.charts.setOnLoadCallback(drawChart3);
		function drawChart3() {
			var data = google.visualization.arrayToDataTable([
			['Campaña', 'Suscriptores', 'No Suscriptores 0', 'No Suscriptores 1'],
			['Club tvgo', 9.14, 4.78, 2.86 ],
			['Cyber tvgo', 0, 5.54, 0],
			['Champions', 4.70, 4.73, 0],
			['Sorteos', 8.7, 3.45, 0],
			['Series', 2.26, 1.59, 0],
			['Vencimiento', 0, 38.33, 0]
			]);
			var options = {
			title: 'RATIO DE CLICS POR TIPO CAMPAÑA (%)',
			};
			var chart = new google.charts.Bar(document.getElementById('columnchart_material8'));
			chart.draw(data, google.charts.Bar.convertOptions(options));
		}
	}
	/*End Quinto tab*/


});
