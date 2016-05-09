
// File class

class File
{
	sha = "";
	filename = "";
	patch = "";

	constructor(obj) {
		this.sha = obj.sha;
		this.filename = obj.filename;
		this.patch = obj.patch;
	}
}

export default File;