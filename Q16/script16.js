let count = 0;
for(let i=1; i<=4; i++)
{
	let outline = '';
	for(let j=0; j<i; j++)
	{ 
		count += 1;
		outline += count + ' ';
	}
	console.log(outline);
}

