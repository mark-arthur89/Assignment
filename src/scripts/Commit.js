import File from './File.js';

// Commit class

class Commit
{
	
	sha = "";
	authorName = "";
	time = "";
	partialMessage = "";
	message = "";
	additionCount = 0;
	deletionCount = 0;
	files = [];
	isModified = false;

	constructor(obj) {
		this.sha = obj.sha;
		this.authorName = obj.commit.author.name;
		this.time = Commit.getDate(obj.commit.author.date);
		this.partialMessage = Commit.getPartialMessage(obj.commit.message);
		this.message = obj.commit.message;
		this.additionCount = obj.stats.additions;
		this.deletionCount = obj.stats.deletions;
		this.files = Commit.getFiles(obj.files);
	}

	// Update the message value
	updateMessage(commitMessage) {
		this.message = commitMessage;
		this.isModified = true;
	}

	static getFiles(files) {
		// Convert files to Files object
        let filesList = [];
        for(let file of files){
            let fObj = new File(file);
            filesList.push(fObj);
        }

        return filesList;
	}

	static getDate(dateString) {
		let d = new Date(dateString);
		let time = d.toLocaleDateString() + " Time : " + d.toLocaleTimeString();

		return time;
	}

	static getPartialMessage(message){
		return message.substring(0, 50);
	}

}

export default Commit;