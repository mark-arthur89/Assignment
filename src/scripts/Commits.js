
// Import classes
import BaseClass from './BaseClass.js';
import Commit from './Commit.js';

// Commits class
class Commits extends BaseClass
{

     constructor(param) {
        super(param);
        this.start = param.start;
        this.limit = param.limit;
        this.items = [];

        let httpParams = { 
        url: param.url + "?start=" + param.start + "&limit=" + param.limit ,
        successCallback: function(data) {
            // console.log('data from server within commits ', data);
            let commitList = JSON.parse(data);
        
            for(let item of commitList) {
                let c = new Commit(item);
                this.obj.items.push(c);
            }
            // console.log('commits Object', this.obj);
            this.obj.param.resolveCallback(this.obj);
        },
        failureCallback: function(err) {
            console.log('something went wrong');
            this.obj.param.rejectCallback(err);
        },
        obj: this
        };

        // Make call to fetch a list of commits
        this.http.getData(httpParams);

     }
     // Get a commit
     GetCommitByID(id) {
     // looks through the list and returns the specified commit
     }
     // Save a commit
     SaveCommitByID(id) {
     // Saves a commit by ID
     }
}


export default Commits;