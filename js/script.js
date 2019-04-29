/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const listItems = document.querySelectorAll('.student-item');
const perPage = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
  let startIndex = (page * perPage) - perPage;
  let endIndex = page * perPage;
  for(let i=0; i<list.length; i+= 1){
    if(i>=startIndex && i<= endIndex){
      return list[i];
    }
  }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const page = document.querySelector('.page');

const appendPageLinks = (listItems) => {
  const pages = Math.ceil(listItems.length/perPage);
  const pageDiv = document.createElement('div');
  pageDiv.className = 'pagination';
  page.appendChild(pageDiv);
  const ul = document.createElement('ul');
  const a = document.createElement('a');
  const li = document.createElement('li');
  pageDiv.appendChild(ul);
  for(let i= 0; i<pages.length; i+= 1){
      ul.appendChild(li);
      li.appendChild(a);
      a[i].href = '#';
      a[i].textContent = i;
  }
    a.addEventListener('click', (e) =>{

      for(let i=0; i<a.length; i +=1){
        a.className = '';
      }
      
      showPage(listItems, i);
      e.target.className = 'active';
    })
}

appendPageLinks(listItems);



// Remember to delete the comments that came with this file, and replace them with your own code comments.

