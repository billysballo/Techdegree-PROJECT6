//document.addEventListener('DOMContentLoaded',()=>{

		const sectionQ= document.getElementById("qwerty");
		const sectionPhrase= document.getElementById("phrase");
		let missed= 0;
		var unorderList= document.querySelector("#phrase ul")
	
		var startGame= document.querySelector(".btn__reset")
		
		// Hide Overlay if button clicked.
		startGame.addEventListener("click", function(e){overlay.style.display="none"})

		var phrases= ["I love pizza","take me to India","I am hungry","help me out","Run boy Run"]



		function getRandomPhraseAsArray(yourPhrase){

		var randomNumber= Math.floor(Math.random() * yourPhrase.length);
		var selectedRandomly=phrases[randomNumber].toLowerCase();
			for (let i=0; i<=selectedRandomly.length;i++){
			var newArrayChars=selectedRandomly[i]
			newArrayChars=selectedRandomly.split('')}

			console.log(newArrayChars)
			return newArrayChars
		}

		function addPhraseToDisplay(arrayOfChars){

			for (let i=0; i<=arrayOfChars.length;i++){

				var newLi=document.createElement('li')
				newLi.textContent=arrayOfChars[i]
				   newLi.textContent.match(/[a-zA-Z]/) ? newLi.className= "letter" : null
				   newLi.textContent.match(/[a-zA-Z]/) ? newLi.style.transitionDuration= "1s" : null
				   newLi.textContent.match(/[a-zA-Z]/) ? newLi.style.transitionProperty= "transform" : null
						newLi.textContent.match(/[\s]/) ? newLi.className= "space" : null
				unorderList.appendChild(newLi)
			}
		      
		}


		const phraseArray = getRandomPhraseAsArray(phrases);
		addPhraseToDisplay(phraseArray); 


		function checkLetter(keypressed){
			 let letters= document.querySelectorAll("li.letter")
			    let guess = null;
			    for (i = 0; i < letters.length; i++) {
			      if (letters[i].textContent == button) {
			        letters[i].classList.add('show');
			        letters[i].style.transform="rotate(360deg)";
			        guess = true;
			      }
			    }
			    return guess;
			  }
		
		function checkWin(){
			let lettersShown = document.getElementsByClassName('show').length;
  			let lettersTotal = document.getElementsByClassName('letter').length;
  			let lives = document.getElementsByClassName('tries').length;
  			let overlay = document.getElementById('overlay');
  			var tryAgain = document.createElement('input');
			   	tryAgain.setAttribute('type', 'button');
			    tryAgain.setAttribute('name', 'Try Again');
			    tryAgain.setAttribute('value', 'Try Again');
  			 if (lettersShown == lettersTotal) {
					    overlay.classList.add('win');
					    let winner=document.getElementsByClassName('win')[0]
					      winner.style.padding="8%"
					      winner.style.fontSize="5vh"
					    overlay.innerHTML = 'WIN!';
					    overlay.style.display = 'block';
					     overlay.appendChild(tryAgain);
						    tryAgain.onclick = function() {
						      location.reload(true);
						    }
						    sectionPhrase.style.border="5px solid black"
						    sectionPhrase.style.zIndex="1"
						    tryAgain.style.fontSize = '90%';
						    tryAgain.style.borderRadius = "15px";
						      tryAgain.style.margin = 'auto';
						      tryAgain.style.marginTop = '30vh';
						      tryAgain.style.display = 'block';
						      tryAgain.style.padding = '10px';	
					   		 		   
					      } 
					      else if (lives == 0) {
					      overlay.classList.add('lose');
					      let loser=document.getElementsByClassName('lose')[0]
					      loser.style.padding="25%"
					      loser.style.fontSize="5vh"
					      overlay.innerHTML = 'ahhha LOSEr!';
					      overlay.style.display = 'block';
					      overlay.appendChild(tryAgain);
					     sectionPhrase.style.display="none"
					      	tryAgain.onclick = function() {
					        location.reload(true);
					      }
					      tryAgain.style.fontSize = '90%';
					      tryAgain.style.borderRadius = "15px";
					      tryAgain.style.marginTop = '40vh';
					      tryAgain.style.margin = 'auto';
					      tryAgain.style.display = 'block';
					      }
		}
							

		let button = document.body.addEventListener('click', e => {
		  if (e.target.nodeName == 'BUTTON') {
					e.target.classList.add("chosen");
		     		e.target.setAttribute('disabled', true);
		    		button = e.target.textContent;
		    		let letterFound = checkLetter(button);
		      			if (letterFound == null) {
		      				let tries=document.querySelectorAll(".tries")
		      					if(tries.length>=1){
		       						 tries[0].remove()
		       						}
		    				}
		  		}checkWin()
		 });




//})