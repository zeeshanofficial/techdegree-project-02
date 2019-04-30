/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
//Declaring global variables
const listItems = document.querySelectorAll('.student-item');
const perPage = 10;

//Function to hide all students and show only a particular set of ten
const showPage = (list, page) => {
  let startIndex = (page * perPage) - perPage;
  let endIndex = page * perPage;
  for(let i=0; i<list.length; i+= 1){
    if(i>=startIndex && i<= endIndex){
      list[i].style.display='block';
    } else{
      list[i].style.display='none';
    }
  }
}

//Function to create pagination buttons, adds them to the DOM, and add their functionality.

const appendPageLinks = (list) => {
  const pages = Math.ceil(list.length/perPage);
  const pageContainer = document.querySelector('.page');
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('pagination');
  const ul = document.createElement('ul');
  pageDiv.appendChild(ul);
  pageContainer.appendChild(pageDiv);

  //Button elements are created dynamically to the DOM 
  for(let i= 0; i < pages; i+= 1){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href','#');
      a.textContent = i+1;
      li.appendChild(a);
      ul.appendChild(li);
  }

//a variable is created for setting and removing 'active' classes on the button(s)
  const aLinks = ul.querySelectorAll('a');
  aLinks[0].setAttribute('class','active');

  //Buttons are made functional by looping through all a tag and adding click events
  for(let i=0; i<aLinks.length; i+=1){  
    ul.addEventListener('click', (e) =>{
      showPage(listItems, e.target.textContent);  
      aLinks[i].removeAttribute('class');
      e.target.setAttribute('class','active');
    })
  }
};

//And finally the function call
showPage(listItems, 1);
appendPageLinks(listItems);


