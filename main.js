module.exports = {
	isNumQualified, checkNumRange, createMultiplyTable
}

function isNumQualified(start,end){
	if(start>end){
		return false;
	}
	return true;
}	

function checkNumRange(start,end){
	if(start > 0 && start < 1000){
		if(end > 0 && start < 1000){
		return true;
		}
		return false;
	}
}	

function createMultiplyTable(start, end) {
    if (isNumQualified(start, end) && checkNumRange(start, end)) {
        var c = "";
        for (var i = start; i <= end; i++) {
            for (j = start; j <= i; j++) {
                c += j + "*" + i + "=" + j * i + (j == i ? "\n": "\t");
            }
        }
        return c;
    }
    return null;
}