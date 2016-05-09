import './styles/styles.scss';
import Commits from './scripts/Commits.js';
import http from './scripts/HttpManager.js';

// Rock some code here

    // Create a simple promise to execute 
    let pagePromise = new Promise(function(resolve, reject){
		// Create the commits object here
		let param = {
		http: new http(),
		url: "http://localhost:8080/commits",
		start: 0,
		limit: 25, 
		resolveCallback: function(obj){
			resolve(obj);
		},
		rejectCallback: function(err){
			reject(err);
		}
		};
        let c = new Commits(param);

    });

    // Promise Success
    pagePromise.then(function(commits){

        let myApp = document.getElementById("myApp");
        let ul = document.createElement("UL");

        for(let commit of commits.items) {
            let li = document.createElement("LI");
            li.innerHTML = `<div class="commit"> 
                                 <div class="title"> ${commit.partialMessage} </div>
                                 <div class="author"> Author : ${commit.authorName} </div>
                                 <div class="time"> Commit Date : ${commit.time} </div>
                                 <div class="additions"> Additions : ${commit.additionCount} </div>
                                 <div class="deletions"> Deletions : ${commit.deletionCount} </div>
                                 <div class="files"> No of files : ${commit.files.length} </div>
                           </div>`;
            ul.appendChild(li);
        }

        myApp.innerHTML = "";
        myApp.appendChild(ul);

        // add listners
        document.getElementsByClassName("title").addEventListener("click", function(event) {

        });

    });

    // Promise failure
    pagePromise.catch(function(err){
        let myApp = document.getElementById("myApp");
    });


// For webpack HMR
if (module.hot) {
  module.hot.accept();
}
