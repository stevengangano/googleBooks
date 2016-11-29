function searchBooks(){
	var search =  document.getElementById("search").value
	document.getElementById("results").innerHTML = ""

	$.ajax({
	    url: "https://www.googleapis.com/books/v1/volumes?q=" + search ,
	    dataType: "json",
	    success: function(data) {
	   
	    for(i=0;i<data.items.length;i++){
	   		var jdata = data.items[i].volumeInfo // loops through everything in volumeInfo array
	 
	   		// Inserts title, author, description, thumbnail, button here
	   		var mainDiv = document.createElement('div') 
	    	mainDiv.className = "background-border col-lg-4 col-md-4 col-sm-6 col-xs-12"


	   		// Title
	   		var newH5=document.createElement('h6')
	   		var title= document.createTextNode(jdata.title)
	   		newH5.className="bookTitle"
	   		newH5.appendChild(title)
	   		mainDiv.appendChild(newH5)

	   		// Author
	   		var newH6= document.createElement('h6')
	   		var author= document.createTextNode('Author: ' + jdata.authors[0])
	   		newH6.className="bookAuthor"
	   		newH6.appendChild(author)
	   		mainDiv.appendChild(newH6)

	   		//Read more Button
	   		var newDiv2=document.createElement('div')
	   		newDiv2.className = "read-more"
	   		var newAtag2=document.createElement('a')
	   		newAtag2.innerHTML = "Read more..."
	   		// newAtag2.setAttribute('data-toggle', 'modal')
	   		// newAtag2.setAttribute('data-target', '#myModal')
	   		newAtag2.setAttribute('href', jdata.infoLink)
	   		newAtag2.setAttribute('target', '_blank')
	   		newDiv2.appendChild(newAtag2)
	 		mainDiv.appendChild(newDiv2)

	 		//modal
	 		// var myModal = document.createElement('div')
	 		// var modalDialog = document.createElement('div')
	 		// var modalContent = document.createElement('div')
	 		// var modalHeader = document.createElement('div')
	 		// var button1 = document.createElement('btn')
	 		// var button1text= document.createTextNode('&times;')
	 		// var modalh4 = document.createElement('h4')
	 		// var modalh4text= document.createTextNode('Modal Header')
	 		// var modalBody = document.createElement('div')
	 		// var modalP = document.createTextNode('some text')
	 		// var modalFooter = document.createElement('div')
	 		// var button2 =  document.createElement('btn')

	 		// myModal.setAttribute('id', 'myModal')
	   // 		myModal.setAttribute('class', 'modal fade')
	   // 		myModal.setAttribute('role', 'dialog')
	   // 		modalDialog.setAttribute('class', 'modal-dialog')

	   // 		myModal.appendChild(modalDialog)

	   // 		modalContent.setAttribute('class', 'modal-content')

	   // 		modalDialog.appendChild(modalContent)

	   // 		modalHeader.setAttribute('class', 'modal-header')

	   // 		modalContent.appendChild(modalHeader)

	   // 		button1.setAttribute('type', 'button')	
	   // 		button1.setAttribute('class', 'close')
	   // 		button1.appendChild(button1text)
	   // 		button1.setAttribute('data-dismiss', 'modal')

	   // 		modalHeader.appendChild(button1)

	   // 		modalh4.setAttribute('class', 'modal-title')

	   // 		modalHeader.appendChild(modalh4)
	   // 		modalh4.appendChild(modalh4text)

	   // 		modalBody.setAttribute('class', 'modal-body')

	   // 		modalContent.appendChild(modalBody)
	   // 		modalBody.appendChild(modalP)


	   // 		modalFooter.setattribute('class', 'modal-footer')

	   // 		modalContent.appendChild(modalFooter)

	   // 		button2.setattribute('type', 'button')
	   // 		button2.setattribute('class', 'btn btn-default')
	   // 		button2.setattribute('data-dismiss', 'modal')
	   // 		button2.innerhtml = 'Close';

	   // 		modalFooter.appendChild(button2)


	   // 		Description
	   // 		var para=document.createElement('P')
	   // 		var description=document.createTextNode(jdata.description)
	   // 		para.className='bookDescription'
	   // 		para.appendChild(description)
	   // 		mainDiv.appendChild(para)


	   		// Thumbnail 
	   		var newImg=document.createElement('img')
	   		newImg.setAttribute('src', jdata.imageLinks.thumbnail)
	   		newImg.className="thumb-img img-rounded img-responsive margin"
	   		newImg.className="margin"
	   		mainDiv.appendChild(newImg)

	   // 		// Learn more Button
	   // 		var newDiv=document.createElement('div')
	   // 		var newAtag=document.createElement('a')
	   // 		newAtag.innerHTML = "Learn more"
	   // 		newAtag.className = "btn btn-info"
	   // 		newAtag.setAttribute('href', jdata.infoLink)
	   // 		newAtag.setAttribute('target', '_blank')
	   // 		newDiv.appendChild(newAtag)
	   // 		mainDiv.appendChild(newDiv)

	   		document.getElementById('results').appendChild(mainDiv)

	    }
	    },
	    type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', searchBooks, false)


// Activates the enter key
function searchKeyPress(e) {
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('button').click();
        return false;
    }
    return true;
}









