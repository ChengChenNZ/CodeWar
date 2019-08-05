function tribonacci(signature,n)
{
	var tri = signature;
	for(var i = 3;i<n; i++){
		tri.push(tri[i-1] + tri[i-2] + tri[i-3])
}
	return tri.slice(0,n);
}

