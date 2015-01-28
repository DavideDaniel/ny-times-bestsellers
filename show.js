var button = document.querySelector("button");
button.addEventListener("click", function (){
	var a = document.querySelector("a");
	var xhr = new XMLHttpRequest();
     var url = a.href;
     xhr.open( "GET", url );
     xhr.addEventListener( "load", function () {
          var book = JSON.parse( xhr.responseText )
          var body = document.querySelector("body");
    		var h3 = document.createElement("h3")
    		var h4 = document.createElement("h4")
    		var p = document.createElement("p")
    		h3.innerText = book.title
    		h4.innerText = book.author
    		p.innerText = book.description
    				body.appendChild(h3)
    				body.appendChild(h4)
    				body.appendChild(p)

      });
     xhr.send();
});


<script type="text/javascript">

	var bookLink = document.getElementById("#<%= books[book].id %>");
	
bookLink.addEventListener("click", function (){
	alert("buttonclicked")
	
	var url = '/book/'+ books[book].id;
	var xhr = new XMLHttpRequest();
     xhr.open( "GET", url );
     xhr.addEventListener( "load", function () {
          var book = JSON.parse( xhr.responseText )
          var body = document.querySelector("body");
    		var h3 = document.createElement("h3")
    		var h4 = document.createElement("h4")
    		var p = document.createElement("p")
    		h3.innerText = book.title
    		h4.innerText = book.author
    		p.innerText = book.description
    				body.appendChild(h3)
    				body.appendChild(h4)
    				body.appendChild(p)

      });
     xhr.send();
});


</script>