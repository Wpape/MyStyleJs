(function (global) {
	var a = 2;
	console.log('index1 a: ', a);
	global.index1 = a;
})(window);

var data = {
	label: 'Pictures',
	data: 'Pictures Folder',
	expandedIcon: 'pi pi-folder-open',
	collapsedIcon: 'pi pi-folder',
	children: [
		{
			label: 'barcelona.jpg',
			icon: 'pi pi-image',
			data: 'Barcelona Photo',
			children: [
				{
					label: 'l1',
					icon: 'i1',
					data: 'd1',
					children: [
						{
							label: 'l1-1',
							icon: 'i1-1',
							data: 'd1-1',
							children: [],
						},
					],
				},
				{
					label: 'l2',
					icon: 'i2',
					data: 'd2',
					children: [],
				},
			],
		},
		{ label: 'logo.jpg', icon: 'pi pi-file', data: 'PrimeFaces Logo', children: [] },
		{ label: 'primeui.png', icon: 'pi pi-image', data: 'PrimeUI Logo', children: [] },
	],
};
